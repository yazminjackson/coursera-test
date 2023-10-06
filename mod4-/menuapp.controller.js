(function () {


	angular.module('MenuApp').controller("MenuAppController",MenuAppController);

	MenuAppController.$inject=["MenuDataService"];
	function MenuAppController(MenuDataService) {
		var mainController = this;
		mainController.tag  ='I am test string.';
		mainController.categorieList = [];
		mainController.currentCategorieShortName = "";
		mainController.currentCategory = {};

		mainController.onClickTest = function () {
			var response = MenuDataService.getAllCategories();
			response.then(function (response) {
				mainController.categorieList = response;
				console.log(mainController.categorieList);
			})
			.catch(function (reason) {
				console.log("Promise error, reason:" + reason);
			});
		}
		//mainController.onClickTest();

		mainController.clickTest2 = function (index) {
			
			mainController.currentCategorieShortName = mainController.categorieList[index].short_name;
			var response = MenuDataService.getItemsForCategory(mainController.currentCategorieShortName);
			response.then(function (response) {
				mainController.currentCategory = response.data;
				console.log(mainController.currentCategory);
			})
			.catch(function (reason) {
				console.log("Promise error, reason:" + reason);
			});
				}


}

})();
