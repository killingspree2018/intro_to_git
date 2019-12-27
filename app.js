var express = require("express"); 
var app = express();
var sounds={
	"dog": "Woof Woof!",
	"pig": "Oink!",
	"cow": "Moo!"
}	
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("home");
});
app.get("/speak", function(req,res){
	res.render("speak");
});
app.listen( 3000, process.env.IP, function(){
	console.log("Server has Started");
});