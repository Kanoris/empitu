function openNav() {

	if (matchMedia('only screen and (min-width: 360px) and (orientation:landscape)').matches) {
	  document.getElementById("mySidenav").style.width = "25%";
	}
	else{	
    	document.getElementById("mySidenav").style.width = "40%";
    }

	document.getElementById("sideMen").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sideMen").style.display = "block";
}