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
    play : (state) => {
        state.player.playing = true;
        window.audioNode.play();
    },
    pause : (state) => {
        state.player.playing = false;
        window.audioNode.pause();
    },
    loadSong : (state, song) => {
        if (song) {
            // state.player.song    = song.title;
            // state.player.artist  = song.artist;
            // state.player.artwork = song.artwork;
            // state.player.album   = song.album;
            // state.player.src     = song.src;
            song.loaded             = true;
            song.playing            = false;
            state.player.loadedSong = song;
            // state.player.playing = false;
            window.audioNode.load();
        }
    },
    unloadSongs : state => {
        state.music.artists.forEach(artist => {
            artist.songs.forEach(song => {
                song.playing = false;
                song.loaded = false;
            });
        });
    }
}