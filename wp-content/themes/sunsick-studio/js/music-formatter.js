/*
||----------------------------------||
||									||
||    Sunsick Studio 				||
||	  Music Formatter 			  	||
||	  Alex Meza (Meza Web Lab)  	||
||	  2019					  		||
||									||
||----------------------------------||
*/

let musicFormatter = {
    musicData : null,
    artists : [],
    formattedData : {
        artists : []
    },
    isInArray(arr, item) {
        let isInArray = false;

        arr.forEach(index => {
            if (item === index) {
                isInArray = true;
            }
        })

        return isInArray;
    },
    getAllSongByArtistName(name) {
        let songs = [];

        this.musicData.forEach(song => {
            if (song.artist === name) {
                songs.push({
                    id : parseInt(song.id),
                    title : song.title,
                    artist : song.artist,
                    album : song.album,
                    artwork : song.artwork,
                    src : song.src,
                    loaded : false,
                    playing : false
                });
            }
        });

        return songs;
    },
    format(data) {
        let artistCount = 1;

        this.musicData = data;

        this.musicData.forEach(song => {
            if (! this.isInArray(this.artists, song.artist)) {
                this.artists.push(song.artist);
            }
        });

        this.artists.forEach(artist => {
            this.formattedData.artists.push({
                id : artistCount,
                name : artist,
                songs : this.getAllSongByArtistName(artist)
            });
        });

        return this.formattedData;
    }
}

export default musicFormatter;