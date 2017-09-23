angular.module('app.directive',[])
.directive('fileField', function() {
  return {
    require:'ngModel',
    restrict: 'E',
    link: function (scope, element, attrs, ngModel) {
        //set default bootstrap class
        if(!attrs.class && !attrs.ngClass){
            element.addClass('btn');
        }

        var fileField = element.find('input');

        //If an ACCEPT attribute was provided, add it to the input.
        if (attrs.accept) {
          fileField.attr('accept', attrs.accept);
        }

        fileField.bind('change', function(event){
            scope.$evalAsync(function () {
              ngModel.$setViewValue(event.target.files[0]);
              if(attrs.preview){
                var reader = new FileReader();
                reader.onload = function (e) {
                    scope.$evalAsync(function(){
                        scope[attrs.preview]=e.target.result;
                    });
                };
                reader.readAsDataURL(event.target.files[0]);
              }
            });
        });
        fileField.bind('click',function(e){
            e.stopPropagation();
        });
        element.bind('click',function(e){
            e.preventDefault();
            fileField[0].click();
        });
    },
    template:'<button type="button"><ng-transclude></ng-transclude><input name="profileimage" type="file" style="display:none"></button>',
    replace:true,
    transclude:true
  };
})

.directive('compareTo', function($parse) {
  return {
    require:'ngModel',
    link: function (scope, element, attrs, ngModel) {
        var mainModel = $parse(attrs.compareTo);
        var secondModel = $parse(attrs.ngModel);
        scope.$watch(attrs.ngModel, function(newValue){
            ngModel.$setValidity(attrs.name, newValue === mainModel(scope))
        });
        
         scope.$watch(attrs.compareTo, function(newValue){
            ngModel.$setValidity(attrs.name, newValue === secondModel(scope))
        });
       }
   
  };
});
