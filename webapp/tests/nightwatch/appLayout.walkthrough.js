// tests/leaderboard.js
module.exports = {
  "ActiveRecord::Table Walkthrough" : function (client) {
    client
    .url("http://localhost:3000")
    .waitForElementVisible('body', 1000)

    // make sure main elements are present
    .verify.elementPresent("#navbarHeader")
    .verify.elementPresent("#navbarHeaderNav")
    .verify.elementPresent("#westPanel")
    .verify.elementPresent("#eastPanel")
    .verify.elementPresent("#mainPanel")
    .verify.elementPresent("#mainLayout")
    .verify.elementPresent("#navbarFooter")
    .verify.elementPresent("#navbarFooterNav")

    // header links are present
    .verify.elementPresent("#navbarBrandLink")
    .verify.elementPresent("#keybindingsLink")
    .verify.elementPresent("#promptLink")
    .verify.elementPresent("#confirmLink")
    .verify.elementPresent("#errorToggleLink")
    .verify.elementPresent("#eastPanelToggleLink")

    .verify.elementPresent("#sortableListPanel")
    .verify.elementPresent("#sortableListPanel #list")
    .verify.containsText("#sortableListPanel #list .item:nth-child(1)", "penecillin")
    .verify.containsText("#sortableListPanel #list .item:nth-child(2)", "tetracycline")
    .verify.containsText("#sortableListPanel #list .item:nth-child(3)", "epinephrine")
    .verify.containsText("#sortableListPanel #list .item:nth-child(4)", "vitamin d")
    .verify.containsText("#sortableListPanel #list .item:nth-child(5)", "peptol bismol")
    .verify.containsText("#sortableListPanel #list .item:nth-child(6)", "claritin")
    .verify.containsText("#sortableListPanel #list .item:nth-child(7)", "dihydrogen monoxide")
    .verify.containsText("#sortableListPanel #list .item:nth-child(8)", "asprin")

    .end();
  }
}
