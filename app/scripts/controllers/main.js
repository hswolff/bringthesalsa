'use strict';

var Item = function(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.quantity = attrs.quantity;
  this.who = attrs.who;
  this.notes = attrs.notes;
};
Item.prototype.toJson = function() {
  return angular.toJson(this);
};

var ItemCollection = function(models) {
  this.modelType = Item;
  models = Array.prototype.concat.call([], models);
  for (var i = 0, l = models.length; i < l; i++) {
    var model = new this.modelType(models[i]);
    models[i] = model;
  }
  this.models = models;
};
ItemCollection.prototype.add = function(attrs) {
  var model = new this.modelType(attrs);
  this.models.push(model);
  return model;
};
ItemCollection.prototype.remove = function(index) {
  this.models.splice(index, 1);
};
ItemCollection.prototype.toJson = function() {
  return angular.toJson(this.models);
};
ItemCollection.prototype.save = function() {
  return localStorage.setItem('items', this.toJson());
};

var localStorageItems = angular.fromJson(localStorage.getItem('items'));

var defaultItems = [
  {'type': 'drink', 'name': 'Pepsi', 'quantity': 1, 'who': 'Joel', 'notes': 'Woaaah'},
  {'type': 'drink', 'name': 'Coke', 'quantity': 3, 'who': 'Bob'},
  {'type': 'snack', 'name': 'Chips & Salsa', 'quantity':  1, 'who': 'Howdy'}
];

var items = new ItemCollection(localStorageItems || defaultItems);

angular.module('BringTheSalsaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = items.models;

    $scope.types = ['drink', 'snack'];
    $scope.quantity = [0,1,2,3,4,5,6,7,8,9];
    $scope.people = ['Joel', 'Bob', 'Howdy', 'Bill'];

    $scope.addItem = angular.bind(items, items.add);
    $scope.removeItem = angular.bind(items, items.remove);

    $scope.$watch('items', function() {
      items.save();
    }, true);
  });
