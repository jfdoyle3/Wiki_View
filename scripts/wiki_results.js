// script page
// https://www.mediawiki.org/wiki/API:Main_page.
// API Sandbox: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm


// Random Page Button
$("#rPage").on("click", function () {
 window.open("https://en.wikipedia.org/wiki/Special:Random");
});

document.getElementById('search').addEventListener('click', function(){
 var sText=document.getElementById('sBox').value
$("#results").empty();
// var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='"+ sText+"'";

var url="https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='"+sText+"'";

$.getJSON("https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles="+sText+"&rvprop=content&format=json&rvsection=0&rvparse=1&callback=?");


var xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.onload = function() {

    var data = JSON.parse(this.response);

   
  for (var i in data.query.pages) {
    var title =data.query.pages[i].title;
    var link="https://en.wikipedia.org/wiki/"+title;
    var tag="<a href="+link+">"+title+"</a>";
  $("#results").append("<div id='ss'>");
  $("#results").append(tag);
  $("#results").append("</div>");
    
 }
}

xhr.send();

});