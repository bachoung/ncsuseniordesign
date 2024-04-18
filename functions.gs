function doGet() {
var htmlOutput = HtmlService.createHtmlOutputFromFile('login')
  .setTitle('Profile Registration')
  .setWidth(300)
  .setHeight(500);
return htmlOutput;
}

function processForm(formData) {
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var values = [
  formData.firstname,
  formData.lastname,
  formData.email,
  formData.password,
];
sheet.appendRow(values);
}
