// var weight = prompt("Ağırlığınızı giriniz :");
// var height = prompt("Boyunuzu giriniz (metre cinsinden örnek 1.66) : ");


// function vkiHesapla(weight, height) {
// var vki = weight/(height * height);
                  

// if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
// if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
// if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
// if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
// return alert("Girdiğiniz değerleri kontrol ediniz");
// };



// vkiHesapla(weight,height)


//  javascirpt 1.bölüm ödevi
 
 let userName = prompt("Adınız ?  ");
 document.querySelector("#isim").innerHTML= ` Merhaba , ${userName}! Hoş geldin!`;

 var d=new Date();
 var h=d.getHours();
 var day=d.getDay();
 var m=d.getMinutes();
 
 console.log(m)

if(day==0){ day="Pazar";}
else if(day==1){ day="Pazartesi";}
else if(day==2){ day="Salı";}
else if(day==3){ day="Carşamba";}
else if(day==4){ day="Perşembe";}
else if(day==5){ day="Cuma";}
else if(day==6){ day="Cumartesi";}



document.querySelector("#saat").innerHTML=` ${h}:${m}  ${day} `;





// ödev sonu