/**
 * Created by acer on 2015/5/20.
 */

var z = require( "../lib/zach-zib.js" );
var pro = require( "child_process" );

//var last = pro.execFile( "../lib/7z.exe", ["d", "TweenMax.rar", "*.js", "-r", "-p"], function ( err, stdout, stderr ) {
//    console.log( err )
//} );


pro.execFile( "../lib/7z.exe", ["l", "fire.zip"], function ( err, stdout, stderr ) {
    var result = {};
    var arr = stdout.split( "\n" );
    result.path = arr[6].split( "= " )[1];
    result.size = arr[8].split( "= " )[1];
    result.files = [];
    result.foldersNum = arr[arr.length - 2].split( /\s+/ )[5];
    result.filesNum = arr[arr.length - 2].split( /\s+/ )[3];
    arr.slice( 12, -3 ).forEach( function ( info ) {
        var arr = info.split( /\s+/ );
        result.files.push( {
            date : arr[0],
            time : arr[1],
            size : arr[3],
            compressed : arr[4],
            name : arr[5]
        } );
    } );
    console.log( result.filesNum );
} );
