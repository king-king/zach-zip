/**
 * Created by wq on 2015/5/19.
 */

var process = require( "child_process" );

function add( output, input, arg, callback ) {
	var args = ["a", output];
	if ( typeof input === "string" ) {
		args.push( input );
	}
	else {
		args.concat( input );
	}
	arg.r && args.push( "-r" );
	process.execFile( "7z.exe", args, function ( err, stdout, stderr ) {
		callback( err, stdout );
	} );
}


exports.add = add;


