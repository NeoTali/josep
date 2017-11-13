(function() {
    var app = angular.module('acpri',[]);
    
    app.controller('iniciController', function(){

    });

    app.directive('capcelera',function(){
        return {
            restrict: 'E',
            templateUrl: 'Html/capcelera.html'
        };
    });
})();