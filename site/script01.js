/**
 * @author S
 */
var new1 = document.createElement("title");
new1.innerHTML = namePage();
document.getElementsByTagName("head")[0].appendChild(new1);



function namePage () {
	
	/*var captureStringTagLinkPage = document.getElementById('style_page'); */
	
	
	switch (document.getElementById('style_page').getAttribute('href'))
		{
			case 'home.css':
				var name = 'Home';
				break;
		 	
		 	case 'about_us.css':
				var name = 'About Us';
				break;
			
			case 'portfolio.css':
				var name = 'Portfolio';
				break;
				
			default:
				var name = "Free";
				break;
		} 	
	
	return name;
	  
}





/*var new2 = new1.

console.log(new1);

new1.innerHTML = "New Title"; 

/*console.log(document.getElementsByTagName("title"));
new_string[0].innerHTML = "B - New text";*/

/*var names_new = document.createElement("title");*/
