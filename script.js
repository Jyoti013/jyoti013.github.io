// script.js
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById('1iwSgvgob4uoZpw5NwiQng75zV8GP5Bu7YC8YIFUU2vQ').getActiveSheet();
    var params = JSON.parse(e.postData.contents);

    sheet.appendRow([params.name, params.email, params.message, new Date()]);

    return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.message }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}


