/**
 * 
 */

$(document).ready(function() {
	var fromDate = $('#fromDate');
	var toDate = $('#toDate');
	var firstName = $('#firstName');
	var lastName = $('#lastName');
	var email = $('#email');
	var country = $('#country');
	var address = $('#address');
	var phone = $('#phone');
	var spinner = $('#spinner');
	var counter = 0;
	
	//jQUERY UI ELEMENTS 'ACTIVATION'
	$( "#fromDate" ).datepicker();
	$( "#toDate" ).datepicker();
	$( ".draggable" ).draggable({ 
		revert: "invalid"
	});
	
	$("#droppable").droppable({
		drop: function( event, ui ) {
			counter++;
			console.log(counter);
		}
	});
	$( "#spinner" ).spinner();
	$('button').button();


	$('#submit').on('click', function() {	
		notEmptyInput(fromDate);
		notEmptyInput(toDate);
		notEmptyInput(firstName);
		notEmptyInput(lastName);
		notEmptyInput(email);
		notEmptyInput(country);
		notEmptyInput(address);
		notEmptyInput(phone);
		
		onlyNumbers(phone);
		onlyLetters(firstName);
		onlyLetters(lastName);
		onlyLetters(country);
		
		checkDays();
		
		checkGuestsCount(spinner);
		
		checkDestinationsCount(counter);
		
		if(errors.length != 0) {
			alert(errors.join('\n'));
			errors = [];
			return;
		} else {
			$( "#modal" ).dialog({
				  modal: true,
				  autoOpen: true,
				  height: 400,
				  width: 800,
				  position: top
			});
			$("#modal-text").text("		Dear " + firstName.val() + " " + lastName.val() + "	, your reservation is complete! Our driver will pick you up at 06:00 on the " + fromDate.val() + " and take you to your private plane. If you have any questions, please contact us : (+349)-123-456-789! Have a good day!");
		}
		
	});
});