(function () {
	'use strict';

	angular.module('data').service("MenuDataService",MenuDataService);

	MenuDataService.$inject = ['$http','$q'];
	function MenuDataService($http,$q) {
	var dataService = this;
	
	dataService.getAllCategories = function () {
		//retrive all categories as a promise
		var deffered = $q.defer();

		var rawResponse = $http({method: "GET",url:"https://davids-restaurant.herokuapp.com/categories.json"});
			rawResponse.then(function(response) {
				deffered.resolve(response.data);
			},function (reason) {
				console.log('Fail to retrive categories, reason:' + reason);
				deffered.reject('Fail to retrive categories, reason:' + reason);
			});

		return deffered.promise; //here response is a promise!
	};

	dataService.getItemsForCategory = function (categoryShortName) {
		var deffered = $q.defer();

		var rawResponse = $http({method: "GET",url:" https://davids-restaurant.herokuapp.com/menu_items.json",
			params: { category:categoryShortName}
		});
		rawResponse.then(function (response) {
			//on success
			deffered.resolve(response.data);	
		},function (reason) {
			//on fail
			console.log('Fail to retrive categories, reason:' + reason);
			deffered.reject('Fail to retrive categories, reason:' + reason);
		});
		return deffered.promise;
	};
}
})();
