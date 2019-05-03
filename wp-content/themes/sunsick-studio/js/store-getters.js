/*
||----------------------------------||
||									||
||    Sunsick Studio 				||
||	  VueX Getters 	           	  	||
||	  Alex Meza (Meza Web Lab)  	||
||	  2018					  		||
||									||
||----------------------------------||
*/

export const storeGetters = {
    homeData     : state => {
        return state.home;
    },
    servicesData : state => {
        return state.services;
    },
    playerData   : state => {
        return state.player;
    },
    musicData    : state => {
        return state.music;
    }
}