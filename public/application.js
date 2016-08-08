var appName = 'mean';
var app = angular.module(appName, ['ngResource','ngRoute','example', 'users', 'todos']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [appName]);
});