<?php
namespace App\Github;

/*
Plugin Name: Wordpress admin menu toggle
Plugin URI: https://www.github.com
Description: To toggle admin menu which has submenu
Version: 1.0
Author: Github
Author URI: https://www.github.com
*/

class wordpress_admin_menu_toggle {
  public $version = '1.0';
  public function __construct()
  {
    add_action( 'admin_enqueue_scripts', array( $this, 'register_scripts' ), 20 );
  }
  public function register_scripts()
  {
    wp_enqueue_script( 'wordpress-admin-menu-toggle', plugins_url( 'scripts.js', __FILE__ ), ['jquery']);

  }
}

new wordpress_admin_menu_toggle;
