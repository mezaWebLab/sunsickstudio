<!--
||----------------------------------||
||                                  ||
||    Sunsick Studio                ||
||    Home Page Component           ||
||    Alex Meza (Meza Web Lab)      ||
||    2018                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="home">
		<div class="container">
			<div class="row">
				<div class="col-md-12 position-relative">
					<div class="gradient-block">
						<!-- <div class="gradient-content hide-on-small-only">
							<img :src="'wp-content/themes/sunsick-studio/images/fb.svg'" />
							<img :src="'wp-content/themes/sunsick-studio/images/ig.svg'" />
							<div class="credits">
								Website by <a href="http://mezaweblab.com">mezaWebLab</a>
							</div>
						</div> -->
					</div>
					<div class="title-home-container">
						<div class="title-home">
							<h1 v-html="homeData.header"></h1>
						</div>
					</div>
				</div>
			</div>
			<div class="hide-on-medium-up">
				<div class="divider"></div>
				<div class="row">
					<div class="col-md-12">
						<p v-html="homeData.body" class="white"></p>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
	import { mapGetters } from "vuex";

    export default {
        name      : "home",
        mixins    : [],
        components: {},
        props     : ["home-title"],
        watch     : {},
        computed  : mapGetters([
			"homeData"
		]),
        data() {
            return {
            };
        },
		created() {},
        mounted() {
        	window.showHomeParagraph();
        },
        methods : {

        }
    };
</script>
