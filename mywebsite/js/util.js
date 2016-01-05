/*
 *  常用方法集合
 *  用法:
 *  var util = Util$();
 *  util.method();
 */
(function(global) {
  var Fn = function() {
    return new Fn.init();
  };

  Fn.prototype = {
    /*
     * 格式化时间为：XXXX-XX-XX XX:XX的形式
     *
     * @date {'Date'} 用new Date创建出来的时间对象
     * @return {'String'} XXXX-XX-XX XX:XX的形式的字符串
     */
    formatDate: function(date){
        function padding(number){
            return number<10?'0'+number:number;
        }
        return date.getFullYear()+'-'
        +padding(date.getMonth()+1)+'-'
        +padding(date.getDate())+' '
        +padding(date.getHours())+':'
        +padding(date.getMinutes());
    },
    /*
     * 把js字符串中的空格符、制表符、换行符、"<"、">"转化为html格式
     *
     * @str {'String'} 要转换的js字符串
     * @return {'String'} html可用字符串
     */
    turntoInnerHtml: function(str){
      	var arr=[];
    		for(var i=0;i<str.length;i++){
    			var w=str[i];
    			if(w=='\n'){
    				w="<br>";
    			}
    			if(w=='\t'){
    				w='&nbsp;&nbsp;';
    			}
    			if(w==' '){
    				w='&nbsp;';
    			}
    			if(w=="<"){
    				w='&lt;';
    			}
    			if(w==">"){
    				w='&gt;';
    			}
          if(w=='"'){
            w="&quot;";
          }
    			arr[i]=w;
    		}
    		return arr.join('');
      },
      /*
     * 把js字符串中的空格符、制表符、换行符转化为html格式
     *
     * @str {'String'} 要转换的js字符串
     * @return {'String'} html可用字符串
     */
    turntoLinkHtml: function(str){
        var arr=[];
        for(var i=0;i<str.length;i++){
          var w=str[i];
          if(w=='"'){
            w="&quot;";
          }
          arr[i]=w;
        }
        return arr.join('');
      },
    /**
	* 用数据填充模板
	*
	* @param {object} object 包含数据的对象
	* @param {string} tmplHtml 要填充数据的html字符串
	* @return {string} 填充好数据的字符串
	*/
	formatTemplate: function(object,tmplHtml) {  
	    return tmplHtml.replace(/{(\w+)}/g, function(m1, m2) {  
	        if (!m2)  
	            return "";  
	        return object[m2];  
	    });  
	},
           

  };

  Fn.init = function() {};

  Fn.init.prototype = Fn.prototype;

  global.Util$ = Fn;

}(window));