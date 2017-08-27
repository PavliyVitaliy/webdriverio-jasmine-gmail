// login.page.js

var Page = require('./page');

var LoginPage = Object.create(Page, {

    /**
     * define elements
     */

    username:         { get: function () { return browser.element('#identifierId'); } },
    password:         { get: function () { return browser.element('[name="password"]'); } },
    submitButtonUser: { get: function () { return browser.element('#identifierNext span'); } },
    submitButtonPass: { get: function () { return browser.element('#passwordNext span'); } },
    form:             { get: function () { return browser.element('.RFjuSb.bxPAYd.k6Zj8d'); } },

    /**
     * define or overwrite page methods
     */

    open: { value: function() {
        Page.open.call(this, 'login');
    } },
    submitLog: { value: function() {
        this.submitButtonUser.click();
    } },
    submitPass: { value: function() {
        this.submitButtonPass.click();
    } }
});

module.exports = LoginPage;