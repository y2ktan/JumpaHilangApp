BaseApp.controller('LoginPageCtrl', function ($scope) {

    // Initial values ~~~~~~~~~~~~~
    $scope.ag_login = {
        password: "PASSWORD",
        username: "USERNAME"
    };

    $scope.dummy_database_json_path = "../asset/user_data_info.json";




    // APIs ~~~~~~~~~~~~~~~~~

    // This use for the sign in button
    $scope.proceed_signin = function () {

        // This is to load initial data if there wasn't there
        if (localStorage.getItem("user_data_set") === null)
        {
            var base_value_obj = {
                "test": {
                    "user_name": "test",
                    "password": "123",
                    "first_name": "test1",
                    "last_name": "example",
                    "id_passport": "123-456-60",
                    "email": "test@yahoo.com",
                    "phone": "+6012-444555666",
                    "street": "some street",
                    "city": "some city",
                    "post_code": "some code",
                    "country": "Soem contry",
                    "gentle": "unknown",
                    "claim": [
                        {
                            "item": "Iphone 1",
                            "found_when": "dd/mm/yyyy hh"
                        }
                    ]
                },
                "cmtan": {
                    "user_name": "cmtan",
                    "password": "123",
                    "first_name": "Chun Mun",
                    "last_name": "Tan",
                    "id_passport": "S8076606H",
                    "email": "info@ressphere.com",
                    "phone": "+6012-111222333",
                    "street": "16 Sandilands Road",
                    "city": "SINGAPORE",
                    "post_code": "546080",
                    "country": "SINGAPORE",
                    "gentle": "male",
                    "claim": [
                        {
                            "item": "Iphone 5",
                            "found_when": "25/01/2018 2pm"
                        }
                    ]
                }
            };

            //console.log(base_value_obj);
            var base_value = JSON.stringify(base_value_obj);
            localStorage.setItem('user_data_set', base_value);

            console.log("Asserting initial data !!!!");
        }

        // Retreive stored user data
        var user_data_set_obj = JSON.parse(localStorage.getItem('user_data_set'));
        //console.log(user_data_set_obj);

        // Check the username and password
        var login_status = "false";
        if ($scope.ag_login.username in user_data_set_obj)
        {
            var user_data_obj = user_data_set_obj[$scope.ag_login.username];

            if ($scope.ag_login.password === user_data_obj["password"])
            {
                sessionStorage.setItem("user_name", $scope.ag_login.username);
                sessionStorage.setItem("user_data", JSON.stringify(user_data_obj));
                login_status = "true";
                $scope.ag_login.error_display = "Login ~~~~";

                //alert(JSON.stringify(user_data_set_obj[$scope.ag_login.username]));

                // Diver to user page
                window.location = 'visitor.html'
            }
            else
            {
                $scope.ag_login.error_display = "Passwrod is incorrect !!";
            }
            
        }
        else
        {
            $scope.ag_login.error_display = "User name not found !!";
            
        }

        // Record login status
        sessionStorage.setItem("login_status", login_status);

        // Following is to cleanup local storage, debug purpose
        //localStorage.removeItem('user_data_set');
    };


});
