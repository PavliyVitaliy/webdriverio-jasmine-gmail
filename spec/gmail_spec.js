var path = require('path');
var settings = require('./helpers/settings'),
    GmailPage = require('../page/gmail.page'),
    mail = settings.mail;

var today = new Date;

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
        browser.pause(2000);
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
