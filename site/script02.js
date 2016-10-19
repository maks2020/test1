$(function(){
		$.get("index123.php?menu_value=home", function(data){
				$("section").html(data);
				}, "html");
		$(".manage_click").click(function() {
		//var nameButton = $(this).text();
		
		var nameButton = $(this).attr('class');
		var indexClass = 0;
		var reqNamePage = '';
		do {
			reqNamePage += nameButton[indexClass];
			indexClass++;
		}while (nameButton[indexClass]!=' ');
		//	var nameVal = "index123.php?menu_value=" + nameButton;
		//	var contentPanel = "panel_all.php?menu_value=" + nameButton;
		//var nameVal = "index123.php?menu_value=" + reqNamePage;
		var reqContent = "index123.php?menu_value=" + reqNamePage;
		//var contentPanel = "panel_all.php?menu_value=" + reqNamePage;
		var regContentPanelNoHome  = "panel_all.php?menu_value=" + reqNamePage;;
		
		var styleContent;
		var stylePanel;
		var nameOfPagePanelUnderHeaderPanelUnderHeader;
		var contentPanelUnderHeader;
		
	//console.log("Name button: " + reqNamePage);
		
		//var reqContent = nameVal.toLowerCase();
		
		//var regContentPanelNoHome= contentPanel.toLowerCase;
		
	//	console.log("проба " + reqContent + reqNamePage);
		
		switch (reqNamePage) {
			
				case 'home':
				styleContent = "home.css";
				nameOfPagePanelUnderHeader = "Home";
				break;
				
			case 'about':
				styleContent = "about_us.css";
				stylePanel = "panel_all.css";
				nameOfPagePanelUnderHeader = "About Us";
				contentPanelUnderHeader = "<p>We are a dynamic team with innovative ideas for you</p>";
				break;
				
			case 'services':
				styleContent = "services.css";
				stylePanel = "panel_all.css";
				nameOfPagePanelUnderHeader = "Our Services";
				contentPanelUnderHeader =  "<p>We are best in what we do. Check out our services</p>";
				break;
			
			case 'portfolio':
				styleContent = "portfolio.css";
				stylePanel = "panel_all.css";
				nameOfPagePanelUnderHeader = "Portfolio";
				contentPanelUnderHeader = "<ul><li>Web design</li><li>Blog Design</li><li>Logos</li><li>Print Works</li><li>Graphics</li></ul>";
				break;
				
			case 'contact':
				styleContent = "contact.css"; 
				stylePanel = "panel_all.css";
				nameOfPagePanelUnderHeader = "Contact Us";
				contentPanelUnderHeader = "<p><span>Thank you for stopping by. How may we help you!</span></p>";
						  
				break;
			
			default:
				styleContent = "";
			nameOfPagePanelUnderHeader = "Free";
				break;
		}
		
			$('#stContent').attr('href', styleContent);
			$('#stPanel').attr('href', stylePanel);
		
					console.log("Имя Страницы: " + nameOfPagePanelUnderHeader);

//add highlight button menu header to click

		/*$('#nav button').each(function() {
			if (nameButton === $(this).text()) {
				
				$(this).removeClass("button_nav_header_hidden button_nav_header_active").addClass("button_nav_header_active");
				
			} else {
				
				$(this).removeClass("button_nav_header_hidden button_nav_header_active").addClass("button_nav_header_hidden");
				
			}
			
		});  //end nav button */


 

		//add title page
		$('title').html(nameOfPagePanelUnderHeader);
		
		//Add h2 in panel under "header". Add phrase and menu in panel for page
		
		console.log("Заголовок панели : " +nameOfPagePanelUnderHeader +"  " +contentPanelUnderHeader);
		
		if(nameOfPagePanelUnderHeader === 'Portfolio') {
			
			$('#panelUnderHeaderNoHome').remove();
			$('header').after('<div id="panelUnderHeaderNoHome"></div> <!--end panelUnderHeaderNoHome-->');			
			$('#main_text').remove();
			$('#panelUnderHeaderNoHome').html('<p><span id="h2_panel_header"></span></p><div id="menu_header_2"></div> <!--end menu_header_2-->');
			$('#h2_panel_header').html(nameOfPagePanelUnderHeader);
			$('#menu_header_2').html(contentPanelUnderHeader);
				
				
		} else if (nameOfPagePanelUnderHeader === 'Home') {
			
			$('#panelUnderHeaderNoHome').remove();
			
		} else {
			
			$('#panelUnderHeaderNoHome').remove();
			$('header').after('<div id="panelUnderHeaderNoHome"></div> <!--end panelUnderHeaderNoHome-->');
			
			$('#menu_header_2').remove();
			$('#panelUnderHeaderNoHome').html('<p><span id="h2_panel_header"></span></p><p><span id="main_text"></span></p>');
			$('#h2_panel_header').html(nameOfPagePanelUnderHeader);
			$('#main_text').html(contentPanelUnderHeader);
			
		}
		
		$.get(reqContent, function(data){
				$("section").html(data);
				}, "html");
				
		//add highlight button menu header to style in head example: "home.css"
		
		var stylePageHref = $('#stContent').attr('href');
		
		$('#nav button').each(function() {
			
			var nameButtonMenuHeader = $(this).text();
			
			if (stylePageHref.substr(0,4) === nameButtonMenuHeader.substr(0,4).toLowerCase()) {
				
				$(this).removeClass("button_nav_header_hidden button_nav_header_active").addClass("button_nav_header_active");
				
			} else {
				
				$(this).removeClass("button_nav_header_hidden button_nav_header_active").addClass("button_nav_header_hidden");
				
			}
			
		});  //end nav button 
		
		});
		
});