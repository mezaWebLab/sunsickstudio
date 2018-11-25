<!--
||----------------------------------||
||                                  ||
||    Sunsick Studio                ||
||    Services Page Component       ||
||    Alex Meza (Meza Web Lab)      ||
||    2018                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="services">
		<div class="container">
			<div class="row">
				<div class="col-md">
					<div class="page-title">
						<h1>Services<span class="color-primary">.</span></h1>
					</div>
				</div>
			</div>
            <div class="content">
                <div class="row">
                    <div class="col-2">
                        <div class="dot"></div>
                    </div>
                    <div class="col-10">
                        <h4 class="color-white">Recording</h4>
                        <p class="color-white">We can record vocals to full bands and           everything in between. We have a list of            equipment available for use on the site.</p>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-2">
                        <div class="dot"></div>
                    </div>
                    <div class="col-10">
                        <h4 class="color-white">Mixing</h4>
                        <p class="color-white">Whether tracked here at Sunsick Studio, another studio, or out of your house/bedroom, we can take your files from raw to an awesome mix.</p>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-2">
                        <div class="dot"></div>
                    </div>
                    <div class="col-10">
                        <h4 class="color-white">Reamping</h4>
                        <p class="color-white">We can take DIs you've recorded and reamp        them through any of the excellent amps, cabs, and pedals we have at Sunsick Studio.</p>
                    </div> 
                </div>
            </div>
		</div>
	</div>	
</template>

<script>
    export default {
        name      : "services",
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

        },
        methods : {

        }
    };
</script>
