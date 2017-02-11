ln -s /opt/build/repo /opt/build/devopsdays-theme
cd exampleSite
../bin/hugo version
../bin/hugo --theme=castanet --buildDrafts=false --baseURL=$URL
