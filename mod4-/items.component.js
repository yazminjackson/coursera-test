(function () {
	var myApp = angular.module('MenuApp');
	myApp.component('items',{
		templateUrl:'items.component.template.html',
		bindings:{
			itemsList:'<'
		}
	});





})();
