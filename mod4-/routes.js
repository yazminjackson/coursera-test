(function () {
	//routes for the whole site.
	angular.module('MenuApp').config(RoutesConfig);
	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
	function RoutesConfig($stateProvider,$urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');
		$stateProvider.state('home',{
			url:'/home',
			template: "<a ui-sref = 'categories' ui-sref-active='activeTab'>See our menu categories!</a>"
		}

			)
		.state('categories',{
			url: '/categories',
			templateUrl: 'categories.state.template.html',
			controller: 'CategoriesStateController as categoriesController',
			resolve:{
				categorieList: ['MenuDataService',function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]


			}
		})

		.state('items',{
			url:'/items/{itemShortName}',
			templateUrl: 'items.state.template.html',
			controller: 'ItemStateController as itemController',
			resolve:{
				itemsList: ['$stateParams','MenuDataService',function ($stateParams,MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.itemShortName).then(function (response) {
						return response;
					});
				}]
			}
		});

	}

})();
