//vegetables.js

/*ASPARAGUS*/

function asparagusFunction() {
	console.log("myFunction()");
    alert("You've added an asparagus!");
    var today = new Date(); //today's date
    var date = getFutureTime(518400); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Asparaguses have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadAsparagusCookies() {
	console.log("loadCookies()");

	var time = getCookie("groceries");

	if (time != "") {
		var date = new Date(time);
		var today = new Date();
		var timeDifference = date.getTime() - today.getTime();

		if (timeDifference > 0) {
		alert('Welcome back. Asparaguses are still ok.');
		window.setTimeout(function() {alert('Watch out -- Asparaguses just expired'), 
			deleteCookies("groceries");}, timeDifference);
		}

		else {
		alert('Asparaguses expired while you were gone. Oh no! :(');
		deleteCookies("groceries");
		}

	} 

	else {

	}
	
}

/*BELL PEPPER*/

function bellpepperFunction() {
    console.log("myFunction()");
    alert("You've added an Bell Pepper!");
    var today = new Date(); //today's date
    var date = getFutureTime(1210000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Bell pepers have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadBellPepperCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Bell peppers are still ok.');
        window.setTimeout(function() {alert('Watch out -- Bell peppers just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Bell peppers expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*BROCCOLI*/

function broccoliFunction() {
    console.log("myFunction()");
    alert("You've added a broccoli!");
    var today = new Date(); //today's date
    var date = getFutureTime(608400); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Broccoli have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadBroccoliCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Broccoli are still ok.');
        window.setTimeout(function() {alert('Watch out -- Broccoli just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Broccoli expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*CABBAGE*/

function cabbageFunction() {
    console.log("myFunction()");
    alert("You've added cabbage!");
    var today = new Date(); //today's date
    var date = getFutureTime(619200); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Cabbages have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadCabbageCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Cabbages are still ok.');
        window.setTimeout(function() {alert('Watch out -- Cabbages just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Cabbages expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*CARROT*/

function carrotFunction() {
    console.log("myFunction()");
    alert("You've added carrots!");
    var today = new Date(); //today's date
    var date = getFutureTime(2592000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Carrots have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadCarrotCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Carrots are still ok.');
        window.setTimeout(function() {alert('Watch out -- Carrots just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Carrots expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*CORN*/

function cornFunction() {
    console.log("myFunction()");
    alert("You've added corn!");
    var today = new Date(); //today's date
    var date = getFutureTime(518400); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Corn have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadCornCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Corn are still ok.');
        window.setTimeout(function() {alert('Watch out -- Corn just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Corn expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*KALE*/

function kaleFunction() {
    console.log("myFunction()");
    alert("You've added kale!");
    var today = new Date(); //today's date
    var date = getFutureTime(907200); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Kale has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadKaleCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Kale is still ok.');
        window.setTimeout(function() {alert('Watch out -- Kale just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Kale expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*MUSHROOM*/

function mushroomFunction() {
    console.log("myFunction()");
    alert("You've added a mushroom!");
    var today = new Date(); //today's date
    var date = getFutureTime(777600); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Mushrooms have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadMushroomCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Mushrooms are still ok.');
        window.setTimeout(function() {alert('Watch out -- Mushrooms just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Mushrooms expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*ONION*/

function onionFunction() {
    console.log("myFunction()");
    alert("You've added an onion!");
    var today = new Date(); //today's date
    var date = getFutureTime(3024000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Onions have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadOnionCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Onions are still ok.');
        window.setTimeout(function() {alert('Watch out -- Onions just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Onions expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*POTATO*/

function potatoFunction() {
    console.log("myFunction()");
    alert("You've added a potato!");
    var today = new Date(); //today's date
    var date = getFutureTime(1814000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Potatoes have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadPotatoCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Potatoes are still ok.');
        window.setTimeout(function() {alert('Watch out -- Potatoes just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Potatoes expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}