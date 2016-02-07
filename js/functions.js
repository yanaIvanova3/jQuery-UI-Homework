/**
 * 
 */
var errors = [];

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

function checkDays() {
	var fromDate = new Date($('#fromDate').datepicker('getDate'));
	var toDate = new Date($('#toDate').datepicker('getDate'));
	var msDiff = toDate - fromDate;
	var daysDiff = msDiff / 1000 / 60 / 60 / 24;
	
	if (daysDiff != 3) {
		errors.push('You should select exactly 3 days for your vacation');
		$('.datepicker').css('border', '1px groove red');
	}
}