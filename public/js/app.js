 angular.module('app', ['ui.router', 'app.controllers', 'app.factory', 'app.directive', 'ngFileUpload'])


     .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

             $stateProvider



             .state("register", {
             url: '/register',
             controller: 'authCtrl',
             templateUrl: 'views/register.html'
         })


             .state('login', {
             url: '/login',
             templateUrl: '/views/login.html',
             controller: 'loginCtrl'
         })
         
              .state('home', {
             url: '/home',
             templateUrl: '/views/home.html',
             controller: 'homeCtrl'
         })



         // if none of the above states are matched, use this as the fallback
         $urlRouterProvider.otherwise('/');

     }])

 //
 //.run(['$rootScope', '$state', '$stateParams',
 //  function ($rootScope, $state, $stateParams) {
 //    $rootScope.$state = $state;
 //    $rootScope.$stateParams = $stateParams;
 //}])
