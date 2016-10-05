	<header>
			
			<div id="logo_nav">
				<div id="logo_phone">
					<img src="images/logo_menu_phone.png" alt="logotype company">	
				</div> <!--end logo_phone-->
				<div id="logo">
					<img src="images/logo.png">	
				</div> <!--end logo-->
				<div id="nav">
					<ul>
						<li><a href="index.php?menu_value=home">
							<?php 
							include_once "button_active.php";
							echo $button_state['home'];
							?>
							HOME</button></a></li>
						<li><a href="index.php?menu_value=about">
							<?php 
							include_once "button_active.php";
							echo $button_state['about'];
							?>
							ABOUT</button></a></li>
						<li><a href="index.php?menu_value=services">
							<?php 
							include_once "button_active.php";
							echo $button_state['services'];
							?>
							SERVICES</button></a></li>
						<li><a href="index.php?menu_value=portfolio">
							<?php 
							include_once "button_active.php";
							echo $button_state['portfolio'];																		
							?>
							PORTFOLIO</button></a></li>
						<li><a href="index.php?menu_value=contact">
							<?php 
							include_once "button_active.php";
							echo $button_state['contact'];																		
							?>
							CONTACT</button></a></li>
					</ul>
				</div> <!--end nav-->
			
			</div> <!--end logo_nav-->
		</header>