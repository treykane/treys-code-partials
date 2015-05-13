<?php
//THIS WIDGET IS USED FOR DISPLAYING THE CHILDREN OF THE PAGE THE USER IS CURRENTLY ON, CAN BE CUSTOMIZED WITH CONDITIONAL STATEMENTS TO SHOW SPECIFIC SIDEBARD CONTENT ON SPECIFIC PAGES OR WITH SPECIFIC POST TYPES

/**
 * A SubPages widget
 */
class ThemeWidgetSubPages extends Carbon_Widget {
	/**
	 * Register widget function. Must have the same name as the class
	 */
	function ThemeWidgetSubPages() {
		$this->setup('Theme Widget - Sub Pages', 'Displays subpages', array(
			Carbon_Field::factory('select', 'news_page')
				->add_options( ecnc_get_cpt_ids( 'page' ) )
		), 'widget_subpages' );
	}

	/**
	 * Called when rendering the widget in the front-end
	 */
	function front_end($args, $instance) {
		extract($args);
		extract($instance);

		global $post;

		if ( $post->post_parent ) {
			$id = $post->post_parent;
		} else {
			$id = $post->ID;
		}

		if ( is_front_page() || is_home() || is_archive() || is_single() || is_404() || is_page_template( 'some/template' ) ) {
			$id = 1;
		}

        $children = wp_list_pages('title_li=&child_of='. $id .'&echo=0');

        $page_parent_id =  'some-id';//Give it the Page ID for the post type
		if ( is_singular( 'single-post-type'/*Change Post type*/ ) || ( $post->ID == $page_parent_id ) || ( $post->post_parent == $page_parent_id ) ) {
            $children = wp_list_post_types( 'title_li=&post_type=single-post-type&echo=0');//change post type
		}

        // echo '<pre>';
        // var_dump($children);
        // die();

		if ( !$children )
			return;
		?>

		<ul>
			<?php echo $children; ?>
		</ul>
        <!-- ANYTHING HERE WILL APPEAR AT THE BOTTOM OF ALL SIDEBARS WITH THIS WIDGET -->
		<?php

	}
}

?>