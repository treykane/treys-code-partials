<?php // This uses the default WordPress pagination: https://codex.wordpress.org/Pagination ?>

<?php the_posts_pagination( array(
    'mid_size'  => 2,
    'prev_text' => __( 'Previous', 'textdomain' ),
    'next_text' => __( 'Next', 'textdomain' ),
) ); ?>