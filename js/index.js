 // ID of the Google Spreadsheet
 var spreadsheetID = "";

 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";


 $.getJSON(url, function (data) {

 	var entry = data.feed.entry;

 	$(entry).each(function () {

 		console.log(this);

 		if (this[Object.keys(this)[8]].$t != '' && this[Object.keys(this)[8]].$t != this.gsx$sides.$t) {
 			$('.table').append('<tr><td>' + this.gsx$_cn6ca.$t + '</td><td> ' + this.gsx$name.$t + '</td><td>' + this[Object.keys(this)[8]].$t + '</td><td>' + this.gsx$sides.$t + '</td></tr>');
 		} else {
 			console.log('Skipped ' + this.gsx$name.$t + ' because no order');

 		}

 	});

 });
