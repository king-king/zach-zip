<img src="zach.gif">

### add( output, input, arg, callback )

+ output {String}
要生成的文件名。
带后缀，后缀可以是：.rar、.zip

+ input {String|array}
要被压缩的文件。
字符串可以是一个文件，也可以是一个文件夹
可以使用通配符：*和?。*表示任意数量的字符序列，?表示任意一个字符
示例：
"\*.js" 匹配所有的js文件
["\*.js","*.css"]匹配所有的js文件和css文件
["style","js"]匹配style文件夹和js文件夹中的所有文件

+ arg{Object}
    * r : 表示是否递归，例如当需要将子文件夹中的内容也压缩的时候，就需要设置r为true，默认为false

+ callback{Function}
    * err:{Object}
    * des:描述
    * code：错误代码
        * 1: Warning
        * 2：Fatal error
        * 7：arg err
        * 8：Not enough memory for operation
        * 255：User stopped the process

