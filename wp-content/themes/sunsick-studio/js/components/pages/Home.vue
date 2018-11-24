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
				<div class="col-md position-relative">
					<div class="gradient-block">
					</div>
					<div class="title-home-container">
						<div class="title-home">
							<h1 v-html="homeTitle">
							</h1>
						</div>
					</div>
					<div class="divider"></div>
				</div>
				<div class="col-md">
					<p class="white">
						At <strong>Sunsick Studio</strong>, our goal is to be a home for bands, artists, and creatives to express their vision on their own terms. 
						Along with the space, instruments, and recording equipment, we use our 15 years of experience to help you make the recording you want. 
						<br /><br />
						In that, we're happy to answer any questions about the studio or recording process, whether you're working with us or not.
					</p>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
    export default {
        name      : "home",
        mixins    : [],
        components: {},
        props     : ["home-title"],
        watch     : {},
        computed  : {},
        data() {
            return {
            };
        },
        created() {},
        mounted() {
        },
        methods : {

        }
    };
</script>
