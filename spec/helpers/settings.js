var LoginPage = require('../../page/login.page'),
    GmailPage = require('../../page/gmail.page');

var mail = "***",
    password = "***";

beforeAll(function () {
    LoginPage.open();
    LoginPage.username.waitForExist();
    LoginPage.username.setValue(mail);
    LoginPage.submitLog();
    LoginPage.password.waitForExist();
    LoginPage.password.setValue(password);
    LoginPage.submitPass();
    GmailPage.talkRoster.waitForExist();
    expect(GmailPage.title()).toMatch(mail);
});

exports.mail = mail;