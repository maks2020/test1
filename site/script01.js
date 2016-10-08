/**
 * @author Spiridonov Maksim
 * add tag title on page and name on panel under header.
 */
var nameOfPage;

/*function namePage () {*/
		
	switch (document.getElementById('style_page').getAttribute('href'))
		{
			case 'home.css':
				nameOfPage = 'Home';
				break;
		 	
		 	case 'about_us.css':
				nameOfPage = 'About Us';
				var contentPanelUnderHeader = document.getElementById('main_text');
				contentPanelUnderHeader.innerHTML = 'We are a dynamic team with innovative ideas for you';
				break;
			
			case 'services.css':
				nameOfPage = 'Our Services';
				var contentPanelUnderHeader = document.getElementById('main_text');
				contentPanelUnderHeader.innerHTML = 'We are best in what we do. Check out our services.';
				break;
			
			case 'portfolio.css':
				nameOfPage = 'Portfolio';
				var contentPanelUnderHeader = document.getElementById('menu_header_2');
				contentPanelUnderHeader.innerHTML = '<ul><li>Web design</li><li>Blog Design</li><li>Logos</li><li>Print Works</li><li>Graphics</li></ul>';
				break;
				
			case 'contact.css':
				nameOfPage = 'Contact Us';
				var contentPanelUnderHeader = document.getElementById('main_text');
				contentPanelUnderHeader.innerHTML = 'Thank you for stopping by. How may we help you!';
				break;
				
			default:
				nameOfPage = "Free";
				break;
		}
/*}*/

//add title page
var titlePage = document.createElement("title");
titlePage.innerHTML = nameOfPage;
document.getElementsByTagName("head")[0].appendChild(titlePage);

//Add h2 in panel under "header". Add phrase and menu in panel for page

if(nameOfPage!=='Home') {
		var headPanelUnderHeader = document.getElementById('h2_panel_header');
		headPanelUnderHeader.setAttribute('style', 'width:200px');
		headPanelUnderHeader.innerHTML = nameOfPage;
}






