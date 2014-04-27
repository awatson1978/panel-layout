UI.body.items = Items.find({}, { sort: { rank: 1 } });


UI.body.rendered = function () {
  $(this.find('#list')).sortable({ // uses the 'sortable' interaction from jquery ui
    stop: function (event, ui) { // fired when an item is dropped
      var el = ui.item.get(0), before = ui.item.prev().get(0), after = ui.item.next().get(0);

      var newRank;
      if (!before) { // moving to the top of the list
        newRank = SimpleRationalRanks.beforeFirst(UI.getElementData(after).rank);

      } else if (!after) { // moving to the bottom of the list
        newRank = SimpleRationalRanks.afterLast(UI.getElementData(before).rank);

      } else {
        newRank = SimpleRationalRanks.between(
          UI.getElementData(before).rank,
          UI.getElementData(after).rank);
      }
      Items.update(UI.getElementData(el)._id, {$set: {rank: newRank}});
    }
  });


};


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
