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
    arg.r && args.push( "-r" );
    arg.p && args.push( "-p" );
    var child = pro.execFile( "../lib/7z.exe", args, function ( err, stdout ) {
        callback( err, stdout );
    } );

    arg.p && child.stdin.write( arg.p + "\n" );

}

function dele( arg, callback ) {
    var args = ["d", arg.file];
    if ( typeof arg.target === "string" ) {
        args.push( arg.target );
    }
    else {
        args = args.concat( arg.target );
    }
    arg.r && args.push( "-r" );
    pro.execFile( "../lib/7z.exe", args, function ( err, stdout ) {
        callback( err, stdout );
    } );
}

function extracts( arg, callback ) {

}

exports.add = add;
exports.dele = dele;
exports.extracts = extracts;
