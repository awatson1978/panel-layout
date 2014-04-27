Template.navbarHeaderNav.events({
  'click #navbarBrandLink':function(){
    $('#westPanel').sidebar('toggle');
  },
  'click #keybindingsLink':function(){
    $('#keybindingsModal').modal("show");
  },
  'click #promptLink':function(){
    $('#promptModal').modal("show");
  },
  'click #confirmLink':function(){
    $('#confirmModal').modal("show");
  },
  'click #errorToggleLink':function(){
    $('#errorPanel').sidebar('toggle');
  },
  'click #eastPanelToggleLink':function(){
    $('#eastPanel').sidebar('toggle');
  }

});


Template.navbarFooterNav.events({
});
