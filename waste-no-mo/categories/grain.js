/*BREAD*/

function breadFunction() {
	console.log("myFunction()");
    alert("You've added bread!");
    var today = new Date(); //today's date
    var date = getFutureTime(2630000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Bread has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
}

function getFutureTime(minutes) {
	console.log("getFutureTime()");
	//gives date however many days from current date
	var today = new Date();
    today.setTime(today.getTime() + (minutes*60*1000));
    return today;
}

function setCookie(cname, cvalue, exdays) {
	console.log("setCookie()");
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    console.log(document.cookie);
}

function getCookie(cname) {
	console.log("getCookie()");
	console.log(cname);
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function deleteCookies(cname) {
	setCookie(cname, "", -1);
}

function loadBreadCookies() {
	console.log("loadCookies()");

	var time = getCookie("groceries");

	if (time != "") {
		var date = new Date(time);
		var today = new Date();
		var timeDifference = date.getTime() - today.getTime();

		if (timeDifference > 0) {
		alert('Welcome back. Bread is still ok.');
		window.setTimeout(function() {alert('Watch out -- Bread just expired'), 
			deleteCookies("groceries");}, timeDifference);
		}

		else {
		alert('Bread expired while you were gone. Oh no! :(');
		deleteCookies("groceries");
		}

	} 

	else {

	}
	
}

/*QUINOA*/

function quinoaFunction() {
    console.log("myFunction()");
    alert("You've added quinoa!");
    var today = new Date(); //today's date
    var date = getFutureTime(2419000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Quinoa has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
}

function getFutureTime(minutes) {
    console.log("getFutureTime()");
    //gives date however many days from current date
    var today = new Date();
    today.setTime(today.getTime() + (minutes*60*1000));
    return today;
}

function setCookie(cname, cvalue, exdays) {
    console.log("setCookie()");
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    console.log(document.cookie);
}

function getCookie(cname) {
    console.log("getCookie()");
    console.log(cname);
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function deleteCookies(cname) {
    setCookie(cname, "", -1);
}

function loadQuinoaCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Quinoa is still ok.');
        window.setTimeout(function() {alert('Watch out -- Quinoa just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Quinoa expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*RICE*/

function riceFunction() {
    console.log("myFunction()");
    alert("You've added rice!");
    var today = new Date(); //today's date
    var date = getFutureTime(5259000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Rice has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
}

function getFutureTime(minutes) {
    console.log("getFutureTime()");
    //gives date however many days from current date
    var today = new Date();
    today.setTime(today.getTime() + (minutes*60*1000));
    return today;
}

function setCookie(cname, cvalue, exdays) {
    console.log("setCookie()");
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    console.log(document.cookie);
}

function getCookie(cname) {
    console.log("getCookie()");
    console.log(cname);
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function deleteCookies(cname) {
    setCookie(cname, "", -1);
}

function loadRiceCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Rice is still ok.');
        window.setTimeout(function() {alert('Watch out -- Rice just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Rice expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*TORTILLA*/

function tortillaFunction() {
    console.log("myFunction()");
    alert("You've added tortilla!");
    var today = new Date(); //today's date
    var date = getFutureTime(604800); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Tortillas have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
}

function getFutureTime(minutes) {
    console.log("getFutureTime()");
    //gives date however many days from current date
    var today = new Date();
    today.setTime(today.getTime() + (minutes*60*1000));
    return today;
}

function setCookie(cname, cvalue, exdays) {
    console.log("setCookie()");
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    console.log(document.cookie);
}

function getCookie(cname) {
    console.log("getCookie()");
    console.log(cname);
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function deleteCookies(cname) {
    setCookie(cname, "", -1);
}

function loadTortillaCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Tortillas are still ok.');
        window.setTimeout(function() {alert('Watch out -- Tortillas just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Tortillas expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}