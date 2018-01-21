BaseApp.controller('HomePageCtrl', function ($scope) {
    $scope.NavigateToLogin = function () {
        window.location = "#!/signIn";
    };

    $scope.NavigateToVisitor = function () {
        window.location = "#!/visitor";
    };
});