var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

var day = "01"
var month = "January"
var year = "0001"


if (dd < 10) {
	dd = '0' + dd
}

if (mm < 10) {
	mm = '0' + dd
}

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
