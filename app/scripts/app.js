'use strict';

var app = angular.module('App', []);

app.controller('MainCtrl', function ($scope) {
    var self = this;
    self.user = {
        name: 'Gayan Virajith',
        title: 'Noobie'
    };

});


app.directive('account', function() {


    return {
        restrict: 'E',
        transclude: true,
        scope: {
            name: '@',
            title: '@'
        },
        templateUrl: 'views/zippy.directive.html',
        compile: function(tElem) {

            return function(scope, element){
                scope.isContentVisible = false;
                scope.toggleContent = function() {
                    scope.isContentVisible = ! scope.isContentVisible;
                };
                scope.hideAccount = function() {
                    console.log("hide account...");
                };
            }
        }
    }
});




