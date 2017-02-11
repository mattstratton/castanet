ln -s /opt/build/repo /opt/build/castanet
cd exampleSite
../bin/hugo version
../bin/hugo --theme=castanet --buildDrafts=false --baseURL=$URL
