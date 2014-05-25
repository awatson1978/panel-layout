Template.navbarHeader.events({
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


Template.navbarFooter.events({
  'click #westPanelToggle':function(){
    // alert('west');
    //$('body').addClass('pushed');
    if($('body').hasClass('leftSidebar')){
      $('body').removeClass('leftSidebar');
      $('#westPanel').removeClass('active');
    }else{
      $('body').addClass('leftSidebar');
      $('#westPanel').addClass('active');
    }
  },
  'click #eastPanelToggle':function(){
    // alert('east');
    //$('body').addClass('pushed');
    //$('body').addClass('rightSidebar');
    if($('body').hasClass('rightSidebar')){
      $('body').removeClass('rightSidebar');
      $('#eastPanel').removeClass('active');
    }else{
      $('body').addClass('rightSidebar');
      $('#eastPanel').addClass('active');
    }

  }

});
