#!/bin/bash
#
# This script copies required JavaScript files from node_modules to the Hugo assets directory.
# It is used to ensure that all necessary JavaScript dependencies are available for Hugo Pipes
# to process, without requiring the entire node_modules directory to be committed to
# source control.
#
# The script copies:
# - jQuery
# - Bootstrap JS
# - jssocials
#
# Run this script using 'make deps' or directly with './utilities/build-scripts/copy-js-deps.sh'

# Create necessary directories if they don't exist
mkdir -p assets/js/vendor

# Copy JavaScript dependencies
cp node_modules/jquery/dist/jquery.js assets/js/vendor/
cp node_modules/jssocials/dist/jssocials.js assets/js/vendor/
cp node_modules/mediaelement/build/mediaelement-and-player.js assets/js/vendor/
cp node_modules/mediaelement-plugins/dist/speed/speed.js assets/js/vendor/
cp node_modules/mediaelement-plugins/dist/speed/speed-i18n.js assets/js/vendor/


# Create a source map file
cat > assets/js/castanet-min.js.map << EOL
{
  "version": 3,
  "file": "devopsdays-min.js",
  "sources": [
    "vendor/jquery.js",
    "vendor/jssocials.js",
    "vendor/mediaelement-and-player.js",
    "vendor/speed.js",
    "vendor/speed-i18n.js",
    "castanet.js"
  ],
  "mappings": "AAAA"
}
EOL 