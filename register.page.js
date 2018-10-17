'use strict';

var data = require('./data.json');

function navigate () {

	browser.driver.get('https://www.nationalsportsid.com/register?type=2&embed=0');
}

function inputUserRegister ( firstname, lastname ) {

		browser.driver.findElement(by.id( 'firstName' )).sendKeys( firstname );
		browser.driver.findElement(by.id( 'lastName' )).sendKeys( lastname );
		browser.driver.findElement(by.id( 'birthDate' )).click();
		browser.driver.findElement(by.css(' [class="year focused"] ')).click();
		browser.driver.findElement(by.css(' [class="month focused"] ')).click();
		browser.driver.findElement(by.xpath( '/html/body/div[7]/div[1]/table/tbody/tr[2]/td[5]' )).click();
		browser.driver.findElement(by.id( 'submit-child' )).click();
}

function submitNewPlayer () {

		browser.driver.findElement( by.id( 'new-player' )).click();
		browser.driver.findElement( by.id( 'next-step' )).click();
}

function isRegisterButtonVisible (){

		browser.driver.findElement( by.id( 'register' )).isDisplayed().then( function ( value ) {
			expect( value ).toEqual( data.forValidation.isRegisterButtonDisplayed );
		})

}

function inputParentOfPlayer () {

	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_firstName' )).sendKeys( data.parent.firstName );
	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_lastName' )).sendKeys( data.parent.firstName );
	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_address_addressLine' )).sendKeys( data.parent.address );
	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_address_city' )).sendKeys( data.parent.townCity );
	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_address_state' )).sendKeys( data.parent.state );
	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_address_zipCode' )).sendKeys( data.parent.zipCode );
	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_email' )).sendKeys( data.parent.email );
	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_plainPassword_first' )).sendKeys( data.parent.password1 );
	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_plainPassword_second' )).sendKeys( data.parent.password2 );
	browser.driver.findElement( by.id( 'hoopalert_user_parent_registration_phoneNumbers_0_phoneNumber' )).sendKeys( data.parent.mobile );
	browser.sleep(3000);
	browser.driver.findElement( by.css( '[for="hoopalert_user_parent_registration_terms"]' )).click();
	browser.sleep(3000);
	browser.driver.findElement(by.id( 'register' )).click();


}

module.exports = {
	'navigate' 					: navigate,
	'inputUserRegister' 		: inputUserRegister,
	'submitNewPlayer'			: submitNewPlayer,
	'isRegisterButtonVisible'   : isRegisterButtonVisible,
	'inputParentOfPlayer'		: inputParentOfPlayer
};