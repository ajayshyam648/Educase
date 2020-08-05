// Info: Boilerplate library. Contains Functions for Outgoing HTTP(s) requests (For browsers only and not for NodeJS)
// TODO: multipart requests
'use strict';


///////////////////////////Public Functions START//////////////////////////////
const HttpBrowser = module.exports = { // Public functions accessible by other modules


	/********************************************************************
	Get JSON-Data from remote server using http(s) protocal.

  @param {reference} jquery_instance - Request Jquery Instance object reference
  @param {Function} cb - Callback function to be invoked once async execution of this function is finished

	@param {String} url - Full URL without protocal
	@param {String} method - ENUM-String for request method (GET | POST | .. )
	@param {Map} params - (Optional) Params to be sent with this request
	@param {String} request_content_type - (Optional) Request Body data type. Default: x-www-form-urlencoded ('json' | 'x-www-form-urlencoded' | 'multipart')

  @return - Thru Callback

  @callback(error, response_status,  response_data) - Request Callback
	* @callback {Integer} response_status - HTTP Response code from server
	* @callback {Map} response_headers - Return headers from response in Key-value. All keys are converted into lower-case.
	* @callback {ArrayBuffer | String | Object | Blob | Document | Stream} response_data - Return data as per response type.
	*********************************************************************/
	fetch: function(jquery_instance, cb, url, method, params, request_content_type){

    // Fetch JSON data from URL
    jquery_instance.ajax(
      {
        url: url,
        type: method,
        data: params,
        dataType: request_content_type,
        crossDomain: true,
				xhrFields: {
		      withCredentials: (request_content_type) ? false : true,
		    },
				contentType:"application/x-www-form-urlencoded",
        success: function(
          data, // Response data
          text_status, // Returns a DOMString containing the response string returned by the HTTP server
          xhr // XHR response object
        ){
          cb(
            null, // No error
            xhr.status,
						xhr.getAllResponseHeaders(),
            (data) ? data : null // Null as data in case of no response-body);
          )
        },
        error: function(
          xhr, // XHR response object
          text_status, // Returns a DOMString containing the response string returned by the HTTP server
          //  Possible values for the second argument (besides null) are "timeout", "error", "abort", and "parsererror".
          error // When an HTTP error occurs, error receives the textual portion of the HTTP status,
        ){

					if(xhr.status===0){
						return cb(true);
					}

          cb(
            null, // No error
            xhr.status,
						xhr.getAllResponseHeaders(),
            null // Null as data in case of no response-body);
          )
        }

      });

	},

};///////////////////////////Public Functions END//////////////////////////////



//////////////////////////Private Functions START//////////////////////////////
var _HttpBrowser = { // Private functions accessible within this modules only


};
//////////////////////////Private Functions END//////////////////////////////
