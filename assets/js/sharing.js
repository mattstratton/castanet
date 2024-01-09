$("#share").jsSocials({
  shares: [
{
  share: "facebook",
  logo: "fab fa-facebook",
},
{
  share: "twitter",           // name of share
  label: "Tweet",             // share button text (optional)
  logo: "fab fa-twitter",
  // The twitter link can be based in short ("arresteddevops") or
  //  long form ("https://twitter.com/arresteddevops")
  // In long form we need to strip everything but the twitter handle
  //  for the 'via' parameter
  {{ if (isset .Site.Params.social "twitter" )}}
    {{ if gt (len (urls.Parse .Site.Params.social.twitter).Scheme) 0 }}
      via: "{{ trim ((urls.Parse .Site.Params.social.twitter).Path) "/" }}", // custom twitter sharing param 'via' (optional)
    {{ else }}
      via: "{{ .Site.Params.social.twitter }}", // custom twitter sharing param 'via' (optional)
    {{ end }}
  {{ end }}
  url: "{{ .Permalink }}",
  text: "{{ title .Title }}"
},
{
  share: "linkedin",
  logo: "fab fa-linkedin"
},
{
  share: "pinterest",
  logo: "fab fa-pinterest"
}
],
});