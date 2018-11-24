<!--
||----------------------------------||
||                                  ||
||    Sunsick Studio                ||
||    Navigation Component          ||
||    Alex Meza (Meza Web Lab)      ||
||    2018                          ||
||                                  ||
||----------------------------------||
-->

<template>
    <div id="navigation">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img class="logo" v-bind:src="'/wp-content/themes/sunsick-studio/images/logo-temp.png'" />
                </div>
                <div class="col-8">
                    <div v-if="mobile" class="mobile">
                        <router-link class="button-main" tag="button" active-class="active" to="/contact" exact>
                            Get A Quote
                        </router-link>
                        <button class="burger" @click="openMobileMenu">
                            <img v-bind:src="'/wp-content/themes/sunsick-studio/images/burger.png'" />
                        </button>
                        <transition name="fade">
                            <div v-if="mobileMenu" class="menu">
                                <button @click="closeMobileMenu">
                                    <img :src="'/wp-content/themes/sunsick-studio/images/x.svg'" />
                                </button>
                                <div class="links" @click="closeMobileMenu">
                                    <router-link active-class="active" to="/" exact>
                                        Home
                                    </router-link>
                                    <router-link active-class="active" to="/services" exact>
                                        Services
                                    </router-link>
                                    <router-link active-class="active" to="/our-work" exact>
                                        Our Work
                                    </router-link>
                                    <router-link active-class="active" to="/gear" exact>
                                        Gear
                                    </router-link>
                                    <router-link active-class="active" to="/contact" exact>
                                        Contact
                                    </router-link>
                                </div>
                                <img class="logo" :src="'/wp-content/themes/sunsick-studio/images/logo-temp.png'" />
                                <div class="credits">
                                   &copy; 2018 Sunsick Studio.<br />Site by <a href="#">Meza Web Lab</a>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div v-if="desktop" class="desktop">
                        <div class="menu">
                            <router-link active-class="active" to="/" exact>
                                Home
                            </router-link>
                            <router-link active-class="active" to="/services" exact>
                                Services
                            </router-link>
                            <router-link active-class="active" to="/our-work" exact>
                                Our Work
                            </router-link>
                            <router-link active-class="active" to="/gear" exact>
                                Gear
                            </router-link>
                            <router-link active-class="active" to="/contact" exact>
                                Contact
                            </router-link>
                            <router-link class="button-main" tag="button" active-class="active" to="/contact" exact>
                                Get A Quote
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name      : "navigation",
        mixins    : [],
        components: {},
        props     : {},
        watch     : {},
        computed  : {},
        data() {
            return {
                mobile     : false,
                desktop    : false,
                mobileMenu : false
            };
        },
        created() {},
        mounted() {
            this.config();

            window.addEventListener("resize", this.config);
        },
        methods : {
            config: function() {
                if (window.innerWidth <= 768) {
                    this.desktop = false;
                    this.mobile  = true;
                } else {
                    this.mobile  = false;
                    this.desktop = true;
                }
            },
            openMobileMenu: function() {
                this.mobileMenu = true;
                window.scrollLock();
            },
            closeMobileMenu: function() {
                console.log("ha!");
                this.mobileMenu = false;
                window.scrollUnlock();
            }
        }
    };
</script>
