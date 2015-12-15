Template.stylecss.helpers({
  'navbarcolor': function() {
    if (Meteor.settings.public.navbarcolor) {
      return Meteor.settings.public.navbarcolor;
    } else {
      return '#18bc9c';
    }
  },
  'navbarbordercolor': function() {
    if (Meteor.settings.public.navbarbordercolor) {
      return Meteor.settings.public.navbarbordercolor;
    } else {
      return '#128f76';
    }
  }
});