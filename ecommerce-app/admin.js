
var admin = require("firebase-admin");

var serviceAccount = require("./ecommerceapp-e526f-firebase-adminsdk-ebkzf-efe2dd45f1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerceapp-e526f.firebaseio.com"
});
