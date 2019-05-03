/*
||----------------------------------||
||									||
||    Sunsick Studio 				||
||	  App Store Data 			  	||
||	  Alex Meza (Meza Web Lab)  	||
||	  2018					  		||
||									||
||----------------------------------||
*/

import Vue from "vue";
import Vuex from "vuex";
import musicFormatter from "./music-formatter";

Vue.use(Vuex);

let sunsickData,
    musicData;

$.ajax({
    url      : "/wp-content/plugins/sunsick-editor/sunsick-content.json",
    type     : "post",
    dataType : "json",
    async    : false,
    success  : (json) => {
        sunsickData = json;
        // console.log(json);
    }
});

$.ajax({
    url      : "/wp-content/plugins/sunsick-player/get_all_music.php",
    type     : "post",
    dataType : "json",
    async    : false,
    success  : (data) => {
        musicData = data;
        // console.log(data);
    }
});

export const storeState = {
    home : sunsickData.home,
    services : sunsickData.services,
    player : {
        songId     : 0,
        playing    : false,
        loadedSong : {
            id      : "",
            title   : "",
            artist  : "",
            album   : "",
            artwork : "",
            src     : "",
            loaded  : false,
            playing : false
        }
    },
    music : musicFormatter.format(musicData)
};
