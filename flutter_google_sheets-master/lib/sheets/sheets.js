function doGet(request) {

  var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1M2o3y7x3Ni_5pakIeiwbfOsxs1spO3BDB0aNUmAWan4/edit#gid=0");
  var result = {"status":"SUCCESS"};

  try{
    var name = request.parameter.name;
    var email = request.parameter.email;
    var totalMarks = request.parameter.totalMarks;

    var rowData = sheet.appendRow([name,email,totalMarks]);
  }
  catch(exc){
    result ={"status":"Failed","message": exc};
  }

  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);

  
}
