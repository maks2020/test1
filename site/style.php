<?php 
			switch ($_GET['menu_value']) 
			{
			
			case '':
				$style = "<link href=\"home.css\" rel=\"stylesheet\" type=\"text/css\">";
				break;
			
			case 'home':
				$style = "<link href=\"home.css\" rel=\"stylesheet\" type=\"text/css\">";
				break;
				
			case 'about':
				$style = 	"<link href=\"content.css\" rel=\"stylesheet\" type=\"text/css\">
							<link href=\"sidebar.css\" rel=\"stylesheet\" type=\"text/css\">
							<link href=\"about_us.css\" rel=\"stylesheet\" type=\"text/css\">";
				break;
			
			case 'portfolio':
				$style = "<link href=\"portfolio.css\" rel=\"stylesheet\" type=\"text/css\">";
				break;
			
			default:
				$style = "";
				break;
			}
		echo  $style;
?>