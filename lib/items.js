Items = new Meteor.Collection("items");

if (Meteor.isServer) {
  if (Items.find().count() === 0) {
    _.each(
      ["penecillin", "vitamin d", "tetracycline", "epinephrine", "peptol bismol", "claritin", "dihydrogen monoxide", "asprin"],
      function (text, index) { Items.insert({text: text, rank: index}); });
  }
}
