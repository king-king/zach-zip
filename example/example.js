/**
 * Created by acer on 2015/5/20.
 */

var z = require( "../lib/zach-zib.js" );

//z.add( {
//	input : ["js", "style"],
//	output : "wq.zip",
//	r : true
//}, function ( err, str ) {
//	//console.log( err );
//	console.log( "===============" );
//	//console.log( err );
//} );

var pro = require( "child_process" );
var last = pro.execFile( "../lib/7z.exe", ["a", "wq2.rar", "*.js", "-r", "-p"], function ( err, stdout, stderr ) {
} );

last.stdout.on( 'data', function ( data ) {
	console.log( "标准输出" + data );
	last.stdin.write( "111111\n" );
} );