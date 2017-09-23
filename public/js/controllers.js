angular.module('app.controllers', [])



    .controller('authCtrl', ['$scope', '$state', '$http', '$log', 'Upload', function ($scope, $state, $http, $log, Upload) {
        $log.info("yes authCtrl working");

        //        $scope.file = undefined;
        //        $scope.upload = function () {
        //            Upload.upload({
        //                url: "/users/register",
        //                data: {
        //                    file: $scope.profileimage
        //                }
        //            }).then(function (response) {
        //                console.log('image uploaded');
        //            }, function (err) {
        //                console.log('upload failed');
        //            })
        //
        //        }
        //ng upload maybe need upload function
        //            if ($scope.form.file.$valid && $scope.file) {
        //              $scope.upload($scope.file);
        //      }




        $scope.createUser = function () {

            //            Upload.upload({
            //                url: "/users/register",
            //                data:{
            //                file: $scope.file
            //            }     
            //            }).then(function (resp) {
            //                // file is uploaded successfully
            //                console.log('file is uploaded successfully');
            //            }, function (resp) {
            //                // handle error
            //                console.log(resp); 
            //            }
            //            );


            $http.post('users/register', $scope.user).then(function (response, status) {
                console.log(response);
                if (response.status === 200) {
                    $state.go('home');
                }

            }).catch(function (error) {
                console.log(error);
                $scope.errors = error.data;
            })
        }


    }])

    .controller('loginCtrl', ['$scope', '$state', '$http', '$log', function ($scope, $state, $http, $log) {
        $log.info("loginCtrl working");

        $scope.login = function () {

            $http.post('users/login', $scope.user).then(function (response, status) {
                console.log(response);
                if (response.status === 200) {
                    $state.go('home');
                }

            }).catch(function (error) {
                console.log(error);
                $scope.errors = 'Wrong username or password';
                if (error.status === 400) {
                    $scope.errors = null;
                }

            })
        }


    }])

 .controller('homeCtrl', ['$scope', '$state', '$http', '$log', function ($scope, $state, $http, $log) {
        $log.info("homeCtrl working");

        $scope.logout = function () {

            $http.post('users/logout', $scope.user).then(function (response, status) {
                console.log(response);
                if (response.status === 200) {
                    $state.go('login');
                }

            }).catch(function (error) {
                console.log(error);
                $scope.errors = error.data;
            })
        }


    }]);
