// gmail.page.js

var Page = require('./page');

var GmailPage = Object.create(Page, {

    /**
     * define elements
     */

    createMessageButton:    { get: function () { return browser.element('.aic div div'); } },
    talkRoster:             { get: function () { return browser.element('#talk_roster'); } },
    formNewMassage:         { get: function () { return browser.element('div.AD'); } },
    addresseeNewMassage:    { get: function () { return browser.element('[name="to"]'); } },
    themeNewMassage:        { get: function () { return browser.element('[name="subjectbox"]'); } },
    textNewMassage:         { get: function () { return browser.element('[role="textbox"]'); } },
    attachFileNewMassage:   { get: function () { return browser.element('[command="Files"]'); } },
    downloadFile:           { get: function () { return browser.element('[type="file"]'); } },
    statusSavedNewMassage:  { get: function () { return browser.element('.oG.aOy'); } },
    sendNewMassageButton:   { get: function () { return browser.element('.T-I.J-J5-Ji.aoO.T-I-atl.L3'); } },
    incomingLink:           { get: function () { return browser.element('.TK>div:first-child .nU.n1'); } },
    firstIncomingMassage:   { get: function () { return browser.element('table.F.cf.zt tr:first-child'); } },
    textIncomingMassage:    { get: function () { return browser.element('div.ii.gt.adP.adO [dir="ltr"]'); } },
    downloadedFile:         { get: function () { return browser.element('.aZo.N5jrZb'); } },
    yetImg:                 { get: function () { return browser.element('.hA.T-I-J3'); } },
    yetDeleteIt:            { get: function () { return browser.element('#tm'); } },
    allIncomingMassage:     { get: function () { return browser.element('.UI table.F.cf.zt'); } },

    /**
     * define or overwrite page methods
     */

    open: { value: function() {
        Page.open.call(this, 'gmail');
    } },

    title: { value: function () {
        return browser.getTitle();
    } },

    createMessage: { value: function () {
        this.createMessageButton.click();
    } }
});

module.exports = GmailPage;