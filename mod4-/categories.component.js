(function () {
	
	angular.module('MenuApp').component('categories',{
		template: '<div>testLength={{$ctrl.categorieList}}In categories component</div>',
		templateUrl: 'categories.component.template.html',
		bindings:{
			categorieList:'<',
		}
		


	});


})();
