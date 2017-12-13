
var adminApp = angular.module('fwrk.admin', [
	'ui.router',
	'btford.markdown',
	'angular-page-loader',
	'fwrk.tracks',
	'fwrk.users',
	'fwrk.geners'
]);

adminApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('dashboard', {
		url: '/',
		templateUrl: '/admin/templates/admin_index.html',
		controller: 'dashboardCtrl'
	}) 
		

		.state('userList', {
			url: '/userList',
			templateUrl: '/admin/templates/userList.html',
			resolve: {
				userList: function(Users){
					return Users.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'AllUsersCtrl'
		})

		.state('addUser', {
			url: '/addUser',
			templateUrl: '/admin/templates/addUser.html',
			controller: 'addUserCtrl'   
		})
		.state('editUser', {
			url: '/editUser/:paraml',
			templateUrl: '/admin/templates/editUser.html',
			controller: 'editUserCtrl'
		})

		
		.state('addGener', {
			url: '/addGener',
			templateUrl: '/admin/templates/addGener.html',
			controller: 'addGenerCtrl'   
		})
		
		.state('GenerList', {
			url: '/GenerList',
			templateUrl: '/admin/templates/allGeners.html',
			resolve: {
				generList: function(Gener){
					return Gener.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'GenerListCtrl'
		})


		/**/
		.state('addTrack', {
			url: '/addTrack',
			templateUrl: '/admin/templates/addTrack.html',
			controller: 'addTrackCtrl'   
		})
		
		.state('TrackList', {
			url: '/TrackList',
			templateUrl: '/admin/templates/allTracks.html',
			resolve: {
				trackList: function(Track){
					return Track.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'TrackListCtrl'
		})
		

		.state('editTrack', {
			url: '/editTrack/:paraml',
			templateUrl: '/admin/templates/editTrack.html',
			controller: 'editTrackCtrl'
		})
		
		
		.state('editGener', {
			url: '/editGener/:paraml',
			templateUrl: '/admin/templates/editGener.html',
			controller: 'editGenerCtrl'
		})

		
});