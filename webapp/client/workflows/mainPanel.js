Template.mainPanel.helpers({
  items: function(){
    return Items.find({}, { sort: { rank: 1 } });
}
});

Template.mainPanel.rendered = function () {
  $(this.find('#list')).sortable({ // uses the 'sortable' interaction from jquery ui
    stop: function (event, ui) { // fired when an item is dropped
      var el = ui.item.get(0), before = ui.item.prev().get(0), after = ui.item.next().get(0);

      var newRank;
      if (!before) { // moving to the top of the list
        newRank = SimpleRationalRanks.beforeFirst(UI.getData(after).rank);

      } else if (!after) { // moving to the bottom of the list
        newRank = SimpleRationalRanks.afterLast(UI.getData(before).rank);

      } else {
        newRank = SimpleRationalRanks.between(
          UI.getData(before).rank,
          UI.getData(after).rank);
      }
      Items.update(UI.getData(el)._id, {$set: {rank: newRank}});
    }
  });
};

