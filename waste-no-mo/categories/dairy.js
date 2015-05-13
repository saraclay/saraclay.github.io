/*BUTTER*/

function butterFunction() {
	console.log("myFunction()");
    alert("You've added butter!");
    var today = new Date(); //today's date
    var date = getFutureTime(5259000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Butter has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadButterCookies() {
	console.log("loadCookies()");

	var time = getCookie("groceries");

	if (time != "") {
		var date = new Date(time);
		var today = new Date();
		var timeDifference = date.getTime() - today.getTime();

		if (timeDifference > 0) {
		alert('Welcome back. Butter is still ok.');
		window.setTimeout(function() {alert('Watch out -- Butter just expired'), 
			deleteCookies("groceries");}, timeDifference);
		}

		else {
		alert('Butter expired while you were gone. Oh no! :(');
		deleteCookies("groceries");      
		}

	} 

	else {

	}
	
}

/*CHEESE*/

function cheeseFunction() {
    console.log("myFunction()");
    alert("You've added cheese!");
    var today = new Date(); //today's date
    var date = getFutureTime(5259000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Cheese has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadCheeseCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Cheese is still ok.');
        window.setTimeout(function() {alert('Watch out -- Cheese just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Cheese expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*ICE CREAM*/

function icecreamFunction() {
    console.log("myFunction()");
    alert("You've added ice cream!");
    var today = new Date(); //today's date
    var date = getFutureTime(5259000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Ice cream has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadIceCreamCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Ice cream is still ok.');
        window.setTimeout(function() {alert('Watch out -- Ice cream just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Ice cream expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*MILK*/

function milkFunction() {
    console.log("myFunction()");
    alert("You've added milk!");
    var today = new Date(); //today's date
    var date = getFutureTime(604800); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Milk has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadMilkCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Milk is still ok.');
        window.setTimeout(function() {alert('Watch out -- Milk just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Milk expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}

/*YOGURT*/

function yogurtFunction() {
    console.log("myFunction()");
    alert("You've added yogurt!");
    var today = new Date(); //today's date
    var date = getFutureTime(5259000); //future timing
    setCookie("groceries", date.toUTCString(), 100);
    window.setTimeout(function() {alert('Yogurt has expired!'); deleteCookies("groceries")}, date.getTime() - today.getTime());
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

function loadYogurtCookies() {
    console.log("loadCookies()");

    var time = getCookie("groceries");

    if (time != "") {
        var date = new Date(time);
        var today = new Date();
        var timeDifference = date.getTime() - today.getTime();

        if (timeDifference > 0) {
        alert('Welcome back. Yogurt is still ok.');
        window.setTimeout(function() {alert('Watch out -- Yogurt just expired'), 
            deleteCookies("groceries");}, timeDifference);
        }

        else {
        alert('Yogurt expired while you were gone. Oh no! :(');
        deleteCookies("groceries");
        }

    } 

    else {

    }
    
}