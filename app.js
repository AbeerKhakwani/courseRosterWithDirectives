// var courseRoster = angular.module("courseRoster", ["ui.router"]);
/////DIRECTIVE//////////////////////////////////////////////////////

// courseRoster.directive("welcomeText", function() {
//     return {
//         restrict: "E",
//         template: "<div>Welcome!</div>"
//     };
// });
// courseRoster.directive("welcomeText", function() {
//   return {
//     restrict: "E",
//     template: "<div>Welcome!</div>"
//   };
// });
// courseRoster.directive("enter", function() {
//     return  function(scope, element,attrs)  {
//         element.bind("mouseenter", function(){
//             element.addClass(attrs.enter);
//         });
//     };
// });
// courseRoster.directive("leave", function() {
//     return  function(scope, element,attrs)  {
//         element.bind("mouseleave", function(){
//             element.removeClass(attrs.enter);
//         });
//     };
// });

var app = angular.module('choreApp', []);

app.controller("ChoreCtrl", function ($scope) {
    $scope.logChore = function (chore) {
        alert(chore + " is done!");
    };
    $scope.ctrlGreeting= "hello";
});

app.directive("kid", function () {
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="thisChore">' +
        '{{thisChore}}' + " ----------->" +
        '<div class="btn btn-success" ng-click="done({someChore: thisChore})"> I\'m done!</div>'
    };
});

app.directive("drink", function(){
    return{
        scope:{
            flavor: "="
        },
        template:'<input type="text" ng-model="flavor"> {{ flavor}}'

    }

});

 ////ROUTES///////////////////////////////////////////////////////
// courseRoster.config(function($stateProvider) {
//     $stateProvider.state("home", {
//         url: "",
//         templateUrl: "partials/home.html"
//     });
//
//     $stateProvider.state("courses", {
//         url: "/courses",
//         templateUrl: "partials/courses.html",
//         controller: "CoursesCtrl"
//     });
//
//     $stateProvider.state("courses.students", {
//         url: "/:courseId",
//         templateUrl: "partials/courses.students.html",
//         controller: "StudentsCtrl"
//     });

    // $stateProvider.state("courses.detail", {
    //     url:"/details",
    //     templateUrl:"partials/courses.details.html"
    // });
// });
