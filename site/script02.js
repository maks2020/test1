		$(".manage_button").click(function() {
		var nameButton = $(this).text();
		var nameVal = "index123.php?menu_value=" + nameButton;
		var contentPanel = "panel_all.php?menu_value=" + nameButton;
		var styleContent;
		var stylePanel;
		var nameOfPagePanelUnderHeaderPanelUnderHeader;
		var contentPanelUnderHeader;

		
		console.log(nameButton);
		//console.log();
		
		var reqContent = nameVal.toLowerCase();
		
		var regContentPanelNoHome= contentPanel.toLowerCase;
		
		/*$.get(reqContent, function(data){
				$("section").html(data);
				}, "html");*/
		
		console.log("проба " + reqContent);
		
		switch (nameButton) {
			
				case 'HOME':
				styleContent = "home.css";
				nameOfPagePanelUnderHeader = "Home";
				break;
				
			case 'ABOUT':
				styleContent = "about_us.css";
				stylePanel = "panel_all.css";
				nameOfPagePanelUnderHeader = "About Us";
				contentPanelUnderHeader = "<p>We are a dynamic team with innovative ideas for you</p>";
				break;
				
			case 'SERVICES':
				styleContent = "services.css";
				stylePanel = "panel_all.css";
				nameOfPagePanelUnderHeader = "Our Services";
				contentPanelUnderHeader =  "<p>We are best in what we do. Check out our services</p>";
				break;
			
			case 'PORTFOLIO':
				styleContent = "portfolio.css";
				stylePanel = "panel_all.css";
				nameOfPagePanelUnderHeader = "Portfolio";
				contentPanelUnderHeader = "<ul><li>Web design</li><li>Blog Design</li><li>Logos</li><li>Print Works</li><li>Graphics</li></ul>";
				break;
				
			case 'CONTACT':
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

		//add title page
		$('title').html(nameOfPagePanelUnderHeader);
		
		//Add h2 in panel under "header". Add phrase and menu in panel for page
		console.log("Заголовок панели : " +nameOfPagePanelUnderHeader +"  " +contentPanelUnderHeader);
		if(nameOfPagePanelUnderHeader === 'Portfolio') {
			
			$('#panelUnderHeaderNoHome').remove();
			$('header').after('<div id="panelUnderHeaderNoHome"></div> <!--end panelUnderHeaderNoHome-->');
								
			$('#main_text').remove();
			$('#panelUnderHeaderNoHome').html('<p><span id="h2_panel_header"></span></p><div id="menu_header_2"></div> <!--end menu_header_2-->');
			$.get(reqContent, function(data){
				$("section").html(data);
				}, "html");
			$('#h2_panel_header').html(nameOfPagePanelUnderHeader);
			$('#menu_header_2').html(contentPanelUnderHeader);
				
				
		} else if (nameOfPagePanelUnderHeader === 'Home') {
			
			$('#panelUnderHeaderNoHome').remove();
			$.get(reqContent, function(data){
				$("section").html(data);
				}, "html");
			
		} else if (nameOfPagePanelUnderHeader!=='Home' && nameOfPagePanelUnderHeader!=='Portfolio') {
			
			$('#panelUnderHeaderNoHome').remove();
			$('header').after('<div id="panelUnderHeaderNoHome"></div> <!--end panelUnderHeaderNoHome-->');
			
			$('#menu_header_2').remove();
			$('#panelUnderHeaderNoHome').html('<p><span id="h2_panel_header"></span></p><p><span id="main_text"></span></p>');
			$.get(reqContent, function(data){
				$("section").html(data);
				}, "html");
			$('#h2_panel_header').html(nameOfPagePanelUnderHeader);
			$('#main_text').html(contentPanelUnderHeader);
			
		}
			
		});