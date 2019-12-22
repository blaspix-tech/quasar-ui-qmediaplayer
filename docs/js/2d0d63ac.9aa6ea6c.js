(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0d63ac"],{7250:function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div>\n    <q-select\n      v-model=\"iconSet\"\n      :options=\"iconSetOptions\"\n      label=\"Icon set\"\n      dense\n      borderless\n      emit-value\n      map-options\n      options-dense\n      style=\"min-width: 150px\"\n      class=\"q-ma-sm\"\n    />\n    <q-media-player\n      type=\"video\"\n      :sources=\"sources\"\n      :tracks=\"tracks\"\n      mobile-mode\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov',\n          type: 'video/mp4'\n        }\n      ],\n      tracks: [\n        {\n          src: 'statics/media/TearsOfSteel/TOS-en.vtt',\n          kind: 'subtitles',\n          srclang: 'en',\n          label: 'English'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-de.vtt',\n          kind: 'subtitles',\n          srclang: 'de',\n          label: 'German'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-es.vtt',\n          kind: 'subtitles',\n          srclang: 'es',\n          label: 'Spanish'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-fr-Goofy.vtt',\n          kind: 'subtitles',\n          srclang: 'fr',\n          label: 'French'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-it.vtt',\n          kind: 'subtitles',\n          srclang: 'it',\n          label: 'Italian'\n        },\n        {\n          src: 'statics/media/TearsOfSteel/TOS-nl.vtt',\n          kind: 'subtitles',\n          srclang: 'nl',\n          label: 'Dutch'\n        }\n      ],\n      iconSet: this.$q.iconSet.name,\n      iconSetOptions: [\n        { label: 'Eva Icons', value: 'eva-icons' },\n        { label: 'Fontawesome', value: 'fontawesome-v5' },\n        { label: 'Ion Icons', value: 'ionicons-v4' },\n        { label: 'Material Icons', value: 'material-icons' },\n        { label: 'MDI', value: 'mdi-v3' },\n        { label: 'Themify', value: 'themify' }\n      ]\n    }\n  },\n  watch: {\n    iconSet (iconSet) {\n      switch (iconSet) {\n        case 'eva-icons':\n          this.changeIconSetToEvaIcons()\n          break\n        case 'fontawesome-v5':\n          this.changeIconSetToFontAwesome()\n          break\n        case 'ionicons-v4':\n          this.changeIconSetToIonIcons()\n          break\n        case 'material-icons':\n          this.changeIconSetToMaterialIcons()\n          break\n        case 'mdi-v3':\n          this.changeIconSetToMDI()\n          break\n        case 'themify':\n          this.changeIconSetToThemify()\n          break\n      }\n    }\n  },\n  methods: {\n    // in this scenario, each icon set must have a\n    // path and cannot be loaded dynamically.\n    // This allows webpack to know each font that\n    // could be used so it is available for loading.\n    changeIconSetToEvaIcons () {\n      this.$q.iconSet = require('quasar/icon-set/eva-icons.js').default\n    },\n    changeIconSetToFontAwesome () {\n      this.$q.iconSet = require('quasar/icon-set/fontawesome-v5.js').default\n    },\n    changeIconSetToIonIcons () {\n      this.$q.iconSet = require('quasar/icon-set/ionicons-v4.js').default\n    },\n    changeIconSetToMaterialIcons () {\n      this.$q.iconSet = require('quasar/icon-set/material-icons.js').default\n    },\n    changeIconSetToMDI () {\n      this.$q.iconSet = require('quasar/icon-set/mdi-v3.js').default\n    },\n    changeIconSetToThemify () {\n      this.$q.iconSet = require('quasar/icon-set/themify.js').default\n    }\n  }\n}\n<\/script>\n"}}]);