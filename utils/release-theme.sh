#!/bin/bash

current_version=`grep theme_version theme.toml | cut -d '=' -f2 | xargs`
major_version=`echo $current_version | cut -d '.' -f1 | xargs`
minor_version=`echo $current_version | cut -d '.' -f2 | xargs`
patch_version=`echo $current_version | cut -d '.' -f3 | xargs`
echo "Current theme version is $current_version."
read -p "Do you want a [1] major, [2] minor, or [3] patch version? " version_level
echo "Major version is $major_version."
echo "Minor version is $minor_version."
echo "Patch version is $patch_version."

case $version_level in
  '1')
  let "major_version += 1"
  echo "Major version is now $major_version"
  new_version=$major_version
  new_version+=".0.0"
  echo "new version is now $new_version"
  ;;
  '2')
  let "minor_version += 1"
  echo "Minor version is now $minor_version"
  new_version=$major_version
  new_version+="."
  new_version+=$minor_version
  new_version+=".0"
  echo "new version is now $new_version"
  ;;
  '3')
  let "patch_version += 1"
  new_version=$major_version
  new_version+="."
  new_version+="$minor_version"
  new_version+="."
  new_version+=$patch_version
  echo "Patch version is now $patch_version"
  echo "new version is now $new_version"
  ;;
  *)
  echo "Invalid option"
  ;;
esac

git stash
git checkout master
git pull origin master
github_changelog_generator --future-release "$new_version" --no-issues-wo-labels --no-pr-wo-labels --no-compare-link --exclude-labels='duplicate,question,invalid,wontfix,do-not-merge,no-changelog'
sed -i '' "s/$current_version/$new_version/g" ./theme.toml

git add .
git commit -m "Update theme to version $new_version"
git tag -a $new_version -m "$new_version"
