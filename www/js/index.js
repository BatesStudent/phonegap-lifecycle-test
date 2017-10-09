var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

// here is ready listener
document.addEventListener("deviceready", onDeviceReady, false);
	// here is resume listener
	document.addEventListener("resume", onResume, false);
        // here is pause listener
	document.addEventListener("pause", onPause, false);
		
	
function updateDisplay() {
	document.getElementById("launched").innerHTML = "Application launched: " + launched_count;
	document.getElementById("resumed").innerHTML = "Application paused: " + paused_count;
	document.getElementById("paused").innerHTML = "Application resumed: " + resumed_count;
}


// device APIs are available
//
    function onDeviceReady() {

	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
