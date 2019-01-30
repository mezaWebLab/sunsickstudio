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

Vue.use(Vuex);

let jsonData;

function fetchSiteData() {
    $.ajax({
        url      : "/wp-content/themes/sunsick-studio/sunsick-studio.php",
        type     : "post",
        dataType : "json",
        async    : false,
        success  : (json) => {
            jsonData = json;
        }
    });
}

fetchSiteData();

export const storeState = {
    home   : jsonData.home,
    player : {
        songId  : 0,
        song    : "",
        artist  : "",
        album   : "",
        src     : "",
        artwork : "",
        playing : false
    },
    music : {
        artists : [
            {
                id     : 0,
                name   : "Battery Point",
                songs  : [
                    {
                        id      : 0,
                        title   : "Alien OG",
                        artist  : "Battery Point",
                        album   : "Cool Album",
                        artwork :  "/wp-content/themes/sunsick-studio/music/artists/batterypoint/album-0.png",
                        src     : "",
                        playing : false
                    }
                ]
            },
            {
                id     : 1,
                name   : "Black Marble",
                songs  : [
                    {
                        id      : 1,
                        title   : "Woods",
                        artist  : "Black Marble",
                        album   : "Cool Album",
                        artwork :  "/wp-content/themes/sunsick-studio/images/albums/album-1.png",
                        src     : "",
                        playing : false
                    }
                ]
            },
            {
                id     : 2,
                name   : "Blink 182",
                songs  : [
                    {
                        id      : 2,
                        title   : "Cool Song",
                        artist  : "Blink 182",
                        album   : "Song Album 2",
                        artwork :  "/wp-content/themes/sunsick-studio/images/albums/album-2.png",
                        src     : "",
                        playing : false
                    }
                ]
            }
        ]
    }
};
