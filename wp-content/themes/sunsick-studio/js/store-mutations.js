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

export const storeMutations = {
    play  : (state, song) => {
        state.player.playing = true;
    },
    pause   : state => {
        state.player.playing = false;
    },
    loadSong : (state, song) => {
        if (song) {
            state.player.song    = song.title;
            state.player.artist  = song.artist;
            state.player.artwork = song.artwork;
            state.player.album   = song.album;
            state.player.src     = song.src;
            state.player.playing = false;
        }
    }
}