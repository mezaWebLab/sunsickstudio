<!--
||----------------------------------||
||                                  ||
||    Sunsick Studio                ||
||    Contact Page Component        ||
||    Alex Meza (Meza Web Lab)      ||
||    2018                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="contact">
		<div class="container">
            <div class="row">
                <div class="col-md">
                    <div class="page-title">
                        <h1>Contact<span class="color-primary">.</span></h1>
                    </div>
                    <div class="divider alt hide-on-small-only"></div>
                    <div class="page-subtitle color-white">
                        Let’s make something rad. <br />Request a quote below.
                    </div>
                </div>
            </div>
            <div class="row margin-top">
                <div class="col-md">
                    <input type="text" placeholder="Artist Name" />
                </div>
                <div class="col-md">
                    <input type="text" placeholder="Email" />
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <input type="text" placeholder="Your Name" />
                </div>
                <div class="col-md">
                    <input type="text" placeholder="Artist Website" />
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <textarea placeholder="Message">
                    </textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <button class="button-main">
                        Send
                    </button>
                </div>
            </div>
        </div>
        <div class="divider hide-on-medium-up"></div>
	</div>	
</template>

<script>
    export default {
        name      : "contact",
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
