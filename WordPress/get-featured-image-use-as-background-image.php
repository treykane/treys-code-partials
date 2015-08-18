<?php// This is an example of how to pull out the featured image from a post or page and re-use it as a background image on an element. ?>

<?php while ( have_posts() ) : the_post(); ?>
<?php //GET FEATURED IMAGE TO ECHO URL FOR BACKGROUND
  $feat_id = get_post_thumbnail_id();
  $feat_url_array = wp_get_attachment_image_src($feat_id, 'thumbnail-size', true);
  $feat_url = $feat_url_array[0];
  ?>

<?php //EXAMPLE USAGE ?>  
<header class="entry-header col-1" style="background: url('<?php echo $feat_url ?>') center center; background-size: cover;">
  <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
</header><!-- .entry-header -->