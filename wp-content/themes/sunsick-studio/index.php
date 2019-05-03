<?php get_header(); ?>

	<div class="container">
		<div class="row">
			<div class="col-md-7 padding-0">
				<div id="router-view">
					<transition name="side-slide" mode="out-in">
						<router-view>
						</router-view>
					</transition>
				</div>
			</div>
			<div class="col-md-5">
				<player></player>
				<div class="hide-on-small-only home-paragraph-desktop">
					<div class="divider"></div>
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

<?php get_footer(); ?>
