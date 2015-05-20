/**
 * Created by wq on 2015/5/19.
 */

var pro = require( "child_process" );


function add( arg, callback ) {
	var args = ["a", arg.output];
	if ( typeof arg.input === "string" ) {
		args.push( arg.input );
	}
	else {
		args = args.concat( arg.input );
	}
	console.log( process.cwd() );
	arg.r && args.push( "-r" );
	pro.execFile( "../lib/7z.exe", args, function ( err, stdout, stderr ) {
		callback( err, stdout );
	} );
}

function dele( arg, callback ) {

}

exports.add = add;


