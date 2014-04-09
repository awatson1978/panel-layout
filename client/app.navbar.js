Template.navbarHeaderNav.events({
  'click #navbarBrandLink':function(){
    $('#westPanel').sidebar('toggle');
  },
  'click #eastPanelToggleLink':function(){
    $('#eastPanel').sidebar('toggle');
  }
});


Template.navbarFooterNav.events({
  'click #fullScreenToggleLink':function(){
    $('#errorPanel').sidebar('toggle');
  }
});
