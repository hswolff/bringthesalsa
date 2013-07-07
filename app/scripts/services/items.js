/* global Firebase */
'use strict';

var ItemCollection = function(angularFireCollection) {
  this.collectionChildPath = 'party/';
  var url = 'https://bringthesalsa.firebaseio.com/';
  this.firebase = new Firebase(url);
  this.angularFireCollection = angularFireCollection;

  this.models = this.defaultItems;
  this.types();
  this.currentFilter = 'all';
  angular.forEach(this.models, function(m) {
    m.currentlyEditing = false;
  });
  this.filter = angular.bind(this, this.filter);
};
ItemCollection.$inject = ['angularFireCollection'];

ItemCollection.prototype.createCollection = function() {
  this.firebase = this.firebase.root().child(this.collectionChildPath).push();
  this.models = this.angularFireCollection(this.firebase);
  return this.firebase.name();
};

ItemCollection.prototype.setCollection = function(childLocation) {
  this.firebase = this.firebase.root().child(this.collectionChildPath + childLocation);
  this.models = this.angularFireCollection(this.firebase);
};

ItemCollection.prototype.add = function(model) {
  function formatModel(model) {
    if (angular.isString(model)) {
      model = {'what': model};
    }
    // model.currentlyEditing = 'all';
    model.quantity = 1;
    model.who = 'Someone bring this!';
    return model;
  }
  if (this.models.add) {
    this.models.add(formatModel(model));
  } else {
    this.models.push(formatModel(model));
  }
  return model;
};

ItemCollection.prototype.remove = function(index) {
  if (this.models.remove) {
    this.models.remove(this.models[index]);
  } else {
    this.models.splice(index, 1);
  }
};

ItemCollection.prototype.toJson = function() {
  return angular.toJson(this.models);
};

ItemCollection.prototype.save = function(item) {
  if (this.models.update) {
    this.models.update(item);
  }
};

ItemCollection.prototype.reset = function() {
  this.models = this.defaultItems;
};

ItemCollection.prototype.keys = ['what', 'type', 'quantity', 'who', 'notes'];

ItemCollection.prototype.defaultItems = [
  {'type': 'drink', 'what': 'Pepsi', 'quantity': 1, 'who': 'Joel', 'notes': 'Woaaah'},
  {'type': 'drink', 'what': 'Coke', 'quantity': 3, 'who': 'Bob'},
  {'type': 'snack', 'what': 'Chips & Salsa', 'quantity':  1, 'who': 'Howdy'}
];

ItemCollection.prototype.types = function() {
  var types = ['all'];
  angular.forEach(this.models, function(m) {
    if (types.indexOf(m.type) < 0) {
      types.push(m.type);
    }
  });
  return types;
};

ItemCollection.prototype.isCurrentFilter = function(filter) {
  return this.currentFilter === filter;
};

ItemCollection.prototype.filter = function(item) {
  return this.currentFilter === 'all' || item.type === this.currentFilter;
};

angular.module('BringTheSalsaApp')
  .service('Items', ItemCollection);
