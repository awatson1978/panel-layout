
//-------------------------------------------------------

Template.inPageAlert.helpers({
  inPageAlertType: function(){
    return "success";
  },
  inPageAlertText: function(){
    return Session.get('inPageAlertText');
  },
  inPageAlertVisibility: function(){
    if(Session.get('inPageAlertType')){
      return 'visible';
    }else{
      return "hidden";
    }
  }
});

Session.setDefault('inPageAlertType', false);
Session.setDefault('inPageAlertText', "Success!");

Template.inPageAlert.events({
  'click #inPageAlert':function(){
    Session.set('inPageAlertType', false);
  }
});
