<img src="zach.gif">

### add( output, input, arg, callback )

+ output {String}
Ҫ���ɵ��ļ�����
����׺����׺�����ǣ�.rar��.zip

+ input {String|array}
Ҫ��ѹ�����ļ���
�ַ���������һ���ļ���Ҳ������һ���ļ���
����ʹ��ͨ�����*��?��*��ʾ�����������ַ����У�?��ʾ����һ���ַ�
ʾ����
"\*.js" ƥ�����е�js�ļ�
["\*.js","*.css"]ƥ�����е�js�ļ���css�ļ�
["style","js"]ƥ��style�ļ��к�js�ļ����е������ļ�

+ arg{Object}
    * r : ��ʾ�Ƿ�ݹ飬���統��Ҫ�����ļ����е�����Ҳѹ����ʱ�򣬾���Ҫ����rΪtrue��Ĭ��Ϊfalse

+ callback{Function}
    * err:{Object}
    * des:����
    * code���������
        * 1: Warning
        * 2��Fatal error
        * 7��arg err
        * 8��Not enough memory for operation
        * 255��User stopped the process

