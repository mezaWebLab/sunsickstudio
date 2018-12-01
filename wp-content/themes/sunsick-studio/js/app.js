/*
||----------------------------------||
||									||
||    Sunsick Studio 				||
||	  Main App File 			  	||
||	  Alex Meza (Meza Web Lab)  	||
||	  2018					  		||
||									||
||----------------------------------||
*/

import VueRouter from "vue-router";

import { routes } from "./routes";

Vue.use(VueRouter);

Vue.component('navigation', require('./components/blocks/Navigation.vue').default);
Vue.component('player', require('./components/blocks/Player.vue').default);


const router = new VueRouter({
    routes,
    mode : "history"
});

const app = new Vue({
	el : "#app",
	router
});

window.scrollLock = function() {
	$("body").addClass("scroll-lock");
}

window.scrollUnlock = function() {
	$("body").removeClass("scroll-lock");
}

window.scrollToTop = function() {
	$("html, body").animate({ scrollTop: 0 }, 'fast');
}