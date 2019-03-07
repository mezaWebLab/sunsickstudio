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

$.ajax({
    url      : "/wp-content/themes/sunsick-studio/sunsick-studio.php",
    type     : "post",
    dataType : "json",
    async    : false,
    success  : (json) => {
        jsonData = json;
        console.log(json);
    }
});

export const storeState = {
    home   : jsonData.home,
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
    music : {
        artists : [
            {
                id     : 0,
                name   : "Battery Point",
                songs  : [
                    {
                        id      : 0,
                        title   : "Wish",
                        artist  : "Battery Point",
                        album   : "Star",
                        artwork : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/a3809403914_16.jpg",
                        src     : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/bp-wish.mp3",
                        loaded  : false,
                        playing : false
                    },
                    {
                        id      : 1,
                        title   : "Another Year",
                        artist  : "Battery Point",
                        album   : "A Memory for Today",
                        artwork : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/a0819712968_16.jpg",
                        src     : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/bp-another-year.mp3",
                        loaded  : false,
                        playing : false
                    },
                    {
                        id      : 2,
                        title   : "Street Lights",
                        artist  : "Battery Point",
                        album   : "Battery Point",
                        artwork : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/a2510056921_16.jpg",
                        src     : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/bp-streetlights.mp3",
                        loaded  : false,
                        playing : false
                    },
                    {
                        id      : 3,
                        title   : "Wish",
                        artist  : "Battery Point",
                        album   : "Star",
                        artwork : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/a3809403914_16.jpg",
                        src     : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/bp-wish.mp3",
                        loaded  : false,
                        playing : false
                    },
                    {
                        id      : 4,
                        title   : "Another Year",
                        artist  : "Battery Point",
                        album   : "A Memory for Today",
                        artwork : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/a0819712968_16.jpg",
                        src     : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/bp-another-year.mp3",
                        loaded  : false,
                        playing : false
                    },
                    {
                        id      : 5,
                        title   : "Street Lights",
                        artist  : "Battery Point",
                        album   : "Battery Point",
                        artwork : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/a2510056921_16.jpg",
                        src     : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/731234/bp-streetlights.mp3",
                        loaded  : false,
                        playing : false
                    }
                ]
            }
        ]
    }
};
