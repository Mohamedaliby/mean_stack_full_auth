angular.module('app.factory',[])

 .factory('pageService', function ($http) {
      console.log('I am defined');
   var thePageData = [];
   return {
     initData: function (pages) {
       thePageData = pages;
       return null;
     },
     getPages: function () {
       return thePageData;
     },
     getPage: function (pageID) {
       for (var i = 0; i < thePageData.length; i++) {
         if (thePageData[i].$id === pageID) {
           return thePageData[i];
         }
       }
       return null;

     }
   };

 });
