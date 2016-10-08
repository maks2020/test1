
<!DOCTYPE html>

<html>
	
	<head>
		<meta charset="utf-8"/>
		<link href="main_style.css" rel="stylesheet" type="text/css">
		<link href="header.css" rel="stylesheet" type="text/css">
		<?php include_once "style.php";?> 									<!--add css for pages-->
		<link href="footer.css" rel="stylesheet" type="text/css">
	</head>
	
	<body>		

<div id="background_image_fix">
	<img src="images/bg_body.png">
</div><!--end background_image_fix-->

<!--pages constraction-->
<?php	
		switch ($_GET["menu_value"]) 
		{
			case "":
				$panel = "panel_home.php";
				$content = "home_section.php";
				break;
				
			case "home":
				$panel = "panel_home.php";
				$content = "home_section.php";
				break;
			
			case "about":
				$panel = "panel_all.php";
				$content = "aboutus.php";
				break;
			
			case "services":
				$panel = "panel_all.php";
				$content = "";
				break;
			
			case "portfolio":
				$panel = "panel_all.php";
				$content = "portfolio_section.php";
				break;
				
			case "contact":
				$panel = "panel_all.php";
				$content = "";
				break;
				
			default:
				$panel = "panel_home.php";
				$content = "";
				break;
		}
		include_once "header.php";
		include_once $panel;
		include_once $content;
		include_once "footer.php";
?>
		<script src="script01.js"></script>
	</body>
	
</html>

