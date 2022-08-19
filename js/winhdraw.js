 document.getElementById('inputWithdeawMony').addEventListener('click',function(){
    const inputWithdeawMonye= document.getElementById('inputWithdeaw');
    const inputWithdeawMonyeString =inputWithdeawMonye.value;
    const inputWithdeawMonyeNumber = parseFloat(inputWithdeawMonyeString);
// step 3 show winhdraw value
const winhdrawPresentMonye = document.getElementById('winhdrawPresentMonye');
const winhdrawPresentMonyeString = winhdrawPresentMonye.innerText;
const winhdrawPresentMonyeNumber = parseFloat(winhdrawPresentMonyeString);
 const winhdrawTotal  = inputWithdeawMonyeNumber + winhdrawPresentMonyeNumber;
 winhdrawPresentMonye.innerText = winhdrawTotal;

//  step 4 balance total Elements
const balanceToala = document.getElementById('totalBalence');
const balanceToalaString = balanceToala.innerText;
const balanceToalaNUmber = parseFloat(balanceToalaString);


// step 5
const newBalanceTotal = balanceToalaNUmber - winhdrawTotal  ;
balanceToala.innerText = newBalanceTotal;
//  clear
inputWithdeawMonye.value ='';
 });
 