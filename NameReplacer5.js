void function(){let b=RegExp(/[\[\(]?(Name)(?!\/n)[\]\)]?/,"g"), a=document.getElementById("workskin").innerHTML;a=a.replaceAll(b,"Nim");document.getElementById("workskin").innerHTML=a}();
