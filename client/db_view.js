var filterCollections;

filterCollections = function(query, collections) {
  if (query) {
    return _.filter(collections, function(c) {
      return c.name.indexOf(query) > -1;
    });
  } else {
    return collections;
  }
};

Template._houston_db_view.helpers({
  collections: function() {
    return this.collections;
  },
  filtered_collections: function() {
    return filterCollections(Houston._session('search'), this.collections.find().fetch());
  },
  'slogan': function() {
    if (Meteor.settings.public.slogan) {
      return Meteor.settings.public.slogan;
    } else {
      return 'Houston';
    }
  },
  'slogansmall': function() {
    if (Meteor.settings.public.slogansmall) {
      return Meteor.settings.public.slogansmall;
    } else {
      return 'Meteor admin';
    }
  }
});

Template._houston_db_view.events({
  "click #refresh": function() {
    return window.location.reload();
  },
  'keyup .houston-column-filter': function(e) {
    return Houston._session('search', $("#search").val());
  }
});

Template._houston_db_view.rendered = function() {
  $("#search").val("");
  return $(window).unbind('scroll');
};