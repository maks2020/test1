<?php	
		switch ($_GET["menu_value"]) {
			case "":
				$panel = "panel_home.php";
				$content = "home_section.php";
				break;
				
			case "home":
				$panel = "panel_home.php";
				$content = "home_section.php";
				break;
			
			case "about":
			//	$panel = "panel_all.php";
				$content = "aboutus.php";
				break;
			
			case "services":
			//	$panel = "panel_all.php";
				$content = "";
				break;
			
			case "portfolio":
			//	$panel = "panel_all.php";
				$content = "portfolio_section.php";
				break;
				
			case "contact":
			//	$panel = "panel_all.php";
				$content = "";
				break;
				
			default:
		//		$panel = "panel_home.php";
				$content = "";
				break;
		}
		
	include_once $panel;
		include_once $content;
		
?>