let labels = //Add Output From https://developers.google.com/gmail/api/reference/rest/v1/users.labels/list?apix_params=%7B%22userId%22%3A%22me%22%7D here, erasing the first "{" and last "}" from the output (so should start and end with "[]")


function addLabelsToSheet() {
  var spreadsheetId = 'ID'; //Replace "ID" with the ID of the spreadsheet you want to map to
  var sheetName = "Master Labels Roster";
  let data = [];
 
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
 
  for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    var labelName = label.name;
    var labelID = label.id;
    data.push([labelName, labelID])
    Logger.log(labelName+" "+labelID);
  }


    if (data.length > 0) {
    var row = sheet.getLastRow() + 1;
    var column = 1;
    var numRows = data.length;
    var numColumns = data[0].length;
    sheet.getRange(row, column, numRows, numColumns).setValues(data);
    Logger.log(numRows + " Label names and IDs mapped to the spreadsheet.");
  } else {
    Logger.log("No labels found");
  }
}
