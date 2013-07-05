'use strict';

var defaultItems = [
  {'type': 'drink', 'name': 'Pepsi', 'quantity': 1, 'who': 'Joel', 'notes': 'Woaaah'},
  {'type': 'drink', 'name': 'Coke', 'quantity': 3, 'who': 'Bob'},
  {'type': 'snack', 'name': 'Chips & Salsa', 'quantity':  1, 'who': 'Howdy'}
];

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


var localStorageItems = angular.fromJson(localStorage.getItem('items'));

var ItemCollection = function() {
  this.modelType = Item;
  var models = localStorageItems || defaultItems;
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

angular.module('BringTheSalsaApp')
  .service('Items', ItemCollection);
