/**
 * @author Spiridonov Maksim
 * add tag title on page and name on panel under header.
 */
var titlePage = document.createElement("title");
titlePage.innerHTML = namePage();
document.getElementsByTagName("head")[0].appendChild(titlePage);

if(namePage ()!=='Home') {
		var headPanelUnderHeader = document.getElementById('h2_panel_header');
		headPanelUnderHeader.innerHTML = namePage ();
}

function namePage () {
		
	switch (document.getElementById('style_page').getAttribute('href'))
		{
			case 'home.css':
				var namePage = 'Home';
				break;
		 	
		 	case 'about_us.css':
				var namePage = 'About Us';
				break;
			
			case 'portfolio.css':
				var namePage = 'Portfolio';
				break;
				
			default:
				var namePage = "Free";
				break;
		} 	
	
	return namePage;
	  
}





/*var new2 = new1.

console.log(new1);

new1.innerHTML = "New Title"; 

/*console.log(document.getElementsByTagName("title"));
new_string[0].innerHTML = "B - New text";*/

/*var names_new = document.createElement("title");*/
