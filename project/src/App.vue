<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
    
    <app-navbar :app-name="appName" :folder-image="folderImage"></app-navbar>
  <app-header :folder-image="folderImage"></app-header>
  <app-projects :folder-image="folderImage"></app-projects>
  <app-footer></app-footer>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'

Vue.component('app-navbar', {
  template: `
<v-toolbar dark>
<v-toolbar-title v-html="appName" />
<v-spacer />

<v-btn icon href="https://www.linkedin.com/in/ivanlim8" target="_blank" right>
<img :src="imageLinkedIn" height="32" />
</v-btn>

<v-btn icon href="https://github.com/ijklim" target="_blank" right>
<img :src="imageGithub" height="32" />
</v-btn>

<v-btn icon href="https://codepen.io/ivanlim" target="_blank" right>
<img :src="imageCodepen" height="32" />
</v-btn>
</v-toolbar>
`,
  data () {
    return {
    }
  },
  props: {
    appName: {
      type: String,
      default: ''
    },
    folderImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageCodepen () {
      return this.folderImage + 'icon-codepen-32.png';
    },
    imageGithub () {
      return this.folderImage + 'icon-github-32.png';
    },
    imageLinkedIn () {
      return this.folderImage + 'icon-linkedin-34.png';
    }
  },
  methods: {

  },
  mounted () {

  }
});

Vue.component('app-header', {
  template: `
<v-jumbotron :gradient="gradient" dark class="elevation-5" height="none">
<v-container fluid fill-height grid-list-xl>
<v-layout row wrap align-center>

<v-flex xs12 md8 text-xs-center my-4>
<v-card id="jumbo-card" flat>
<h1 class="display-2 mb-3">Web Application Software Engineer</h1>
<h2>
25 years software development experience
<em style="display:block;font-size:1rem;">- Vue.js, Laravel, Vuetify, Bootstrap, PHP, Python, HTML, CSS, MySQL, SQLite, Firebase, GraphQL etc.</em>
</h2>
</v-card>
</v-flex>

<v-flex xs12 md4 text-xs-center my-4>
<transition>
<v-avatar
class="grey lighten-4"
v-if="isAvatarVisible"
:size="avatarSize"
>
<img :src="imageProfile" />
</v-avatar>
</transition>
</v-flex>

</v-layout>
</v-container>
</v-jumbotron>
`,
  data () {
    return {
      avatarSize: 250,
      gradient: 'to right, #004, #1CB5E0',
      isAvatarVisible: false
    }
  },
  props: {
    folderImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageProfile () {
      return this.folderImage + 'profile.jpg';
    }
  },
  methods: {

  },
  mounted () {
    // To trigger animation
    this.isAvatarVisible = true;
  }
});



const URL_CODEPEN = 'https://codepen.io/ivanlim/full/';

Vue.component('app-projects', {
  template: `
<v-container grid-list-xl>
<v-layout wrap>
<v-flex
xs12
sm6
lg4

v-for="project in projects"
:key="project.id"
>
<v-card hover :href="project.url" height="100%">
<v-card-media
height="330px"
:src="getThumbnailUrl(project.name)"
>
</v-card-media>

<v-divider />

<v-card-text>
<h3 v-html="project.name" class="mb-2"></h3>
<v-chip
class="white--text"
color=info
small
v-for="tag in project.tags"
:key="tag.id"
>
{{ tag }}
</v-chip>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
`,
  data () {
    return {
      projects: [
        { name: 'Simon Game', url: `${URL_CODEPEN}LdVOme`, tags: ['Vue.js', 'Vuetify', 'SweetAlert'] },
        { name: 'Tic Tac Toe', url: `${URL_CODEPEN}JLPyPq`, tags: ['Vue.js', 'Vuetify', 'SweetAlert'] },
        { name: 'Notes Sharing App', url: `https://notes-2go.firebaseapp.com`, tags: ['Vue.js', 'Vuetify', 'Vuex', 'Vuelidate', 'Firebase'] },
        { name: 'Chat App', url: `http://larachat.aiwebstudio.com`, tags: ['Laravel', 'Vue.js', 'Bootstrap', 'Pusher'] },
        { name: 'Pomodoro Timer', url: `https://pomodoro-timer.github.io`, tags: ['Vue.js', 'Bootstrap', 'Vuex', 'PWA'] },
        { name: 'Calculator', url: `${URL_CODEPEN}xYBdbm`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Pomodoro Clock', url: `${URL_CODEPEN}BYgKWa`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Weather Forecast', url: `${URL_CODEPEN}zRMYZP`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Random Quote Machine', url: `${URL_CODEPEN}yvxqQj`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Wikipedia Viewer', url: `${URL_CODEPEN}zRMVEd`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Twitch TV', url: `${URL_CODEPEN}VQggvY`, tags: ['Vue.js', 'Vuetify'] }
      ]
    }
  },
  props: {
    folderImage: {
      type: String,
      default: ''
    }
  },
  computed: {

  },
  methods: {
    /**
     * Sample thumbnail file name: `thumb--simon-game.jpg`
     * @param {String} projectName 
     */
    getThumbnailUrl (projectName) {
      return this.folderImage +
        'thumb--' +
        projectName.toLowerCase().replace(/\s/g, '-') +
        '.jpg';
    }
  },
  mounted () {

  }
});

Vue.component('app-footer', {
  template: `
<v-footer dark class="px-3">
Proudly brought to you by
&nbsp;<a href="https://aiwebstudio.com" target="_blank">Ivan Lim</a>&nbsp; |
678-439-8880 |
&nbsp;<a href="https://aiwebstudio.com/contact-us/" target="_blank">Contact Us</a>&nbsp;
</v-footer>
`,
  data () {
    return {

    }
  },
  props: {
    folderImage: {
      type: String,
      default: ''
    }
  },
  computed: {

  },
  methods: {

  },
  mounted () {

  }
});

new Vue({
  el: '#app',
  data () {
    return {
      appName: 'Portfolio of Ivan Lim',
      folderImage: 'https://raw.githubusercontent.com/ijklim/portfolio/gh-pages/assets/img/'
    }
  }
});
</script>

<style>
/* Hide side scrollbar if content does not need it */
html {
  overflow-y: auto; 
}
.application {
  font-family: 'Quicksand', sans-serif;
}

/* Remove background of card in v-jumbotron */
#jumbo-card {
  background-color: rgba(0, 0, 0, 0);
}

/* Animation */
.v-enter-active, .v-leave-active {
  transition: all 1s ease;
}

.v-enter, .v-leave-to {
  transform: scale(0.1);
  opacity: 0;
}

</style>