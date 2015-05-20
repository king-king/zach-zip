<img src="zach.gif">

### add( arg, callback ) 压缩文件 [支持.rar和.zip]
+ arg{Object}
    * output: {String}要生成的文件名。带后缀，后缀可以是：.rar、.zip
    * input {String|array}要被压缩的文件。字符串可以是一个文件，也可以是一个文件夹，可以使用通配符：*和?。*表示任意数量的字符序列，?表示任意一个字符。
    * r :{Boolean} 表示是否递归，例如当需要将子文件夹中的内容也压缩的时候，就需要设置r为true，默认为false。
    * p:{String} 密码，压缩的时候可以指定密码。

+ callback{Function}
    * err:{Object}
        * code：错误代码
            * 1: Warning
            * 2：Fatal error
            * 7：arg err
            * 8：Not enough memory for operation
            * 255：User stopped the process
    * des:描述

### dele( arg, callback ) 从压缩文件中删除文件[仅支持.zip]
 +arg{Object}
    * file{String} 要处理的压缩文件名称
    * target {String|array} 要删除的文件，字符串或字符串数组
    * r :{Boolean} 是否递归，默认为false

+ callback{Function}
    * err:{Object}
        * code：错误代码
            * 1: Warning
            * 2：Fatal error
            * 7：arg err
            * 8：Not enough memory for operation
            * 255：User stopped the process
    * des:描述

### extracts(arg, callback) 解压文件