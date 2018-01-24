var BaseApp = angular.module('BaseApp', ["ngRoute"]);
BaseApp.config(function ($routeProvider) {
    $routeProvider.when("/faq", {
        controller: "FAQPageCtrl",
        templateUrl: "views/faq.html"
    })
    $routeProvider.when("/how_to", {
        controller: "HowToPageCtrl",
        templateUrl: "views/how_to.html"
    })
    .when("/", {
        controller: "HomePageCtrl",
        templateUrl: "views/home.html"
     })
     .when("/activation", {
        controller: "ActivationPageCtrl",
        templateUrl: "views/activation_page.html"
     })
     .when("/signIn", {
        controller: "LoginPageCtrl",
        templateUrl: "views/login.html"
     })
     .when("/visitor", {
        controller: "VisitorPageCtrl",
        templateUrl: "views/visitor.html"
     })
     .when("/signUp", {
         controller: "SignupPageCtrl",
        templateUrl: "views/SignupPageCtrl.html"
     })
     .otherwise({ redirectTo: "/" });
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
