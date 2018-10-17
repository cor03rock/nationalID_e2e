'use strict';

var RegisterPage = require('./register.page.js');
var data 		 = require('./data.json')

describe('Test the registration of National Sport ID Parent Account', function() {

	it('Should be able to go to National Sports ID page', function() {
		
		RegisterPage.navigate();
	    expect(browser.driver.getTitle()).toEqual(data.forValidation.pageTitle);
	    browser.sleep(5000);

	});

	it('Should be able to fill up registration fields', function() {
		
		RegisterPage.inputUserRegister(page.user.firstName, page.user.lastName );
		browser.sleep(3000);
	});

	it('Should submit new player', function(){

		RegisterPage.submitNewPlayer();
		RegisterPage.isRegisterButtonVisible();
	});

	it('Should be able to fill up Parents Form', function () {

		RegisterPage.inputParentOfPlayer();
		browser.sleep(5000);

	});

});