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

### dele( arg, callback ) ��ѹ������ɾ���ļ�[��֧��.zip]
 +arg{Object}
    * file{String} Ҫ�����ѹ��������
    * target {String|array} Ҫɾ�����ļ����ַ������ַ�������
    * r{Boolean} �Ƿ�ݹ飬Ĭ��Ϊfalse

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
 +arg{Object}
    * input{String} Ҫ�����ѹ����·��
    * o{String} ���·����Ĭ���ǵ�ǰ�ļ���
    * filter{String|array} ����ָ����ѹ�ض����ļ�
    * r{Boolean}���filter�趨�˹�������������rΪtrue����ʵ�ֵݹ���ȹ��� 
    
 + callback{Function}
     * err:{Object}
         * code���������
             * 1: Warning
             * 2��Fatal error
             * 7��arg err
             * 8��Not enough memory for operation
             * 255��User stopped the process
     * des:����
### list(file, callback) �г�ѹ�����е������ļ�
+ file{String} Ҫ�����ѹ����·��

+ callback{Function}
       * err:{Object}
           * code���������
               * 1: Warning
               * 2��Fatal error
               * 7��arg err
               * 8��Not enough memory for operation
               * 255��User stopped the process
       * des:����

+ ����{Object}
```javascript
{
  path:// ѹ������·��
  size:// ѹ�����Ĵ�С,zip�ܶ���������ݣ�rarѹ����������������ݣ�ֵ��NAN��
  foldersNum:// ѹ�������ļ��е�����
  filesNum:// ѹ�������ļ�������
  files:[
     {
        name:
        date:
        time:
        size: // rar�ļ���0��zip�ܶ�����
        compressed: // rar�ļ���0��zip�ܶ�����
     }
     ����
  ]
}

```


