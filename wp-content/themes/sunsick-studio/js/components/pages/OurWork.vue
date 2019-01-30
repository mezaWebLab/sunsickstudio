<!--
||----------------------------------||
||                                  ||
||    Sunsick Studio                ||
||    Our Work Page Component       ||
||    Alex Meza (Meza Web Lab)      ||
||    2018                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="our-work">
		<div class="container">
            <div class="row">
                <div class="col-md">
                    <div class="page-title">
                        <h1>Our Work<span class="color-primary">.</span></h1>
                    </div>
                    <div class="divider alt hide-on-small-only"></div>
                </div>
            </div>
            <div class="content">
                <div v-show="desktop" class="music-slider music-slider-desktop">
                    <div v-for="artist in musicData.artists">
                        <div>
                            <div class="album">
                                <div @click="onArtistClick(artist)" class="artwork" :style="'background-image: url(' + artist.songs[0].artwork + ')'">
                                    <img v-if="!artist.playing" class="play-btn" :src="'wp-content/themes/sunsick-studio/images/play-btn-big.svg'" />
                                    <img v-if="artist.playing" class="play-btn" :src="'wp-content/themes/sunsick-studio/images/pause-btn-big.svg'" />
                                </div>
                                <p class="name">{{ artist.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="mobile" class="music-slider music-slider-mobile">
                    <div class="album" v-for="artist in musicData.artists">
                        <div @click="onArtistClick(artist)" class="artwork" :style="'background-image: url(' + artist.songs[0].artwork + ')'">
                            <img v-if="!artist.playing" class="play-btn" :src="'wp-content/themes/sunsick-studio/images/play-btn-small.svg'" />
                            <img v-if="artist.playing" class="play-btn" :src="'wp-content/themes/sunsick-studio/images/pause-btn-small.svg'" />
                        </div>
                        <p class="name">{{ artist.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider hide-on-medium-up"></div>
	</div>	
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name      : "our-work",
        mixins    : [],
        components: {},
        props     : [],
        watch     : {},
        computed  : mapGetters([
            "playerData",
            "musicData"
        ]),
        data() {
            return {
                desktop    : true,
                mobile     : false,
                iconSrcs   : [
                    "wp-content/themes/sunsick-studio/images/play-btn-big.svg",
                    "wp-content/themes/sunsick-studio/images/play-btn-big.svg",
                ],
                artists    : [
                    {
                        artist   : "",
                        imageSrc : "",
                        mp3Src   : ""
                    }
                ]
            };
        },
        created() {},
        mounted() {
            window.expandPlayer();

            console.log(this.musicData);

            $(".music-slider-mobile").slick({
                infinite      : false,
                nextArrow     : '<button type="button" class="slick-next"><img src="wp-content/themes/sunsick-studio/images/arrow-right.png" /></button>',
                prevArrow     : '<button type="button" class="slick-prev"><img src="wp-content/themes/sunsick-studio/images/arrow-left.png" /></button>',
            });

        	$(".music-slider-desktop").slick({
                infinite     : false,
                rows         : 2,
                slidesPerRow : 3,
                nextArrow    : '<button type="button" class="slick-next"><img src="wp-content/themes/sunsick-studio/images/arrow-right.png" /></button>',
                prevArrow    : '<button type="button" class="slick-prev"><img src="wp-content/themes/sunsick-studio/images/arrow-left.png" /></button>',
            });

            window.addEventListener("resize", this.config);
        },
        methods : {
            config() {
                if (window.innerWidth >= 768) {
                    this.initDesktop();
                } else {
                    this.initMobile();
                }
            },
            initDesktop() {
                this.mobile  = false;
                this.desktop = true;
            },
            initMobile() {
                this.mobile  = true;
                this.desktop = false;
            },
            onArtistClick(artist) {
                
            },
            isArtistPlaying(artist) {
                let isArtistPlaying = false;

                artist.songs.forEach(song => {
                    if (song.playing) {
                        isArtistPlaying = true;
                    }
                });

                return isArtistPlaying;
            }
        }
    };
</script>
