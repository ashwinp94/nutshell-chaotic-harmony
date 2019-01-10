const NavBar = {
	navBuilder() {
		const navBarLocation = document.querySelector("#navOutput");
		const navBar = document.createElement("article")
		navBar.innerHTML = `
		<nav>
			<ul>
				<li class="liOne"><a href="#">Home</a></li>
				<li class="liTwo"><a href="#">To-Do</a></li>
				<li class="liThree"><a href="#" class="color3">Events</a></li>
				<li class="liFour"><a href="#">News</a></li>
				<li class="liFive"><a href="#">Logout</a></li>
			</ul>
		</nav>`;
		console.log(navBar.innerHTML)
		navBarLocation.appendChild(navBar)
		}
	}

export default NavBar