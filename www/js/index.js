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
		showLoading("");

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

$("#goFarther").on("click",function(){
	var type = $(this).attr("data-notify");
	var postId = $(this).attr("data-post");
	if(type==1){
		jQuery.getPostsById(window.localStorage.getItem("authtoken"),window.localStorage.getItem("id"),parseInt(postId),'#refundacja-post-page');
	}
	if(type==2){
		jQuery.showMessage(window.localStorage.getItem("authtoken"),window.localStorage.getItem("id"),parseInt(postId));
	}
	if(type==3){
		jQuery.getPostsById(window.localStorage.getItem("authtoken"),window.localStorage.getItem("id"),parseInt(postId),'#refundacja-post-page');
	}
	if(type==5){
		jQuery.getPostsById(window.localStorage.getItem("authtoken"),window.localStorage.getItem("id"),parseInt(postId),'#refundacja-post-page');
	}
	$("#pushNotifyPopup").hide();
});

function capturePhoto(onSuccess) {
	showLoading("");
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
    	}
    );
}

function onFail(message) {
    //alert('Failed because: ' + message);
	notify("Anulowano","Info");
	hideLoading();
}

function onPhotoDataSuccess(imageData) {
    var smallImage = document.getElementById('send-msg-image');
    smallImage.style.display = 'block';
	smallImage.src = imageData;
	hideLoading();
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
function onPhotoURISuccessQc(imageURI) {
	var largeImage = document.getElementById('qc-photo');
	$width = $(window).width();
	$width = parseInt($width*0.9);
	$('img#qc-photo').css({
		'max-width' : $width , 'height' : 'auto', 'margin' : 'auto', 'display' : 'block'
	});
	largeImage.src = imageURI;
	$('.take-photo').hide();
	$('#photo-container').show();
	hideLoading();
}
function onPhotoURISuccessAv(imageURI) {
	var largeImage = document.getElementById('avatar-photo');
	$width = $(window).width();
	$width = parseInt($width*0.9);
	$('img#avatar-photo').css({
		'max-width' : $width , 'height' : 'auto', 'margin' : 'auto', 'display' : 'block'
	});
	largeImage.src = imageURI;
	$('#avatar-confirm-wrapper').show();
	$('#avatar-default-wrapper').hide();
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

function onError(data){
	var api_key = "5bb101b76cb834b382a86b9c1a22a392";
	
	navigator.notification.vibrate(500);
	hideLoading();
    navigator.notification.alert(
		(data.err==2) ? data.msg : 'Wystąpił błąd...',
		null,
		'Błąd',
		'OK'
	);	
    var params = new Object();
    params.error = data;   
    $.ajax({
        url: "https://konsylium24.pl/mobileapi/report_error?&api_key=" + api_key,
        cache: false,
        dataType: "json",
		async: true,
		crossDomain: true, 
		data: params,
    });
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


function win(r) {
	//console.log("Code = " + r.responseCode);
	//console.log("Response = " + r.response);
	//console.log("Sent = " + r.bytesSent);
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

$( function() {
	jQuery.extend( {
		getSpecializationSelect: function(){
			$.ajax({
				url: 'file:///android_asset/www/data/specializations.json',
				cache: true,
				dataType: "json",
				async: true,
				crossDomain: true,    
				success: function(data){	
					$.each(data, function(key, val) {
						$('select.specialization').append($(document.createElement('li')).html('<option value="'+key+'">'+val+'</option>'))
					});
					$('select.specialization option').first().attr("selected","selected");
				},
				error: onError,
			});
		}
	});
});
