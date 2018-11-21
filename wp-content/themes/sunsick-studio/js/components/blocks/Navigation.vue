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
                        <button @click="openMenu">
                            <img v-bind:src="'/wp-content/themes/sunsick-studio/images/burger.png'" />
                        </button>
                        <div :class="{ active : mobileMenu }" class="menu">

                        </div>
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
            openMenu: function() {
                this.mobileMenu = true;
            }
        }
    };
</script>
