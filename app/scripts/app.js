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
        link: function(scope){
            scope.isContentVisible = false;
            scope.toggleContent = function() {
                scope.isContentVisible = ! scope.isContentVisible;
            }
        }
    }
});




