(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["011ca09e"],{"3e63":function(e,t,n){"use strict";var a=n("dd4f"),o=n.n(a);o.a},"8b24":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("main",{staticClass:"flex flex-start justify-center inset-shadow"},[n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg bg-white shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[n("q-markdown",{attrs:{src:e.markdown,toc:""},on:{data:e.onToc}})],1)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"page-header"},[n("h1",{staticClass:"project-name"},[e._v("QMediaPlayer")]),n("h2",{staticClass:"project-tagline"}),n("a",{staticClass:"btn",attrs:{href:"https://github.com/quasarframework/app-extension-qmediaplayer",target:"_blank"}},[e._v("View on GitHub")]),n("a",{staticClass:"btn",attrs:{href:"https://quasarframework.github.io/app-extension-qmediaplayer/#/demo",target:"_blank"}},[e._v("Demo")])])}],s="QMediaPlayer\n===\n\n![official icon](https://img.shields.io/badge/Quasar%201.0-Official%20UI%20App%20Extension-blue.svg) ![npm (scoped)](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qmediaplayer.svg?style=plastic)\n\n\nQMediaPlayer is an [Quasar App Extension](https://v1.quasar-framework.org/app-extensions/introduction). It is a powerful component that plugs right into your Quasar application and allows you to play HTML5 video and audio.\n\nThis work is currently in `beta` and there are expected changes while things get worked out. Your help with testing is greatly appreciated.\n\n# Install\nTo add this App Extension to your Quasar application, run the following (in your Quasar app folder):\n\n```shell\nquasar ext add @quasar/qmediaplayer\n```\n# Uninstall\nTo remove this App Extension from your Quasar application, run the following (in your Quasar app folder):\n\n```shell\nquasar ext remove @quasar/qmediaplayer\n```\n\n# Describe\nYou can use `quasar describe QMediaPlayer`\n\n# Demo\nCan be found [here](https://quasarframework.github.io/app-extension-qmediaplayer/#/demo).\n\n# Example Code\n\n## Video example\n\n```html\n<q-media-player\n  type=\"video\"\n  background-color=\"black\"\n  :muted=\"muted\"\n  radius=\"1rem\"\n  :autoplay=\"true\"\n  :show-big-play-button=\"true\"\n  :sources=\"video.sources\"\n  :poster=\"video.poster\"\n  :tracks=\"video.tracks\"\n  track-language=\"English\"\n  @ended=\"onEnded\"\n>\n  <template v-if=\"overlay\" v-slot:overlay>\n    <div>\n      <img\n        src=\"statics/quasar-logo.png\"\n        style=\"width: 30vw; max-width: 50px; opacity: 0.25;\"\n      >\n    </div>\n  </template>\n</q-media-player>\n```\n\nand the data...\n\n```js\ndata () {\n  return {\n    video: [\n      {\n        label: 'Tears of Steel',\n        poster: 'statics/media/TearsOfSteel/TearsOfSteel.jpeg',\n        sources: [\n          {\n            src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n            type: 'video/mp4'\n          }\n        ],\n        tracks: [\n          {\n            src: 'statics/media/TearsOfSteel/TOS-en.vtt',\n            kind: 'subtitles',\n            srclang: 'en',\n            label: 'English'\n          },\n          {\n            src: 'statics/media/TearsOfSteel/TOS-de.vtt',\n            kind: 'subtitles',\n            srclang: 'de',\n            label: 'German'\n          },\n          {\n            src: 'statics/media/TearsOfSteel/TOS-es.vtt',\n            kind: 'subtitles',\n            srclang: 'es',\n            label: 'Spanish'\n          },\n          {\n            src: 'statics/media/TearsOfSteel/TOS-fr-Goofy.vtt',\n            kind: 'subtitles',\n            srclang: 'fr',\n            label: 'French'\n          },\n          {\n            src: 'statics/media/TearsOfSteel/TOS-it.vtt',\n            kind: 'subtitles',\n            srclang: 'it',\n            label: 'Italian'\n          },\n          {\n            src: 'statics/media/TearsOfSteel/TOS-nl.vtt',\n            kind: 'subtitles',\n            srclang: 'nl',\n            label: 'Dutch'\n          }\n        ]\n      }\n    ]\n  }\n}\n```\n\n## Audio example\n\n```js\naudio: {\n  sources: [\n    {\n      src: 'statics/media/Dee_Yan-Key_-_01_-_Driving_Home.mp3',\n      type: 'audio/mp3'\n    }\n  ]\n}\n```\n\n# Language Files\n\nWe need help translating the language files. They are all currently using English. If you know another language, please PR and help us out.\n\n## Completed languages\n- English\n- German/Deutsch ([@mstaack](https://github.com/mstaack)/[@smolinari](https://github.com/smolinari))\n- Polish/Polski ([@kubawolanin](https://github.com/kubawolanin))\n- Chinese/中文 ([@songzhi](https://github.com/songzhi))\n\n---\n\n# QMediaPlayer Vue Properties\n\n| Property | Type\t| Mode | Description |\n|---|---|---|---|\n| type | String | Both | ['video','audio'] This determines the type of player. (Default: 'video') |\n| color | String | Both | One from Quasar Color Palette. It determines the color of the MediaPlayer controls. (Default: 'white')|\nmobile-mode\t| Boolean\t| Video\t| In normal mode, the controls show/hide with mouse movements. When set to true, the controls' visibility is controlled by touch/click. (Default: false)\nsources\t| Array | Both | Required. This is an array of one or more objects, that looks like this: { **src**: 'https://your-server/your-video.mov', **type**:  'video/mp4' }\nposter | String | Video |The poster image to display before the video is started.\ntracks | Array | Video | This is an array of one or more objects, that looks like this: { **src**: 'https://your-server//path-to-subtitles-en.vtt', **kind**: 'subtitles', **srclang**: 'en', **label**: 'English }\ntrack-language | String | Video | A value that corresponds to the **'label'** attribute of the **'tracks'** property. This will be the default language.\npreload | String | Both | ['none', 'metadata', 'auto'] Provides a hint to the browser about what the author thinks will lead to the best user experience. (Default: 'metadata').\ndense | Boolean | Both | When true displays controls window on one line.\ndark | Boolean | Both | When component is rendered on a dark background.\nautoplay | Boolean | Both | Automatically start video/audio when it is ready to play. (Default: false)\ncross-origin | String,null | Both | [null, 'anonymous', 'use-credentials']\nvolume | Number | Both | A value from 0-100 (as a percentage). (Default: 60)\nmuted | Boolean | Both | If the player should be muted. (Default: false)\nshow-big-play-button | Boolean | Video | Show/hide the Big Play Button. (Default: true)\nshow-spinner | Boolean | Both | If the spinner should be displayed while video/audio is loading. (Default: true)\ncontrols-display-time | Number | Video | The amount of idle time in milliseconds to wait before hiding the controls (default 2000). This is applied when the mouse cursor is within the QMediaPlayer window but has not moved.\nno-controls | Boolean | Video | If set to true, the controls will never be displayed. This is useful if you want full control. Your controls can be on another place on your page.\nplayback-rates | Array | Video | This is an array of one or more objects, that look like this: { **label**: '.5x', **value**: 0.5 }. **Note:** The default playbackRates include 0.5, 1, 1.5 and 2.0.\"\nplayback-rate | Number | Video | Corresponds to the value in playback-rates.\nbackground-color | String | Both | One from Quasar Color Palette. It determines the background color of the MediaPlayer. (Default: 'black')\n\n**cross-origin:**\n\nWhether to use CORS for fetching assets.\n\n1. **anonymous** - CORS requests for this element will not have the credentials flag set.\n2. **use-credentials** - CORS requests for this element will have the credentials flag set; this means the request will provide credentials.\n3. **null** - do not use CORS.\n\n**preload:**\n\nThis enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:\n\n1. **none**: Indicates that the audio should not be preloaded.\n2. **metadata**: Indicates that only audio metadata (e.g. length) is fetched.\n3. **auto**: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.\n\n\n# QMediaPlayer Vue Methods\n\n| Method | Mode | Description |\n|---|---|---|\nshowControls() | Video | Show the controls.\nhideControls() | Video | Hide the controls.\ntoggleControls() | Video | Toggle the controls.\ntogglePlay() | Both | Toggles between play/pause states.\ntoggleMuted() | Both | Toggles between mute/unmute states..\ntoggleFullscreen() | Video | Toggle fullscreen mode.\nsetCurrentTime(seconds) | Both | Set the current time of the video/audio player (in seconds).\nsetVolume(percent) | Both | Sets the volume as a percent (0-100).\n\n# QMediaPlayer Vue Events\n\n| Event | Mode | Description |\n|---|---|---|\n@loaded() | Both | Emitted when the media has been loaded.\n@ready() | Both | Emitted when the media is ready to play. You cannot play/pause or setCurrentTime before this event.\n@duration(seconds) | Both | Emitted when the duration of the media has been determined.\n@ended() | Both | Emitted when the media has finished playing.\n@error(MediaError) | Both | Emitted when there is a media error.\n@paused() | Both | Emitted when the media is paused.\n@playing() | Both | Emitted when the media starts playing. This will also emit after a pause or a wait.\n@timeupdate(curTime, remaining) | Both | Emitted wenever there is a time update (during play).\n@fullscreen(true/false) | Video | Emitted when entering/exiting fullscreen mode.\n@waiting() | Both | Emitted when the media player goes into a wait state (typically waiting while downloading)\n@showControls(true/false) | Video | Emitted when the Controls are toggled (show/hide).\n@volume(percent) | Both | Emitted when the volume changes.\n@muted(true/false) | Both | Emitted when the mute changes.\n\n# QMediaPlayer Vue Slots\n\n| Slots | Mode | Description |\n|---|---|---|\n| old-browser | Both | When the browser does not support HTML5 (or has Javascript turned off).\n| overlay | Both | Used to overlay any HTML over the media window.\n| error-window | Both | Used to display an error.\n| controls | Both | With this slot all of the controls can be replaced.\n| spinner | Both | With this slot the loading spinner can be replaced.\nbig-play-button | Video | With this slot the Big Play Button can be replaced.\ndisplay-time | Both | With this slot the display time can be replaced.\nposition-slider | Both | With this slot the positioning slider can be replaced.\nduration-time | Both | With this slot the duration time can be replaced.\nplay | Both | With this slot the play button can be replaced.\nvolume | Both | With this slot the volume mute/unmute button can be replaced.\nvolume-slider | Both | With this slot the volume slider can be replaced.\nsettings | Video | With this slot the Settings icon can be replaced.\nsettings-menu | Video | With this slot the Settings Menu can be replaced.\nfullscreen | Video | With this slot the Fullscreen icon can be replaced.\n\n# Patreon\nIf you like (and use) this App Extension, please consider becoming a Quasar [Patreon](https://www.patreon.com/quasarframework).\n\n---\nThis page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown/demo/dist/spa/#/images), another great Quasar App Extension.",i={name:"PageIndex",data:function(){return{markdown:s}},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{onToc:function(e){this.toc=e}}},r=i,l=(n("3e63"),n("2877")),d=Object(l["a"])(r,a,o,!1,null,null,null);t["default"]=d.exports},dd4f:function(e,t,n){}}]);