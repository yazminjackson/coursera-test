(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('BuyController', BuyController)
    .controller('BoughtShoppingController', BoughtShoppingController)
    .service('CheckOffService', CheckOffService);

  BuyController.$inject = ['CheckOffService'];
  function BuyController(CheckOffService) {
    var shoppingList = this;

    shoppingList.items = CheckOffService.buyListItems();

    shoppingList.buyItem = function(index) {
       CheckOffService.buyItem(index);
    };
  }

  BoughtShoppingController.$inject = ['CheckOffService'];
  function BoughtShoppingController(CheckOffService) {
    var boughtList = this;

    boughtList.items = CheckOffService.boughtListItems();

    boughtList.finishedShopping = function() {
      return CheckOffService.finishedShopping();
    };
  }

  function CheckOffService() {
    var service = this;

    var buyList = [
        { name: "Milk", quantity: 1 },
        { name: "Salt", quantity: 1 },
        { name: "Cookies", quantity: 5 },
        { name: "Cupcakes", quantity: 10 },
        { name: "Chips", quantity: 9 },
        { name: "Ice Cream", quantity: 4 },
        { name: "Noodles", quantity: 2 },
        { name: "Chicken", quantity: 1}
      ];

    var boughtList = [];

    service.buyListItems = function () {
      return buyList;
    };

    service.boughtListItems = function () {
      return boughtList;
    };

    service.buyItem = function (index) {
      var item = buyList[index];
      buyList.splice(index,1);
      boughtList.push(item);
    };

    service.finishedShopping = function(){
      return buyList.length == 0;
    };
  }
})();
