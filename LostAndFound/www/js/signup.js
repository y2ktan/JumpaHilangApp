var BaseApp = angular.module('BaseApp', []);

BaseApp.controller('SignupPageCtrl', function ($scope) {
    // Initial value
    $scope.ag_signup = {
        username: "USERNAME",
        email: "EMAIL",
        phone: "PHONE NUMBER",
        password1: "PASSWORD",
        password2: "RETYPE PASSWORD"
    };

});

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
    }
};