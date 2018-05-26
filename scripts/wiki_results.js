// script page
// https://www.mediawiki.org/wiki/API:Main_page.
// API Sandbox: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm


// Random Page Button
$("#rPage").on("click", function () {
  if ($("sBox").keypress()==13){
    $("search").click();
  }
    location.href="https://en.wikipedia.org/wiki/Special:Random";
});

document.getElementById('search').addEventListener('click', function(){
 var sText=document.getElementById('sBox').value

// var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='"+ sText+"'";

var url="https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='"+sText+"'";


// Create a request variable and assign a new XMLHttpRequest object to it.
// XMLHttpRequests allow you to retrieve data from a server without
// needing to refresh the page. They're used heavily in Ajax programming.
// Despite the name, it's used for more than just XML
var xhr = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
// Providing 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true);


//xhr.setRequestHeader("Origin", "http://en.wikipedia.org");
//xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//xhr.setRequestHeader("Accept", "application/json; charset=UTF-8");



// Once request has loaded...
xhr.onload = function() {

    // Parse the request into JSON
    var data = JSON.parse(this.response);

    // Log the data object
  //console.log("Data object:"+data);

    // Log the page objects
 // console.log("Query:"+data.query.pages);

    // Loop through the data object
    // Pulling out the titles of each page
    
  for (var i in data.query.pages) {
    var title =data.query.pages[i].title
    var link="https://en.wikipedia.org/wiki/"+title;
    var tag="<a href="+link+">"+title+"</a>";
  $(".container-fluid").append("<li>");
  $(".container-fluid").append(tag);
  $(".container-fluid").append("</li>");
    
 }
}

// Send request to the server
xhr.send();

});