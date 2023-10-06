(function () {
	//categories.state.controller
	var myApp = angular.module('MenuApp');
	myApp.controller('CategoriesStateController',CategoriesStateController);
	
	CategoriesStateController.$inject = ['categorieList'];
	function CategoriesStateController(categorieList) {
		var categoriesController =this;
		categoriesController.categorieList = categorieList
	}




})();
