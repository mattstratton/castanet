#!/bin/sh
# guest-yml-to-md.sh
# Converts guest YAML files in data/guests/ to Markdown files in content/guest/
# Usage: sh docs/utils/guest-yml-to-md.sh
#
# Requires yq (https://github.com/mikefarah/yq) version 4+
#
# All fields except 'bio' and 'name' are written as TOML frontmatter. Arrays are supported. Objects are skipped with a warning.
# 'Title' is set from 'full_name'. 'date' is set to the current date/time.

command -v yq >/dev/null 2>&1 || { echo >&2 "This script requires 'yq' (https://github.com/mikefarah/yq). Please install it and try again."; exit 1; }

GUEST_YAML_DIR="data/guests"
GUEST_MD_DIR="content/guest"

# Ensure output directory exists
mkdir -p "$GUEST_MD_DIR"

# Get current date/time in the required format
current_date=$(date +'%Y-%m-%dT%H:%M:%S%z')

for yaml in "$GUEST_YAML_DIR"/*.yml; do
  [ -e "$yaml" ] || continue
  # Get full_name for Title, fallback to filename if missing
  full_name=$(yq e '.full_name' "$yaml")
  [ "$full_name" = "null" ] && full_name=$(basename "$yaml" .yml)
  mdfile="$GUEST_MD_DIR/$(basename "$yaml" .yml).md"

  # Start TOML frontmatter
  echo '+++' > "$mdfile"
  echo "Title = \"$full_name\"" >> "$mdfile"
  echo "date = \"$current_date\"" >> "$mdfile"

  # Get all keys except 'bio', 'name', and 'full_name'
  keys=$(yq e 'keys | .[]' "$yaml" | grep -v -E '^(bio|name|full_name)$')
  for key in $keys; do
    # Check type
    type=$(yq e ".${key} | type" "$yaml")
    case "$type" in
      "!!str"|"!!int"|"!!bool"|"!!float")
        # Scalar
        value=$(yq e ".${key}" "$yaml" | sed 's/"/\\"/g')
        echo "$key = \"$value\"" >> "$mdfile"
        ;;
      "!!seq")
        # Array
        echo -n "$key = [" >> "$mdfile"
        arr=$(yq e ".${key}[]" "$yaml")
        first=1
        while IFS= read -r item; do
          [ $first -eq 0 ] && echo -n ", " >> "$mdfile"
          echo -n "\"$item\"" >> "$mdfile"
          first=0
        done <<EOF
$arr
EOF
        echo "]" >> "$mdfile"
        ;;
      "!!map")
        echo "# WARNING: Skipping object field '$key' in $yaml (TOML tables not supported by this script)" >&2
        ;;
      *)
        echo "# WARNING: Unknown type for field '$key' in $yaml: $type" >&2
        ;;
    esac
  done

  echo '+++' >> "$mdfile"
  # Write bio as content
  yq e '.bio' "$yaml" >> "$mdfile"
  echo "Created $mdfile"
done 