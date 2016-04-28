'use strict'

// Name of the application and dependencies
var app = angular.module('sleeplessApp', ['ui.router']);

// Configure the app's views and states
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	// Homepage
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: '../templates/home.html'
	})

	// Crew Members page
	.state('members', {
		url: '/members',
		templateUrl: '../templates/members.html'
	})

	// Footage page
	.state('footage', {
		url: '/footage',
		templateUrl: '../templates/footage.html'
	})

	// Contact page
	.state('contact', {
		url: '/contact',
		templateUrl: '../templates/contact.html'
	});

	// Other routes redirect to the home state
	$urlRouterProvider.otherwise('home');
}]);
