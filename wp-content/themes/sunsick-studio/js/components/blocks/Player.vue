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
        <div v-if="screen === 0" class="screen screen-0 now-playing">
            <div class="header">
                <div class="artwork">
                    <div>
                        <img :src="playerData.artwork" />
                        <img v-if="!playerData.playing" @click="play" src="/wp-content/themes/sunsick-studio/images/play-btn-small.svg" />
                        <img v-if="playerData.playing" @click="pause" src="/wp-content/themes/sunsick-studio/images/pause-btn-small.svg" />
                    </div>
                </div>
                <div class="info">
                    <div class="content">
                        <p>{{ playerData.song }}</p>
                        <p>{{ playerData.artist }}</p>
                        <p>{{ playerData.album }}</p>
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

            </div>
            <div class="body">

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

    export default {
        name      : "player",
        computed  : {
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

                    this.loadSong(this.songs[this.songIndex]);

                    this.checkIndex();
                }
            },
            previousSong() {
                if (! this.isFirstIndex) {
                    this.songIndex--;

                    this.loadSong(this.songs[this.songIndex]);

                    this.checkIndex();
                }
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
            ...mapMutations([
                "play",
                "pause",
                "loadSong"
            ])
        }
    };
</script>
