var appName = 'mean';
var app = angular.module(appName, ['ngResource','ngRoute','smart-table','angularModalService','ngMaterial', 'ngAria', 'ngAnimate','example','users','participants', 'events', 'adventures']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [appName]);
});