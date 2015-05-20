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
    var args = ["x", arg.input];
    arg.o && args.push( "-o" );
    arg.o && args.push( arg.o );
    if ( typeof arg.filter === "string" ) {
        args.push( arg.target );
    }
    else {
        args = args.concat( arg.filter );
    }
    pro.execFile( "../lib/7z.exe", args, function ( err, stdout ) {
        callback( err, stdout );
    } );
}

function list( file, callback ) {
    pro.execFile( "../lib/7z.exe", ["l", file], function ( err, stdout ) {
        if ( err ) {
            callback( err );
        }
        else {
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
            callback( err, result );
        }
    } );
}

exports.add = add;
exports.dele = dele;
exports.extracts = extracts;
exports.list = list;
