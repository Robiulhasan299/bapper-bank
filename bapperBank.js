
// step 1 .
document.getElementById('submitDeposit').addEventListener('click',function(){
    // step 2 . add Deposit Number 
    const inputDepositPrevius = document.getElementById('inputDeposit');
    const inputDepositString = inputDepositPrevius.value;
    const inputDepositNumber = parseFloat(inputDepositString) ;
// step 3 . New deposit  Moeny
    const depositMonyNew = document.getElementById('depositMony');
    const depositMonyString = depositMonyNew.innerText;
    const depositMonyNumber = parseFloat(depositMonyString)
    depositMonyNew.innerText = inputDepositNumber + depositMonyNumber;
// step 4. Previus Mony and new moeny
    const totalBalenceMony = document.getElementById('totalBalence');
    const totalBalenceString = totalBalenceMony.innerText;
    const totalBalenceNumber= parseFloat(totalBalenceString)
    totalBalenceMony.innerText =totalBalenceNumber + inputDepositNumber;
  
// clear value
    inputDepositPrevius.value = '';
});