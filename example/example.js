/**
 * Created by acer on 2015/5/20.
 */

var z = require( "../lib/zach-zib.js" );
var pro = require( "child_process" );

//var last = pro.execFile( "../lib/7z.exe", ["d", "TweenMax.rar", "*.js", "-r", "-p"], function ( err, stdout, stderr ) {
//    console.log( err )
//} );

//z.list( "fire.zip", function ( err, result ) {
//    console.log( err ? err : result.size );
//} );


//z.dele( {
//    file : "fire.zip",
//    target : "*.js",
//    r : true
//}, function ( err, str ) {
//    console.log( str )
//} );


z.extracts( {
    input : "fire.zip",
    filter : "*.html",
    r : true
}, function ( err, str ) {
    console.log( str )
} );