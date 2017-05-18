ln -s /opt/build/repo /opt/build/castanet
cd exampleSite
hugo --theme=castanet --buildDrafts=false --baseURL="$DEPLOY_PRIME_URL"
