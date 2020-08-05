'use-strict'

///////////////////////////Private Functions START//////////////////////////////


//On iOS, AsyncStorage is backed by native code that stores small values in a serialized dictionary and larger values in separate files.
//On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.


let WebStorage = {


    /********************************************************************
    Save string in local storage

    @param key {String} - a constant which will be used as identifier while retriving or editing value
    @param value {String} - string what we will saving in async storage

    *********************************************************************/

    saveDataInWebStorage: function (key, value){

      return localStorage.setItem(key, value);

    },


    /********************************************************************
    Get data from local storage

    @param key {String} - a constant which will be used as identifier while retriving or editing value

    *********************************************************************/

    getDataFromWebStorage: function (key){

      return localStorage.getItem(key);

    },


    /********************************************************************
    Delete data from local storage

    @param key {String} - a constant which will be used as identifier while retriving or editing value

    *********************************************************************/

    clearDataFromWebStorage: function (key, value){

      return localStorage.removeItem(key);

    },


}

export default WebStorage;


////////////////////////////Private Functions END///////////////////////////////
