<?php get_header(); ?>

	<?php

	$homeTitle = "Professional<br /> 	recording<br /> studio based<br /> off San Diego<span>.</span>";

	?>

	<div class="container">
		<div class="row">
			<div class="col-md-7 padding-0">
				<div id="router-view">
					<transition name="side-slide" mode="out-in">
						<router-view 
						home-title="<?php echo $homeTitle ?>" >		
						</router-view>
					</transition>
				</div>
			</div>
			<div class="col-md-5">
				
			</div>
		</div>
	</div>

<?php get_footer(); ?>
