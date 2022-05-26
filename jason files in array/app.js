document.getElementById('btn').addEventListener('click',loaded);

function loaded(){

         xhr=new XMLHttpRequest();
         xhr.open('GET','customers.json',true);

         xhr.onload=function(){
             obj=JSON.parse(this.responseText);
             var output='';
            obj.forEach(function(customer) {
            
                 output=output+`
                     <li>name:${customer.name}</li>
                     <li>age:${customer.age}</li>
                     <br><br>
                 `
            });
            document.getElementById('output').innerHTML=output;
         }

xhr.send();
        }
