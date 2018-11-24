<?php get_header(); ?>

	<?php

	$homeTitle = "Professional<br /> 	recording<br /> studio based<br /> off San Diego<span>.</span>";

	?>

		<div id="router-view">
			<transition name="side-slide" mode="out-in">
				<router-view 
				home-title="<?php echo $homeTitle ?>" >		
				</router-view>
			</transition>
		</div>

<?php get_footer(); ?>
