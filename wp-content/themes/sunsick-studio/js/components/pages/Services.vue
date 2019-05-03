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
                    <div class="divider alt hide-on-small-only"></div>
				</div>
			</div>
            <div class="content">
                <div class="row" v-for="service in servicesData">
                    <div class="col-1">
                        <div class="dot"></div>
                    </div>
                    <div class="col-11">
                        <h4 class="color-white">{{ service.service }}</h4>
                        <p class="color-white">{{ service.description }}</p>
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
        name      : "services",
        mixins    : [],
        components: {},
        props     : [],
        watch     : {},
        computed  : {
            ...mapGetters([
                "servicesData"
            ])
        },
        data() {
            return {
            };
        },
        created() {},
        mounted() {
            console.log(this.servicesData);
        },
        methods : {

        }
    };
</script>
