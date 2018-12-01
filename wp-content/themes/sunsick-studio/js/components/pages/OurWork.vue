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
                </div>
            </div>
            <div class="content">
                <div class="music-slider">
                    <div class="album">
                        <div class="artwork">
                            <img class="play-btn" :src="'wp-content/themes/sunsick-studio/images/play-btn-big.svg'" />
                        </div>
                        <p class="name">Battery Point</p>
                    </div>
                    <div class="album">
                        <div class="artwork">
                            <img class="play-btn" :src="'wp-content/themes/sunsick-studio/images/play-btn-big.svg'" />
                        </div>
                        <p class="name">Battery Point</p>
                    </div>
                    <div class="album">
                        <div class="artwork">
                            <img class="play-btn" :src="'wp-content/themes/sunsick-studio/images/play-btn-big.svg'" />
                        </div>
                        <p class="name">Battery Point</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider"></div>
	</div>	
</template>

<script>
    export default {
        name      : "our-work",
        mixins    : [],
        components: {},
        props     : [],
        watch     : {},
        computed  : {},
        data() {
            return {
            };
        },
        created() {},
        mounted() {
        	$(".music-slider").slick({
                infinite      : false,
                mobileFirst   : true,
                slidesToShow  : 1,
                nextArrow     : '<button type="button" class="slick-next"><img src="wp-content/themes/sunsick-studio/images/arrow-right.png" /></button>',
                prevArrow     : '<button type="button" class="slick-prev"><img src="wp-content/themes/sunsick-studio/images/arrow-left.png" /></button>'
            });
        },
        methods : {

        }
    };
</script>
