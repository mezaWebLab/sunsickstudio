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
    <div id="navigation" class="wordpress-top">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img class="logo" v-bind:src="'/wp-content/themes/sunsick-studio/images/logo-temp.png'" />
                </div>
                <div class="col-6">
                    <div class="mobile">
                        <button class="button-main">
                            Get A Quote
                        </button>
                        <button class="burger" @click="openMobileMenu">
                            <img v-bind:src="'/wp-content/themes/sunsick-studio/images/burger.png'" />
                        </button>
                        <transition name="fade">
                            <div v-if="mobileMenu" class="menu">
                                <button @click="closeMobileMenu">
                                    <img :src="'/wp-content/themes/sunsick-studio/images/x.png'" />
                                </button>
                                <div class="links">
                                    <router-link active-class="active" to="/services">
                                        Services
                                    </router-link>
                                    <router-link active-class="active" to="/our-work">
                                        Our Work
                                    </router-link>
                                    <router-link active-class="active" to="/gear">
                                        Gear
                                    </router-link>
                                    <router-link active-class="active" to="/Contact">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name      : "name",
        mixins    : [],
        components: {},
        props     : {},
        watch     : {},
        computed  : {},
        data() {
            return {
                mobileMenu : false
            };
        },
        created() {},
        mounted() {},
        methods : {
            openMobileMenu: function() {
                this.mobileMenu = true;
                window.scrollLock();
            },
            closeMobileMenu: function() {
                this.mobileMenu = false;
                window.scrollUnlock();
            }
        }
    };
</script>
