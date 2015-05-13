/*APPLES*/

function appleFunction() {
	console.log("myFunction()");
    alert("You've added an apple!");
    var today = new Date(); //today's date
    var date = getFutureTime(0.2); //future timing (20) -- 2 to 4 weeks (or 1814000 seconds)
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Apples have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
}

function getFutureTime(minutes) {
	console.log("getFutureTime()");
	//gives date however many days from current date
	var today = new Date();
    today.setTime(today.getTime() + (minutes*60*1000)); //days
    return today;
}

function setCookie(cname, cvalue, exdays) {
	console.log("setCookie()");
    var d = new Date(); 
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); //seconds
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

function loadAppleCookies() {
	console.log("loadCookies()");

	var time = getCookie("groceries");

	if (time != "") {
		var date = new Date(time);
		var today = new Date();
		var timeDifference = date.getTime() - today.getTime();

		if (timeDifference > 0) {
		alert('Welcome back. Apples are still ok.');
		window.setTimeout(function() {alert('Watch out - Apples just expired'), 
			deleteCookies("groceries");}, timeDifference);
		}

		else {
		alert('Apples expired while you were gone. Oh no! :(');
		deleteCookies("groceries");
		}

	} 

	else {

	}
	
}

/*AVOCADOS*/

function avocadoFunction() {
    console.log("myFunction()");
    alert("You've added an avocado!");
    var today = new Date(); //today's date
    var date = getFutureTime(0.3); //future timing 7 to 10 days (or 691200 seconds)
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Avocados have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadAvocadoCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Avocados are still ok.');
        window.setTimeout(function() {alert('Watch out -- Avocados just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Avocados expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*BANANAS*/

function bananaFunction() {
    console.log("myFunction()");
    alert("You've added a banana!");
    var today = new Date(); //today's date
    var date = getFutureTime(432000); //future timing -- 2 to 7 days
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Bananas have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadBananaCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Bananas are still ok.');
        window.setTimeout(function() {alert('Watch out -- Bananas just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Bananas expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*BERRIES*/

function berryFunction() {
    console.log("myFunction()");
    alert("You've added berries!");
    var today = new Date(); //today's date
    var date = getFutureTime(432000); //future timing -- 5 to 7
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Berries have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadBerryCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Berries are still ok.');
        window.setTimeout(function() {alert('Watch out -- Berries just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Berries expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*GRAPES*/

function grapeFunction() {
    console.log("myFunction()");
    alert("You've added grapes!");
    var today = new Date(); //today's date 7 to 10 days
    var date = getFutureTime(734400); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Grapes have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadGrapeCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Grapes are still ok.');
        window.setTimeout(function() {alert('Watch out -- Grapes just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Grapes expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*CITRUS*/

function citrusFunction() {
    console.log("myFunction()");
    alert("You've added citrus!");
    var today = new Date(); //today's date
    var date = getFutureTime(3888000); //future timing -- 1 to 2 months
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Citrus have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadCitrusCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Citrus are still ok.');
        window.setTimeout(function() {alert('Watch out -- Citrus just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Citrus expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*ORANGES*/

function orangeFunction() {
    console.log("myFunction()");
    alert("You've added an orange!");
    var today = new Date(); //today's date
    var date = getFutureTime(3888000); //future timing -- 1 to 2 months
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Oranges have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadOrangeCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Oranges are still ok.');
        window.setTimeout(function() {alert('Watch out -- Oranges just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Oranges expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*PEACH*/

function peachFunction() {
    console.log("myFunction()");
    alert("You've added a peach!");
    var today = new Date(); //today's date
    var date = getFutureTime(432000); //future timing -- 2 to 7 days
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Peaches have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadPeachCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Peaches are still ok.');
        window.setTimeout(function() {alert('Watch out -- Peaches just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Peaches expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*TOMATOES*/

function tomatoFunction() {
    console.log("myFunction()");
    alert("You've added a tomato!");
    var today = new Date(); //today's date -- 2 weeks
    var date = getFutureTime(907200); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Tomatoes have expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadTomatoCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Tomatoes are still ok.');
        window.setTimeout(function() {alert('Watch out -- Tomatoes just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Tomatoes expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}
