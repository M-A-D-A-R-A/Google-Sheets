# Google-Sheets
FLutter to google Sheets!!!

![image](https://user-images.githubusercontent.com/56160262/120899946-d7319900-c64f-11eb-91ab-ba0dba9a4e8b.png)


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
![image](https://user-images.githubusercontent.com/56160262/120899960-ec0e2c80-c64f-11eb-810e-8c34289f3713.png)


