/**
 * DCI Score Parser
 *
 * @author Chris Opperwall <copperwa@calpoly.edu>
 */

var cheerio = require('cheerio'),
    request = require('request');

var show_location = 'whitewater';
var year = '2014';
var domain = 'http://dci.org/scores/';

function findEventId(err, resp, html) {
   if (err) return console.error(err);
   var $ = cheerio.load(html);

   $('select').children().map(function(i, show) {
      var text = $(show).text();
      var eventid = $(show).attr('value');
      // If option text matches contains show_location, 
      if (text.toLowerCase().indexOf(show_location) != -1)
         scrapeHTML(eventid);
   });
}

// Grab HTML from url using |event| and |year| values, then scrape score data
function scrapeHTML(event) {
   
}

request(domain, findEventId);
