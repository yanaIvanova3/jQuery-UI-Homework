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
	var chosenDestinations = $(".dropped");
	
	//jQUERY UI ELEMENTS 'ACTIVATION'
	$( "#fromDate" ).datepicker();
	$( "#toDate" ).datepicker();
	$( ".draggable" ).draggable({ 
		revert: "invalid",
		drop: function (event, ui) {
			$(event.target).addClass('dropped');
		}
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
		notEmptyInput(spinner);
		
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
			$("#modal-text").text("		Dear " + firstName.val() + " " + lastName.val() + "	, your reservation is complete! We are expecting you at 06:00AM at '13-th Square' N85 on the " + fromDate.val() + ". Please be accurate! If you have any questions, please contact us : (+349)-123-456-789! Have a good day!");
		}
		
	});
});