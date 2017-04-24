// @codekit-prepend '../../bower_components/jquery/dist/jquery.js'
// @codekit-prepend '../../bower_components/tether/dist/js/tether.js'
// @codekit-prepend '../../bower_components/bootstrap/dist/js/bootstrap.js'
// @codekit-prepend '../../bower_components/jssocials/dist/jssocials.js'
// @codekit-prepend '../../bower_components/audiojs/audiojs/audio.js'

audiojs.events.ready(function() {
  var as = audiojs.createAll({
    imageLocation: '/img/player-graphics.gif',
    swfLocation: '/swf/audiojs.swf'
   });
 });
