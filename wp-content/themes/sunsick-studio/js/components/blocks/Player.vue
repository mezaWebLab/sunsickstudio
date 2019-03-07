<!--
||----------------------------------||
||                                  ||
||    Sunsick Studio                ||
||    Player Component              ||
||    Alex Meza (Meza Web Lab)      ||
||    2018                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="player">
        <audio ref="audioNode">
			<source :src="playerData.loadedSong.src" type="audio/mpeg">
		</audio>
        <div v-if="screen === 0" class="screen screen-0 now-playing">
            <div class="header">
                <div class="artwork">
                    <div>
                        <img :src="playerData.loadedSong.artwork" />
                        <img v-if="!playerData.playing" @click="play($refs.audioNode)" src="/wp-content/themes/sunsick-studio/images/play-btn-small.svg" />
                        <img v-if="playerData.playing" @click="pause($refs.audioNode)" src="/wp-content/themes/sunsick-studio/images/pause-btn-small.svg" />
                    </div>
                </div>
                <div class="info">
                    <div class="content">
                        <p>{{ playerData.loadedSong.title }}</p>
                        <p>{{ playerData.loadedSong.artist }}</p>
                        <p>{{ playerData.loadedSong.album }}</p>
                        <div class="controllers">
                            <button @click="previousSong" :class="{ 'disabled' : isFirstIndex }">
                                <img src="/wp-content/themes/sunsick-studio/images/arrow-yellow-left.png" />
                            </button>
                            <button @click="nextSong" :class="{ 'disabled' : isLastIndex }">
                                <img src="/wp-content/themes/sunsick-studio/images/arrow-yellow-right.png" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="controllers">
                    <button @click="previousSong" :class="{ 'disabled' : isFirstIndex }">
                        <img src="/wp-content/themes/sunsick-studio/images/arrow-yellow-left.png" />
                    </button>
                    <button @click="nextSong" :class="{ 'disabled' : isLastIndex }">
                        <img src="/wp-content/themes/sunsick-studio/images/arrow-yellow-right.png" />
                    </button>
                </div>
            </div>
            <div class="footer">
                <div @click="goToScreen(1)">
                    <p>View Discography</p>
                    <img src="/wp-content/themes/sunsick-studio/images/arrow-outline-right.svg" />
                </div>
                <!-- <div class="disclaimer">
                    <p>*All songs recorded and mixed at Sunsick Studio</p>
                </div> -->
            </div>
        </div>
        <div v-if="screen === 1" class="screen screen-1 discography">
            <div class="header">
                <div>&nbsp;</div>
                <div>Song Title</div>
                <div>Artist</div>
                <div>Album</div>
            </div>
            <div class="body" ref="discographyBody">
                <div v-for="song in songs" class="song" @click="onSongClick(song)" ref="songDOM">
                    <img :src="song.artwork" :class="{ 'active' : song.loaded }" />
                    <div class="song-title">
                        <span>{{ song.title }}</span>
                    </div>
                    <div class="song-artist">
                        <span>{{ song.artist }}</span>
                    </div>
                    <div class="song-album">
                        <span>{{ song.album }}</span>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div v-if="screen === 1" @click="goToScreen(0)">
                    <img src="/wp-content/themes/sunsick-studio/images/arrow-outline-left.svg" />
                    <p>Now Playing</p>
                </div>
            </div>
        </div>
	</div>	
</template>

<script>
    import { mapGetters } from "vuex";
    import { mapMutations } from "vuex";
    import PerfectScrollbar from "perfect-scrollbar";

    export default {
        name : "player",
        computed : {
            ...mapGetters([
                "playerData",
                "musicData"
            ])
        },
        data() {
            return {
                songs        : [],
                songIndex    : 0,
                screen       : 0,
                isFirstIndex : false,
                isLastIndex  : false
            };
        },
        created() {},
        mounted() {
            window.audioNode = this.$refs.audioNode;
            this.arrangeSongs();
            this.setFeatureSong();
        },
        methods : {
            arrangeSongs() {
                this.musicData.artists.forEach(artist => {
                    artist.songs.forEach(song => {
                        this.songs.push(song);
                    });
                });
            },
            goToScreen(screen) {
                switch (screen) {
                    case 0:
                        this.screen = 0;
                    break;
                    case 1:
                        this.screen = 1;
                        this.initScrollbar("discography-body");
                    break;
                }
            },
            setFeatureSong() {
                let randomIndex = Math.ceil(Math.random() * this.songs.length - 1);

                this.songIndex = randomIndex;

                this.checkIndex();

                this.loadSong(this.songs[randomIndex]);
            },
            nextSong() {
                if (! this.isLastIndex) {
                    this.songIndex++;
                    
                    this.unloadSongs();

                    this.loadSong(this.songs[this.songIndex]);

                    if (this.playerData.playing) {
                        this.pause();
                        this.play();
                    }

                    this.checkIndex();
                }
            },
            previousSong() {
                if (! this.isFirstIndex) {
                    this.songIndex--;
                    
                    this.unloadSongs();

                    this.loadSong(this.songs[this.songIndex]);

                    if (this.playerData.playing) {
                        this.pause();
                        this.play();
                    }

                    this.checkIndex();
                }
            },
            onSongClick(song) {
                if (!song.loaded) {
                    this.unloadSongs();
                    this.loadSong(song); 
                    this.play();
                } else {
                    if (this.playerData.playing) {
                        this.pause();
                    } else {
                        this.play();
                    }
                }
            },
            initScrollbar(module) {
                this.$nextTick(() => {
                    let songNodes = $(this.$refs.discographyBody).find(".song");

                    switch (module) {
                        case "discography-body":
                            $(this.$refs.discographyBody).find(".ps__rail-x").add(".ps__rail-y").remove();

                            let discographyScrollBar = new PerfectScrollbar(this.$refs.discographyBody, {
                                suppressScrollX : true
                            });

                            // this.initScrollbar("songs-grid");
                        break;
                        case "songs-grid":
                            for (let i = 0; i < songNodes.length; i++) {
                                let songTitleContainerNode = $(songNodes[i]).find(".song-title"),
                                    songTitleTextNode      = $(songNodes[i]).find(".song-title span"),
                                    artistContainerNode    = $(songNodes[i]).find(".song-artist"),
                                    artistTextNode         = $(songNodes[i]).find(".song-artist span"),
                                    albumContainerNode     = $(songNodes[i]).find(".song-album"),
                                    albumTextNode          = $(songNodes[i]).find(".song-album span");

                                console.log(albumContainerNode.outerWidth(), "<", albumContainerNode.outerWidth());

                                function domNodes(parentNode, childNode) {
                                    if (childNode.outerWidth() < parentNode.outerWidth()) {
                                        songTitleContainerNode.css("background", "red"); 

                                        let widthDiff = parentNode.outerWidth() - childNode.outerWidth(),
                                            left      = 0,
                                            right     = 0,
                                            direction = "left",
                                            interval;
                                        
                                        console.log(widthDiff);

                                        console.log(widthDiff);

                                        if (widthDiff > 5) {
                                            switch (direction) {
                                                case "right":
                                                    interval = setInterval(() => {
                                                        // songTitleTextNode
                                                    }, 1000 / 30);
                                                break;
                                                case "left":
                                                    interval = setInterval(() => {
                                                        left++;
                                                        console.log("ja!");
                                                        // childNode.css("left", "-" + left + "px");
                                                    }, 1000 / 30);
                                                break;
                                            }
                                        }
                                    }
                                }

                                domNodes(songTitleContainerNode, songTitleTextNode);
                                domNodes(albumContainerNode, albumTextNode);
                                domNodes(artistContainerNode, artistTextNode);
                            }
                        break;
                    }
                });
            },
            checkIndex() {
                if (this.songIndex === 0) {
                    this.isFirstIndex = true;
                } else {
                    this.isFirstIndex = false;
                }

                if (this.songIndex === this.songs.length - 1) {
                    this.isLastIndex = true;
                } else {
                    this.isLastIndex = false;
                }
            },
            onResize() {
                this.initScrollbar();
            },
            ...mapMutations([
                "play",
                "pause",
                "loadSong",
                "unloadSongs"
            ])
        }
    };
</script>
