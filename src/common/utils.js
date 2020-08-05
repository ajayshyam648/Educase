// Info: Boilerplate library. Contains basic utility functions.
'use strict';


///////////////////////////Public Functions START//////////////////////////////
const Utils = module.exports = { // Public functions accessible by other modules

  /********************************************************************
  Copy of Util Functions from Node JS util lib
  Link: https://github.com/isaacs/core-util-is/blob/master/lib/util.js
  *********************************************************************/
  isNull: function(arg){
    return arg === null;
  },

  isNullOrUndefined: function(arg){
    return arg == null;
  },

  isUndefined: function(arg){
    return arg === void 0;
  },

  isBoolean: function(arg){
    return typeof arg === 'boolean';
  },

  isNumber: function(arg){
    return typeof arg === 'number';
  },

  isString: function(arg){
    return typeof arg === 'string';
  },


  /********************************************************************
  Advance type checks
  *********************************************************************/
  isObject: function(arg){
    return typeof arg === 'object' && !Utils.isNull(arg); // (null is also an object)
  },


  /********************************************************************
  Basic Util Functions
  *********************************************************************/
  isEmptyString: function(str){
    return str.length === 0;
  },

  isEmptyObject: function(obj){
    return Object.keys(obj).length === 0;
  },

  // Whether an array contains a string (return 'true' if does otherwise 'false')
  inArray: function(arr, element){
    return arr.indexOf(element) > -1;
  },


  /********************************************************************
  Custom Error

  @param {String | Integer | Object} err_code_or_obj - Error Code or First Param can be object also
  * @param {String | Integer} code - Error Code
  * @param {String} message - Error Message
  @param {String} message - Error Message

  @return - JSON Object
  *********************************************************************/
  error: function(err_code_or_obj, message){

    // Error code
    var code;

    // If object is sent, extract code and message
    if( Utils.isObject(err_code_or_obj) ){
      code = err_code_or_obj['code'];
      message = err_code_or_obj['message']
    }
    else{
      code = err_code_or_obj;
    }


    var err = Error(message);
    err.code = code;
    err.name = code.toString(); // Instead of showing 'Error' as title in stack trace, show 'Error Code'

    // Return Newly built Error
    return err;

  },


  /********************************************************************
  Null function - For optional callback functions

  None

  @return None
  *********************************************************************/
  nullFunc: function(){},


  /********************************************************************
  Return JSON object from flattened string

  @param {string} str - String to be converted into JSON

  @return - JSON Object
  *********************************************************************/
  stringToJSON: function(str){

    // Convert flattened-json string into JSON
    if( !Utils.isNull(str) ){ // Only if not null
      try{ str = JSON.parse(str); } // Convert string -> JSON
        catch(e){ str = null; } // Set as null if invalid json
    }

    return str;

  },


  /********************************************************************
  Return reversed String
  Note: Only works for ASCII strings and some Unicodes

  @param {string} str - String to be reversed

  @return - Reversed string
  *********************************************************************/
  stringReverse: function(str){

    return Array.from(str).reverse().join('');

  },


  /********************************************************************
  Return cleaned string with only characters from specific regular expresion
  Remove all the dangerous characters excluding those who satisfy RegExp

  @param {string} str - String to be sanatized/cleaned
  @param {string} regx - The regular expression

  @return - Sanatized string
  *********************************************************************/
  sanitizeUsingRegx: function(str, regx){

    // If null or undefined or zero-length, return value as-it-is
    if(Utils.isNullOrUndefined(str) || str.length == 0){
      return str;
    }


    // Return Clean String
    return str.replace(regx, ''); // Clean and return

  },


  /********************************************************************
  Return cleaned Integer. Convert String/Decimals to a whole-number.

  @param {Unknown} num - Number to be cleaned

  @return {Number} - Sanitized number. Rounded to 'Floor' in case of decimal.
  *********************************************************************/
  sanitizeInteger: function(num){

    // Convert to Integer
    var i = parseInt( Number(num) ); // Convert String/Decimal or any type to equivalent Integer

    // Check if NaN in case of Alphabates String passed as number
    if( isNaN(i) ){
      return null; // Return Null in case it's not a number
    }
    else{
      return i; // Return clean Integer
    }

  },


  /********************************************************************
  Return cleaned Boolean. Convert String/Number to true/false

  @param {Unknown} bool - Boolean to be cleaned

  @return {Boolean} - Sanitized boolean value
  *********************************************************************/
  sanitizeBoolean: function(bool){

    // Return
    return Boolean( Number(bool) ); // Return string -> number -> boolean

  },


  /********************************************************************
  Return unix timestamp in seconds for that day at 12:00 AM

  @param {Integer} [unix_timestamp] - Unix Timestamp, whose day is to be calculated

  @return {Integer} - Unix timestamp (Seconds)
  *********************************************************************/
  getUnixDateFromUnixTime: function(unix_timestamp){

    // Convert unix timestamp to date object
    var date = new Date(unix_timestamp * 1000);

    var dateAt00 = new Date(
      date.getUTCFullYear() + '-' +
      (date.getUTCMonth() + 1) + '-' + // Add '1', because Month index starts at 0 (Jan is 0 | Dec is 11)
      date.getUTCDate()
    ); // 'yyyy-mm-dd'


    // Return Unix Timestamp for that Day at 12:00 AM (in seconds)
    return Utils.getUnixTime(dateAt00);

  },


  /********************************************************************
  Return specific/current unix timestamp in seconds

  @param {string} [date] - (Optional) Date to be converted into unix timestamp. If not sent in param, then return current time

  @return {String} - Unix timestamp (Seconds)
  *********************************************************************/
  getUnixTime: function(date){

    // Return Unix Timestamp equivalant of specific date in seconds
    return Math.floor( Utils.getUnixTimeInMilliSeconds(date)/1000 ); // Convert Milli-Seconds to Seconds

  },


  /********************************************************************
  Return specific/current unix timestamp in Milli-Seconds

  @param {string} [date] - (Optional) Date to be converted into unix timestamp. If not sent in param, then return current time

  @return {String} - Unix timestamp (Milli-Seconds)
  *********************************************************************/
  getUnixTimeInMilliSeconds: function(date){

    // Check if custom date is sent
    if( !Utils.isNullOrUndefined(date) ){
      return( new Date(date) ); // Return Unix Timestamp equivalant of specific date in Milliseconds
    }
    else{
      return( new Date().getTime() ); // Return Unix Timestamp equivalant of current time in Milliseconds
    }

  },


  /********************************************************************
  Round a Decimal number to specified number of digits after decimal
  Ref: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
  Note: math.round() is more precise then Number.toFixed()

  @param {Number} num - Number to be rounded off
  @param {Number} digits_after_decimal - Number of digits after decimal

  @return {Number} - Rounded off number
  *********************************************************************/
  round: function(num, digits_after_decimal){

    // If null or undefined, return value as-it-is
    if(Utils.isNullOrUndefined(num)){
      return num;
    }

    // Calculate multiplier
    var multiplier = Number(`1e${digits_after_decimal}`); // 1e0 === 1, 1e1 === 10, 1e2 === 100

    // Return
    return Math.round(num * multiplier) / multiplier; // 123.456 = 123.45, 123.4 = 123.4

  },


  /********************************************************************
  Check if number is Integer (Whole Number)

  @param {Number} num - number to be checked

  @return {Boolean} - true if Integer (10.0 | 10)
  @return {Boolean} - false if Decimal number (10.7 | 0.7)
  *********************************************************************/
  isInteger: function(num){

    // Return
    return num % 1 == 0;

  },


  /********************************************************************
  Break string into array with a delimiter
  (Inbuilt skips all empty elements and trim whitespaces and convert to lowercase)

  @param {String} delimiter - The boundary string
  @param {String} str - The input string. Can be NULL or Empty

  @return {Boolean} - false if input sring is null or ''
  @return {String[]} - Newly converted array of strings
  *********************************************************************/
  stringToArray: function(delimiter, str){

    if( str.length > 0 ){ // If not empty string
      var arr = str.split(delimiter);        // Split into Array
      arr = arr.map( function(item){ return item.trim().toLowerCase() } );    // Convert to lowercase and Trim white spaces including \n \t \r
      arr = arr.filter( Boolean);            // Remove Empty element from array in case string is null/''/0/false/undefined. (If you split an empty string, you get back a one-element array with 0 as the key and an empty string for the value.)
    }
    else{
      return false; //Empty string
    }


    // Check if resultant array is empty, then return false
    if( arr.length > 0 ){
      return arr;
    }
    else{
      return false; // Empty array
    }

  },


  /********************************************************************
  Join 2 Arrays (or String) of 'key' and 'value' into one Object

  @param {String|Array} keys - Array with list of keys or single item string
  @param {String|Array} values - Array with list of values or single item string

  @return {Set} - Object with mearged key vale pairs
  *********************************************************************/
  keyValueToObject: function(keys, values){

    var obj = {};

    if( !Array.isArray(keys) ){ // If single item string
      obj[keys] = values;
    }
    else{
      keys.map( function(key, index){ obj[key] = values[index] } ); // Create a Set from feilds-array with corrosponding values-array
    }

    return obj;

  },


  /********************************************************************
  Check if All chracters in string are of valid charset and string has
  minimum and maximum length

  @param {String} str - The variable to be checked
  @param {Number} [min_length] - (Optional) Minimum required length this string must have
  @param {Number} [max_length] - (Optional) Maximum length this string can have

  @return {Boolean} - true on success
  @return {Boolean} - false if validation fails

  Note: Always check this function output against identic (===) FALSE to
  avoid mismatches with text 'false' or '0' or empty strings
  *********************************************************************/
  validateString: function(str, min_length, max_length){

    // Null/Empty-String Allowed (Only if minimum length is specified)
    if( !Utils.isNullOrUndefined(min_length) && // sent in param
      min_length === 0     &&
      ( str === null || str === ``)
    ){
      return true;
    }


    // Check if string type
    if( typeof str !== 'string' ){
      return false;
    }


    // Check Min and Max length limit
    var len = str.length; //Store var length

    // Check Min Length (Only if specified)
    if( !Utils.isNullOrUndefined(min_length) && len < min_length ){
      return false; // Less then minimum required length
    }

    // Check Max Length (Only if specified)
    if( !Utils.isNullOrUndefined(max_length) && len > max_length ){
      return false; // More then maximum allowed length
    }


    // Reach here means all validations passed
    return true; // Validation successful

  },


  /********************************************************************
  Check if All chracters in string statisfy particular regular expression
  and string has minimum and maximum length

  @param {String} str - The variable to be checked
  @param {String} regx - The regular expression (EX: '[a-z0-9]{6}')
  @param {Number} [min_length] - (Optional) Minimum required length this string must have
  @param {Number} [max_length] - (Optional) Maximum length this string can have

  @return {Boolean} - true on success
  @return {Boolean} - false if validation fails
  *********************************************************************/
  validateStringRegx: function(str, regx, min_length, max_length){

    // Null/Empty-String Allowed (Onlu if minimum length is specified)
    if( !Utils.isNullOrUndefined(min_length) && // Sent in params
      min_length === 0 &&
      ( str === null || str === ``)
    ){
      return true;
    }


    // Check string against regular expression
    if( !regx.test(str) ){
      return false;
    }


    // Check Min and Max length limit
    var len = str.length; //Store var length

    // Check Min Length (Only if specified)
    if( !Utils.isNullOrUndefined(min_length) && len < min_length ){
      return false; // Less then minimum required length
    }

    // Check Max Length (Only if specified)
    if( !Utils.isNullOrUndefined(max_length) && len > max_length ){
      return false; // More then maximum allowed length
    }


    // Reach here means all validations passed
    return true; // Validation successful

  },


  /********************************************************************
  Check if Integer is within Minimum and maximum range (including min and max)

  @param {String} num - The variable to be checked
  @param {Number} [min_value] - (Optional) Minimum required value
  @param {Number} [max_value] - (Optional) Maximum allowed value (including)

  @return {Boolean} - true on success
  @return {Boolean} - false if validation fails
  *********************************************************************/
  validateNumber: function(num, min_value, max_value){

    // Validate type
    if( typeof num !== 'number' ){
      return false;
    }

    // Check Minimum Value
    if( !Utils.isNullOrUndefined(min_value) && num < min_value ){ // If Minimum value set in parameter
      return false;
    }

    // Check Maximum Value
    if( !Utils.isNullOrUndefined(max_value) && num > max_value ){ // If Maximum value set in parameter
      return false;
    }

    // Reach here means all validations passed
    return true; // Validation successful

  },


  /********************************************************************
  Extract file directory, name, extension from absolute path
  Example: mydir/some_dir/my_file.jpg -> return 'mydir/some_dir', 'my_file', 'jpg'

  @param {String} absolute_path - Full path of file with directory and extension

  @return {Map} disjoined_path
  * @return {String} disjoined_path.file_dir: file directory and extension. '.' in case no directory
  * @return {String} disjoined_path.file_name: file name without directory and extension. Empty string in case of no filename
  * @return {String} disjoined_path.file_ext: extension without trailing period. Empty string in case of no extension
  *********************************************************************/
  disjoinAbsolutePath: function(absolute_path){

    // Include path library
    const Path = require('path');

    // result Object
    var result = {};


    // Get file extension
    result['file_ext'] = Path.extname(absolute_path).substring(1); // gives 'jpg' or empty string in case no extension (substring to remove preceding '.')

    // Get file name
    result['file_name'] = Path.basename( absolute_path, '.' + result['file_ext'] ); // give 'my_file' or empty string if not found

    // Get file directory
    result['file_dir'] = Path.dirname(absolute_path); // gives 'mydir/some_dir' or '.' in case no directory


    // Return extension
    return result;

  }

}; // Close Public Functions

////////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START//////////////////////////////
    //None
///////////////////////////Private Functions END///////////////////////////////
