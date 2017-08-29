var path = require('path');
var settings = require('./helpers/settings'),
    GmailPage = require('../page/gmail.page'),
    LoginPage = require('../page/login.page'),
    mail = settings.USER_NAME,
    password = settings.PASSWORD;



var today = new Date;

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

describe('Gmail', function () {

    beforeEach(function() {
        GmailPage.open('/mail/#inbox');
    });

    it('To create a new email, attach the file and send', function () {
        var theme = "new message " + today.getMilliseconds(),
            text = "Checking new posts",
            file = 'Checking_new_posts_file.txt',
            toUpload = path.join(__dirname, 'download_files', file);

        GmailPage.createMessageButton.click();
        GmailPage.formNewMassage.waitForExist();
        GmailPage.addresseeNewMassage.click();
        GmailPage.addresseeNewMassage.setValue(mail);
        GmailPage.themeNewMassage.setValue(theme);
        GmailPage.textNewMassage.setValue(text);
        GmailPage.attachFileNewMassage.click();
        GmailPage.downloadFile.chooseFile(toUpload);
        GmailPage.statusSavedNewMassage.waitForExist();
        GmailPage.sendNewMassageButton.click();
        expect(GmailPage.formNewMassage.isVisible()).toBe(false);
        GmailPage.incomingLink.waitForExist();
        GmailPage.incomingLink.click();
        GmailPage.firstIncomingMassage.waitForExist();
        expect(GmailPage.firstIncomingMassage.getText()).toContain(theme);
        GmailPage.firstIncomingMassage.click();
        GmailPage.textIncomingMassage.waitForExist();
        expect(GmailPage.textIncomingMassage.getText()).toEqual(text);
        expect(GmailPage.downloadedFile.getAttribute('download_url')).toMatch(file);
        GmailPage.yetImg.click();
        GmailPage.yetDeleteIt.click();
        expect(GmailPage.allIncomingMassage.getText()).not.toContain(theme);
    });
});
