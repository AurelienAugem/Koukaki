<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}
//Import JQuery
function import_jquery() {
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'import_jquery');
//Charger swiper
function import_swiper(){
    wp_enqueue_script('swiper',
    get_stylesheet_directory_uri() . '/js/swiper/swiper-bundle.js',
    array(),
    '9.4.1',
    true);
}
add_action('wp_enqueue_scripts', 'import_swiper');

function swiper_style(){
    wp_enqueue_style( 'swiper-style',
    get_stylesheet_directory_uri() . '/js/swiper/swiper-bundle.css' );
}
add_action('wp_enqueue_scripts', 'swiper_style');
//Import du script Javascript du thème enfant
function import_script() {
    wp_enqueue_script('script-child-theme', 
    get_stylesheet_directory_uri() . '/js/script.js', 
    array('jquery'),
    '1.0',
    true);
}
add_action('wp_enqueue_scripts', 'import_script');
