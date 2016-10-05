<?php 
		$page_value = $_GET['menu_value'];
		
		$button_state = array('home' => "<button class=\"button_nav_header_hidden width_66\">", 'about' => "<button class=\"button_nav_header_hidden width_66\">", 'services' => "<button class=\"button_nav_header_hidden width_100\">", 
		'portfolio' => "<button class=\"button_nav_header_hidden width_100\">", 'contact' => "<button class=\"button_nav_header_hidden width_100\">");
		
			switch ($page_value) {
			case 'home':
				$button_state['home'] = "<button class=\"button_nav_header_active width_66\">";
				break;
			
			case 'portfolio':
				$button_state['portfolio'] = "<button class=\"button_nav_header_active width_100\">";
				break;
			
			default:
				$button_state = array('home' => "<button class=\"button_nav_header_hidden width_66\">", 'about' => "<button class=\"button_nav_header_hidden width_66\">", 'services' => "<button class=\"button_nav_header_hidden width_100\">", 
		'portfolio' => "<button class=\"button_nav_header_hidden width_100\">", 'contact' => "<button class=\"button_nav_header_hidden width_100\">");
				break;
		}
?>