/**
 * 
 */
var errors = [];


//CHECK IF THERE ARE NO EMPTY IMPUTS
function notEmptyInput(param) {
	var paramVal = param.val();
	if (!paramVal){
		errors.push($(param).attr('placeholder') + ' field is required!');
		param.css('border', '1px groove red');
		return false;
	} else {
		return true;
	}
};


//CHECK IF INPUTS ONLY CONTAIN NUMBERS
function onlyNumbers(param) {
	var paramVal = param.val();
	if (!(paramVal.match(/^\d+$/))) {
		errors.push($(param).attr('placeholder') + ' field should only contain numbers!');
		param.css('border', '1px groove red');
		return false;
	} else {
		return true;
	}
};


//CHECK IF INPUTS ONLY CONTAIN LETTERS
function onlyLetters(param) {
	var paramVal = param.val();
	if (!(paramVal.match(/^[a-zA-Z]*$/))) {
		errors.push($(param).attr('placeholder') + ' field should only contain letters!');
		param.css('border', '1px groove red');
		return false;
	} else {
		return true;
	}
};


//CHECK DATES FROM DATEPICKERS
function checkDays() {
	var todaysDate = new Date();
	var fromDate = new Date($('#fromDate').datepicker('getDate'));
	var toDate = new Date($('#toDate').datepicker('getDate'));
	var msDiff = toDate - fromDate;
	var daysDiff = msDiff / 1000 / 60 / 60 / 24;
	
	if(fromDate < todaysDate || toDate < todaysDate || toDate < fromDate) {
		errors.push('You have picked invalid dates!');
		$('.datepicker').css('border', '1px groove red');
		return false;
	}
	
	if (daysDiff != 3) {
		errors.push('You should select exactly 3 days for your vacation');
		$('.datepicker').css('border', '1px groove red');
		return false;
	} else {
		return true;
	}
}


//CHECK GUESTS COUNT
function checkGuestsCount(param) {
	var paramVal = param.val();
	
	if(paramVal <= 0) {
		errors.push('You should enter valid guests count (at least 1)');
		param.css('border', '1px groove red');
		return false;
	}
		return true;
	
}



//PICKED DESTINATIONS COUNT
function checkDestinationsCount(counter) {
		if(counter != 3) {
			errors.push('You should drag 3 destinations!');
			return false;
		} else {
			return true;
		}
}



