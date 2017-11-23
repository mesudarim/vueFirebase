// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app;
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB_sZgozQWdulRiKDIBC5COiyU449TrcnI",
  authDomain: "vueapp-72992.firebaseapp.com",
  databaseURL: "https://vueapp-72992.firebaseio.com",
  projectId: "vueapp-72992",
  storageBucket: "",
  messagingSenderId: "176994282560"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
})

/* eslint-disable no-new */
