/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
	    app.checkConnection();
	   
	    $.mobile.changePage("#startPage", { transition: "slide"});
		//Jeśli strona logowanie jest aktywna to po kliknięciu systemowej strzałki opuszczamy aplikację, w innym 
		//przypadku wracamy do poprzedniej strony
		
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        $.support.cors = true;
        $.mobile.buttonMarkup.hoverDelay = 100;
		
		
    },
    
	checkConnection: function() {
	    var networkState = navigator.network.connection.type;
	    var states = {};
	    states[Connection.UNKNOWN]  = 'Unknown connection';
	    states[Connection.ETHERNET] = 'Ethernet connection';
	    states[Connection.WIFI]     = 'WiFi connection';
	    states[Connection.CELL_2G]  = 'Cell 2G connection';
	    states[Connection.CELL_3G]  = 'Cell 3G connection';
	    states[Connection.CELL_4G]  = 'Cell 4G connection';
	    states[Connection.NONE]     = 'No network connection';
	
	    if (states[networkState] === 'No network connection') {
	        notify('Brak połączenia internetowego.','Info');
	    }
	}
};



function capturePhoto(onSuccess) {

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
    	}
    );
}

function onFail(message) {
    //alert('Failed because: ' + message);
	notify("Anulowano","Info");

}

function onPhotoDataSuccess(imageData) {
    var smallImage = document.getElementById('send-msg-image');
    smallImage.style.display = 'block';
	smallImage.src = imageData;
	hideLoading();
}
function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function() {
            
        },
        // error callback
        function(err) {
        	
    });

    // Play audio
    my_media.play();
	
}

function onPhotoDataSuccessFd(imageData) {
	
	var smallImage = document.getElementById('np-fd-image');
	$width = $(window).width();
	$width = parseInt($width*0.9);
	$('img#np-fd-image').css({
		'max-width' : $width , 'height' : 'auto', 'margin' : 'auto', 'display' : 'block'
	});
	smallImage.src = imageData;
	hideLoading();
}

function onPhotoURISuccess(imageURI) {
    var largeImage = document.getElementById('send-msg-image');
    largeImage.style.display = 'block';
    
    largeImage.src = imageURI;
    hideLoading();
}


function onPhotoURISuccessPk(imageURI) {
	var largeImage = document.getElementById('np-pk-image');
	$width = $(window).width();
	$width = parseInt($width*0.9);
	$('img#np-pk-image').css({
		'max-width' : $width , 'height' : 'auto', 'margin' : 'auto', 'display' : 'block'
	});
	largeImage.src = imageURI;
	hideLoading();
}
function onPhotoURISuccessFd(imageURI) {
	var largeImage = document.getElementById('np-fd-image');
	$width = $(window).width();
	$width = parseInt($width*0.9);
	$('img#np-fd-image').css({
		'max-width' : $width , 'height' : 'auto', 'margin' : 'auto', 'display' : 'block'
	});
	largeImage.src = imageURI;
	hideLoading();
}

function getPhoto(source,onSuccess) {
    showLoading("");
    navigator.camera.getPicture(onSuccess, onFail, { 
    	quality: 100, 
    	destinationType: destinationType.FILE_URI,
    	sourceType: source 
      }
    );
}

function onDone(data){
	hideLoading();
}

function hideLoading(){
	$.mobile.loading("hide");
}


function notify(message,title){
    navigator.notification.alert(
		message,
		null,
		title,
		'OK'
	);	
}
function showLoading(message){
    $.mobile.loading("show",{
    	text: message,
        textVisible: true,
        theme: "b"
    });
}



function fail(error) {
	notify("Wystąpił błąd. Spróbuj ponownie. Jeżeli problem będzie się powtarzał skontaktuj się z administratorem.","Błąd");
	//console.log("An error has occurred: Code = " + error.code);
	//console.log("upload error source " + error.source);
	//console.log("upload error target " + error.target);
	hideLoading();
} 

function showConfirm(question,callback) {
    navigator.notification.confirm(
    	question,  
    	callback,              
        'Potwierdzenie',            
        'Nie,Tak'          
    );
}

