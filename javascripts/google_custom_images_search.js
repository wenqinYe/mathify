/**
  Wrapper code for the google custom image search api.
  The wrapper performs a GET that request is sent to the google api
  endpoint at https://www.googleapis.com/customsearch/v1 with our api-key and
  text query.

  The GET request will return a JSON response with the image results for the
  text query which is then parsed and returned.
*/

// const image_serarch_api_endpoint = "https://www.googleapis.com/customsearch/v1"
//
// /**
// * @constructor
// * @param {string} api_key - The api key for accessing the api endpoint
// * @param {string} cx - Another custom search key
// */
// class JWGoogleImageSearch {
//   constructor(api_key, cx){
//     this.api_key = api_key;
//     this.cx = cx;
//   }
//
//   /**
//   * Provides a list of images for a text query (example: a search for carbon
//   * carbon atoms will yield images of carbon atoms)
//   * @constructor
//   * @param {string} text_query - A text query
//   */
//   image_search(text_query, callback){
//     var sub_callback = function(response){
//       var result = JSON.parse(response);
//       var image_results = result["items"];
//       callback(image_results)
//     }
//     this.request_async({q: text_query,
//                         num: "3",
//                         start: "1",
//                         imgSize: "medium",
//                         searchType: "image"},
//                         sub_callback);
//
//
//   }
//
//   create_query(params) {
//     var query = "?";
//     /* Possible parameters
//     * q: query
//     * num: number of results
//     * start: where results should start (between 1 and 1001)
//     * imgSize: size of the image (example: "medium")
//     * searchType: image search type (example: "image")
//     * fileType: the file type (example: jpeg)
//     * key: google api key
//     * cx: Custom search engine key
//     */
//     for (var parameter in params) {
//       query += "&"+parameter+"="+params[parameter];
//     }
//     query += "&key="+this.api_key+"&cx="+this.cx;
//     query = image_serarch_api_endpoint + query;
//     return query;
//   }
//
//   /**
//   * Makes a JSON request to the google custom search api
//   *
//   */
//   request_async(params, callback){
//     var query = this.create_query(params)
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function(){
//       if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
//         callback(xmlHttp.responseText);
//       }
//     }
//     xmlHttp.open("GET", query, true);
//     xmlHttp.send(null);
//   }
// }
//
//
// function test(){
//   var api_key = "AIzaSyBf3M2egiEky-IJZGXumT0WVCcceaikD9Y";
//   var cx = "015679528378639472790:d5-533hcczs";
//   var google = new GoogleImageSearch(api_key, cx);
//   google.image_search("carbon atoms", function(results){
//     console.log(results);
//   });
// }
