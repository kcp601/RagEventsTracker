var appName = 'mean';
var app = angular.module(appName, ['ngResource','ngRoute','smart-table', 'angularModalService','example', 'users', 'participants', 'admins']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [appName]);
});