ln -s /opt/build/repo /opt/build/devopsdays-theme
cd exampleSite
hugo_0.19 --theme=devopsdays-theme --buildDrafts=false --baseURL="$URL"
gulp --cwd .
