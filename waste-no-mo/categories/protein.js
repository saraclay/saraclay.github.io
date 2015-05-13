/*BEANS*/

function beansFunction() {
	console.log("myFunction()");
    alert("You've added beans!");
    var today = new Date(); //today's date
    var date = getFutureTime(432000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Beans have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadBeansCookies() {
	console.log("loadCookies()");

	var time = getCookie("groceries");

	if (time != "") {
		var date = new Date(time);
		var today = new Date();
		var timeDifference = date.getTime() - today.getTime();

		if (timeDifference > 0) {
		alert('Welcome back. Beans are still ok.');
		window.setTimeout(function() {alert('Watch out -- Beans just expired'), 
			deleteCookies("groceries");}, timeDifference);
		}

		else {
		alert('Beans expired while you were gone. Oh no! :(');
		deleteCookies("groceries");
		}

	} 

	else {

	}
	
}

/*BEEF*/

function beefFunction() {
    console.log("myFunction()");
    alert("You've added beef!");
    var today = new Date(); //today's date
    var date = getFutureTime(172800); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Beef has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadBeefCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Beef is still ok.');
        window.setTimeout(function() {alert('Watch out -- Beef just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Beef expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*EGG*/

function eggFunction() {
    console.log("myFunction()");
    alert("You've added eggs!");
    var today = new Date(); //today's date
    var date = getFutureTime(1814000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Eggs have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadEggCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Eggs are still ok.');
        window.setTimeout(function() {alert('Watch out -- Eggs just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Eggs expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*CHICKEN*/

function chickenFunction() {
    console.log("myFunction()");
    alert("You've added chicken!");
    var today = new Date(); //today's date
    var date = getFutureTime(172800); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Chicken has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadChickenCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Chicken is still ok.');
        window.setTimeout(function() {alert('Watch out -- Chicken just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Chicken expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*FISH*/

function fishFunction() {
    console.log("myFunction()");
    alert("You've added fish!");
    var today = new Date(); //today's date
    var date = getFutureTime(172800); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Fish has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadFishCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Fish is still ok.');
        window.setTimeout(function() {alert('Watch out -- Fish just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Fish expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*HAM*/

function hamFunction() {
    console.log("myFunction()");
    alert("You've added ham!");
    var today = new Date(); //today's date
    var date = getFutureTime(864000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Ham has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadHamCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Ham is still ok.');
        window.setTimeout(function() {alert('Watch out -- Ham just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Ham expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*PORK*/

function porkFunction() {
	console.log("myFunction()");
    alert("You've added pork!");
    var today = new Date(); //today's date
    var date = getFutureTime(172800); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Pork has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadPorkCookies() {
	console.log("loadCookies()");

	var time = getCookie("groceries");

	if (time != "") {
		var date = new Date(time);
		var today = new Date();
		var timeDifference = date.getTime() - today.getTime();

		if (timeDifference > 0) {
		alert('Welcome back. Pork is still ok.');
		window.setTimeout(function() {alert('Watch out -- Pork just expired'), 
			deleteCookies("groceries");}, timeDifference);
		}

		else {
		alert('Pork expired while you were gone. Oh no! :(');
		deleteCookies("groceries");
		}

	} 

	else {

	}
	
}

/*SHRIMP*/

function shrimpFunction() {
	console.log("myFunction()");
    alert("You've added shrimp!");
    var today = new Date(); //today's date
    var date = getFutureTime(172800); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Shrimp has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadShrimpCookies() {
	console.log("loadCookies()");

	var time = getCookie("groceries");

	if (time != "") {
		var date = new Date(time);
		var today = new Date();
		var timeDifference = date.getTime() - today.getTime();

		if (timeDifference > 0) {
		alert('Welcome back. Shrimp is still ok.');
		window.setTimeout(function() {alert('Watch out -- Shrimp just expired'), 
			deleteCookies("groceries");}, timeDifference);
		}

		else {
		alert('Shrimp expired while you were gone. Oh no! :(');
		deleteCookies("groceries");
		}

	} 

	else {

	}
	
}

/*TOFU*/

function tofuFunction() {
	console.log("myFunction()");
    alert("You've added tofu!");
    var today = new Date(); //today's date
    var date = getFutureTime(345600); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Tofu has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadTofuCookies() {
	console.log("loadCookies()");

	var time = getCookie("groceries");

	if (time != "") {
		var date = new Date(time);
		var today = new Date();
		var timeDifference = date.getTime() - today.getTime();

		if (timeDifference > 0) {
		alert('Welcome back. Tofu is still ok.');
		window.setTimeout(function() {alert('Watch out -- Tofu just expired'), 
			deleteCookies("groceries");}, timeDifference);
		}

		else {
		alert('Tofu expired while you were gone. Oh no! :(');
		deleteCookies("groceries");
		}

	} 

	else {

	}
}
	
/*TURKEY*/

function turkeyFunction() {
	console.log("myFunction()");
    alert("You've added turkey!");
    var today = new Date(); //today's date
    var date = getFutureTime(129600); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Turkey has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadTurkeyCookies() {
	console.log("loadCookies()");

	var time = getCookie("groceries");

	if (time != "") {
		var date = new Date(time);
		var today = new Date();
		var timeDifference = date.getTime() - today.getTime();

		if (timeDifference > 0) {
		alert('Welcome back. Turkey is still ok.');
		window.setTimeout(function() {alert('Watch out -- Turkey just expired'), 
			deleteCookies("groceries");}, timeDifference);
		}

		else {
		alert('Turkey expired while you were gone. Oh no! :(');
		deleteCookies("groceries");
		}

	} 

	else {

	}
	
}