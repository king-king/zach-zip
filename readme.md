<img src="zach.gif">

### add( arg, callback ) ѹ���ļ� [֧��.rar��.zip]
+ arg{Object}
    * output: {String}Ҫ���ɵ��ļ���������׺����׺�����ǣ�.rar��.zip
    * input {String|array}Ҫ��ѹ�����ļ����ַ���������һ���ļ���Ҳ������һ���ļ��У�����ʹ��ͨ�����*��?��*��ʾ�����������ַ����У�?��ʾ����һ���ַ���
    * r :{Boolean} ��ʾ�Ƿ�ݹ飬���統��Ҫ�����ļ����е�����Ҳѹ����ʱ�򣬾���Ҫ����rΪtrue��Ĭ��Ϊfalse��
    * p:{String} ���룬ѹ����ʱ�����ָ�����롣

+ callback{Function}
    * err:{Object}
        * code���������
            * 1: Warning
            * 2��Fatal error
            * 7��arg err
            * 8��Not enough memory for operation
            * 255��User stopped the process
    * des:����

### dele( arg, callback ) ��ѹ���ļ���ɾ���ļ�[��֧��.zip]
 +arg{Object}
    * file{String} Ҫ�����ѹ���ļ�����
    * target {String|array} Ҫɾ�����ļ����ַ������ַ�������
    * r :{Boolean} �Ƿ�ݹ飬Ĭ��Ϊfalse

+ callback{Function}
    * err:{Object}
        * code���������
            * 1: Warning
            * 2��Fatal error
            * 7��arg err
            * 8��Not enough memory for operation
            * 255��User stopped the process
    * des:����

### extracts(arg, callback) ��ѹ�ļ�