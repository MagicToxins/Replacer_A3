Javascript:void function(){let b=RegExp(/[\[\(]?H\/N(?!\/n)[\]\)]?/,"ig"),c=prompt("Modify H/N with:",""),a=document.getElementById("workskin").innerHTML;a=a.replaceAll(b,c);document.getElementById("workskin").innerHTML=a}();