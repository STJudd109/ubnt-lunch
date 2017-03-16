 // ID of the Google Spreadsheet
 var spreadsheetID = "154wC5v1r_wuz_sKXvY5RVI_TXRf46rUYryggNU6_j6s";

 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";


 $.getJSON(url, function(data) {

 	var entry = data.feed.entry;

 	$(entry).each(function() {
		
 		if (this[Object.keys(this)[8]].$t != '') {
 			$('.table').append('<tr><td>' + this.gsx$number.$t+ '</td><td> ' + this.gsx$name.$t + '</td><td>' + this[Object.keys(this)[8]].$t + '</td><td>'+ this.gsx$sides.$t +'</td></tr>');
 		} else {
			console.log('Skipped ' + this.gsx$name.$t + ' because no order');

 		}

 	});

 });