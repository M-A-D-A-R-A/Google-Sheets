# Google-Sheets
FLutter to google Sheets!!!



## Sheet Implemation

```js
function doGet(request) {

  var sheet = SpreadsheetApp.openByUrl("<ENter Your Google Sheet Link>");
  var result = {"status":"SUCCESS"};

  try{
    var name = request.parameter.name;
    var email = request.parameter.email;
    var MobileNo =request.parameter.MobileNo;
   var feedBAck = request.parameter.feedBac

   var rowData = sheet.appendRow([name,email,MobileNo,feedBAck]);
  }
  catch(exc){
    result ={"status":"Failed","message": exc};
  }

  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);

  
}


```

# Save Data from Flutter App to Google Sheets

Save data from your flutter app to google sheets works for Android | IOS | WEB.

# UI

