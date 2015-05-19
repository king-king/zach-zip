/**
 * Created by wq on 2015/5/19.
 */

var process = require( "child_process" );

function add( output, input, arg, callback ) {

}

process.execFile( "7z.exe", ["a", "wq.rar", "zach", "zach1", "-r"], function ( err, stdout, stderr ) {
	console.log( err );
} );
