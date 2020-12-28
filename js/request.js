



 function Check(submit){
   document.getElementById('run').disabled =true;
   document.getElementById('submit').disabled =true;
  var form = new FormData();
    form.append("lang", language);
    form.append("code", editor.getSession().getValue());
    form.append("input", $( "#input" ).val());
    form.append("save", "false");
    
    var code =editor.getSession().getValue();
    var inp = $( "#input" ).val();
    
    var settings = {
      url: "php/response.php",
      type: "POST",
      data: {
        lang :language,
        code:  code,
        input : inp,
        save : false
      }
    };
    
    $.ajax(settings).done( function (response) {
       console.log(response);
       var sol = JSON.parse(response);
   document.getElementById('run').disabled =false;
       if(sol['compResult']=='S'){
         if(sol['output']){
           document.getElementById('msg').style.color ="green";
           document.getElementById('msg').innerHTML ='SUCCESS...   '+"mem: "+sol['memory']+" time: "+sol['time'];
           document.getElementById('output').innerHTML =sol['output'];
         } 
       }
       else {
         document.getElementById('msg').style.color ="red";
         document.getElementById('msg').innerHTML ='Need To Debug Again';
         document.getElementById('output').innerHTML =sol['cmpError'];
       }

       if(submit=="Yes"){

        var data = new FormData();
        data.append("lang" , language);
        data.append("code" , editor.getSession().getValue());
        data.append("input" , $( "#input" ).val());
        data.append("output" , $( "#output" ).val());
        data.append("fname" , "RWA");
        var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
        xhr.open( 'post', 'php/submit.php', true );
        xhr.send(data);

       }
       document.getElementById('submit').disabled =false;



    });
 }

