Session.set("resize", null);
Meteor.startup(function () {
  $(window).resize(function(evt) {
    Session.set("resize", new Date());
  });
});

UI.body.resized = function(){

  $('#westPanel').sidebar();
  $('#eastPanel')
    .sidebar({overlay: false});

  $('#errorPanel').sidebar();
  $('#contextPanel').sidebar();

  return Session.get('resize');
};
UI.body.getErrorMessage = function(){
  return "Error Message!";
};


//----------------------------------------------
