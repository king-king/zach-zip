/**
 * Created by acer on 2015/5/20.
 */

var z = require( "../lib/zach-zib.js" );
var pro = require( "child_process" );

var last = pro.execFile( "../lib/7z.exe", ["d", "TweenMax.rar", "*.js", "-r", "-p"], function ( err, stdout, stderr ) {
    console.log( err )
} );

