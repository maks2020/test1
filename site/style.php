<?php 
		$page_value = $_GET['menu_value'];
		$link_1 = "<link href=\"";
		$link_2 = ".css\" rel=\"stylesheet\" type=\"text/css\">";
		
			switch ($page_value) {
			case 'home':
				$style = "home";
				break;
			
			case 'portfolio':
				$style = "portfolio";
				break;
			
			default:
				$style = "home";
				break;
		}
		echo  $link_1 . $style . $link_2;
?>