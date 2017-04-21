ln -s /opt/build/repo /opt/build/castanet
cd exampleSite
hugo_0.19 --theme=castanet --buildDrafts=false --baseURL="$URL"
