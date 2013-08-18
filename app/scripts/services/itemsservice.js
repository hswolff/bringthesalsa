'use strict';

angular.module('BringTheSalsaApp')
  .service('Items', ['angularFireCollection', function(angularFireCollection) {
    var defaultItems = [
      {'type': 'drink', 'what': 'Pepsi', 'quantity': 1, 'who': 'Joel', 'notes': 'Woaaah'},
      {'type': 'drink', 'what': 'Coke', 'quantity': 3, 'who': 'Bob'},
      {'type': 'snack', 'what': 'Chips & Salsa', 'quantity':  1, 'who': 'Howdy'}
    ];
    var url = 'https://bringthesalsa.firebaseio.com/';
    var collectionChildPath = 'party/';

    this.firebase = new Firebase(url);

    this.models = defaultItems;
    var currentFilter = 'all';
    angular.forEach(this.models, function(m) {
      m.currentlyEditing = false;
    });
    this.filter = angular.bind(this, this.filter);

    this.createCollection = function() {
      this.firebase = this.firebase.root().child(collectionChildPath).push();
      this.models = angularFireCollection(this.firebase);
      return this.firebase.name();
    };

    this.setCollection = function(childLocation) {
      this.firebase = this.firebase.root().child(collectionChildPath + childLocation);
      this.models = angularFireCollection(this.firebase);
    };

    this.add = function(model) {
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

    this.remove = function(index) {
      if (this.models.remove) {
        this.models.remove(this.models[index]);
      } else {
        this.models.splice(index, 1);
      }
    };

    this.toJson = function() {
      return angular.toJson(this.models);
    };

    this.save = function(item) {
      if (this.models.update) {
        this.models.update(item);
      }
    };

    this.reset = function() {
      this.models = defaultItems;
      this.setFilter('all');
    };

    this.keys = ['what', 'type', 'quantity', 'who', 'notes'];

    this.types = function() {
      var types = ['all'];
      angular.forEach(this.models, function(m) {
        if (types.indexOf(m.type) < 0) {
          types.push(m.type);
        }
      });
      return types;
    };

    this.isCurrentFilter = function(filter) {
      return currentFilter === filter;
    };

    this.setFilter = function(filter) {
      currentFilter = filter;
    };

    this.filter = function(item) {
      return currentFilter === 'all' || item.type === currentFilter;
    };
  }]);
