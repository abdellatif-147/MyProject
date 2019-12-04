var express = require("express");
var app = express();
var session = require("express-session");
var uuid = require("uuid/v4");
var cors = require("cors");
var cookieparser = require("cookie-parser");
var createApis = require("./Apis/userApi");
var dbconnection = require("./dbconnection/dbconnection");
var path = require('path')

app.use(express.json())
app.use(express.static(__dirname + '/dist'));
app.use(
  session({
    genid: uuid,
    secret: "secret"
  })
);
app.use(cors({
credentials: true
}));

app.use(cookieparser());
dbconnection();
createApis(app);

function Authenticate(req, resp, next) {
  if (req.url === "/signup" || req.url === "/signin") {
next()
    
  } else {
    if (req.session.user && req.cookies["connect.sid"]) {

      next();
    } else {
      resp.json({ message: "authentication failed" });
      
    }
  }
}

app.use(Authenticate);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 4000, function(){
  console.log('Your node js server is running');
});