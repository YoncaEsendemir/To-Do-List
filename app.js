const inputDiv= document.querySelector('.inputDiv');
const input=document.getElementById('input');
const button=document.getElementById('button');
const contentDiv=document.querySelector('.contentDiv');

var i=0;

button.addEventListener('click',go);

input.addEventListener('keyup',function(e){
    if(e.keyCode==13){
        go();
    }
})



function go(){
    if(input.value!=""){
        ++i
        let p= document.createElement('p');
        let deletButton=document.createElement('div');
        let finishButton=document.createElement('div');
        deletButton.classList.add('deleteButton'); // deletbutton içine class ekliyoruz
        finishButton.classList.add('finishButton');
        deletButton.innerText="Sil";
        finishButton.innerText="Yapıldı";
        p.innerText= i +")" + input.value; 
        contentDiv.appendChild(p);
        p.appendChild(deletButton);
        p.appendChild(finishButton);
        input.value="";


        deletButton.addEventListener('click',function () {
            i--;
            contentDiv.removeChild(p);
            
        })

        finishButton.addEventListener('click', function () {
            p.classList.toggle('deneme');
            //kullanım amacı deneme class tanımlı ise paragrafın üstünde onu kaldiriyor değil ise tanımlanıyor
        });
    }

}