// script page
// https://www.mediawiki.org/wiki/API:Main_page.
// API Sandbox: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm


// Random Page Button
$("#rPage").on("click", function () {
    location.href = "https://en.wikipedia.org/wiki/Special:Random";
});