
<!DOCTYPE html>

<html>
	
	<head>
		<meta charset="utf-8"/>
		<title>B - Home</title>
		<link href="main_style.css" rel="stylesheet" type="text/css">
		<link href="header.css" rel="stylesheet" type="text/css">
		
		<?php include_once "style.php";?>
		
		<link href="footer.css" rel="stylesheet" type="text/css">
		
	</head>
	
	<body>
		
		
<?php
		$page = $_GET['menu_value'];
		
		switch ($page) {
			case 'home':
				$panel = 'panel_home.php';
				$content = 'home_section.php';
				
				break;
			
			case 'portfolio':
				$panel = "panel_all.php";
				$content = "portfolio_section.php";
				$button_menu = "\"button_nav_header_active\"";
				break;
				
			default:
				$panel = 'panel_home.php';
				$content = 'home_section.php';
				break;
		}
		include_once 'header.php';
		include_once $panel;
		include_once $content;
		include_once 'footer.php';
?>
		
	</body>
	
</html>

