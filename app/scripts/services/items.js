'use strict';

var defaultItems = [
  {'type': 'drink', 'what': 'Pepsi', 'quantity': 1, 'who': 'Joel', 'notes': 'Woaaah'},
  {'type': 'drink', 'what': 'Coke', 'quantity': 3, 'who': 'Bob'},
  {'type': 'snack', 'what': 'Chips & Salsa', 'quantity':  1, 'who': 'Howdy'}
];

var localStorageItems = angular.fromJson(localStorage.getItem('items'));

var ItemCollection = function() {
  this.models = localStorageItems.length ? localStorageItems : defaultItems;
};

ItemCollection.prototype.add = function(model) {
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

ItemCollection.prototype.columns = ['What', 'Type', 'Quantity', 'Who', 'Notes'];

angular.module('BringTheSalsaApp')
  .service('Items', ItemCollection);
