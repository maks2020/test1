<?php

$h2_panel_header = '<p><span id="h2_panel_header"></span></p>';
$menu_header_2 = '<div id="menu_header_2"></div> <!--end menu_header_2-->';
$main_text = '<p><span id="main_text"></span></p>';

switch ($_GET['menu_value']) {
	
	case 'home':
		break;
		
	case 'portfolio':
		$h2_panel_header = '<p><span id="h2_panel_header"></span></p>';
		$menu_header_2 = '<div id="menu_header_2"></div> <!--end menu_header_2-->';
		break;
		
	default:
		$h2_panel_header = '<p><span id="h2_panel_header"></span></p>';
		$main_text = '<p><span id="main_text"></span></p>';
		break;
}

?>