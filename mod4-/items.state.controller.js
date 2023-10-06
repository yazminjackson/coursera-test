(function () {
	// item state controller
	var myApp = angular.module('MenuApp');
	myApp.controller('ItemStateController',ItemStateController);

	ItemStateController.$inject = ['itemsList'];
	function ItemStateController(itemsList) {
		var itemsController = this;
		//console.log(itemsList);
		itemsController.categoryName = itemsList.category.name;
		itemsController.itemsList = itemsList.menu_items;
	}
	
})();
