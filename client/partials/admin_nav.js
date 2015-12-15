Template._houston_navbar.events({
  'click #houston-logout': function(e) {
    e.preventDefault();
    return Meteor.logout();
  }
});

Template._houston_navbar.helpers({
  'bugreport_url': function() {
    var message;
    message = encodeURIComponent("To make sure we can help you quickly, please include the version of Houston\nyou are using, steps to replicate the issue, a description of what you were\nexpecting and a screenshot if relevant.\n\nThanks!");
    return "https://github.com/gterrono/houston/issues/new?body=" + message;
  },
  'menu_items': function() {
    return Houston.menu._get_menu_items();
  },
  'isActive': function() {
    var ref;
    if (((ref = Router.current()) != null ? ref.path : void 0) === this.path) {
      return 'active';
    }
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

Template._houston_sidenav.helpers({
  collections: function() {
    return Houston._collections.collections.find().fetch();
  },
  is_active: function(name) {
    return name === Houston._session('collection_name');
  }
});