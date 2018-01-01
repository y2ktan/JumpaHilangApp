var BaseApp = angular.module('BaseApp', []);
BaseApp.controller('HomePageCtrl', function ($scope) {
    $scope.NavigateToLogin = function () {
        window.location = "login.html";
    };

    $scope.NavigateToVisitor = function () {
        window.location = "visitor.html";
    };
});
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
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        if(screen.lockOrientation) {  
           screen.lockOrientation('portrait');  
        } else {  
           screen.orientation.lock('portrait');  
        }  
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
