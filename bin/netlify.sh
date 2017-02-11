ln -s /opt/build/repo /opt/build/devopsdays-theme
cd exampleSite
hugo_0.18 --theme=castanet --buildDrafts=false --baseURL=$URL
