/*
||----------------------------------||
||									||
||    Sunsick Studio 				||
||	  VueJS Routes  			  	||
||	  Alex Meza (Meza Web Lab)  	||
||	  2018					  		||
||									||
||----------------------------------||
*/

import Home from "./components/pages/Home.vue";
import Services from "./components/pages/Services.vue";
import OurWork from "./components/pages/OurWork.vue";
import Gear from "./components/pages/Gear.vue";
import Contact from "./components/pages/Contact.vue";

export const routes = [
	{
		path      : "/",
		component : Home
	},
	{
		path      : "/services",
		component : Services
	},
	{
		path      : "/our-work",
		component : OurWork
	},
	{
		path      : "/gear",
		component : Gear
	},
	{
		path      : "/contact",
		component : Contact
	}
];