//  step 1 .
document.getElementById('submitDeposit').addEventListener('click',function(){
    const inputDepositPrevius = document.getElementById('inputDeposit');
    const inputDepositString = inputDepositPrevius.value;
    const inputDepositNumber = parseFloat(inputDepositString);

    const depositMonyNew = document.getElementById('depositMony');
    const depositMonyString = depositMonyNew.innerText;
    const depositMonyNumber = parseFloat(depositMonyString);
    depositMonyNew.innerText = inputDepositNumber +  depositMonyNumber;



    // clear value
    inputDepositPrevius.value = '';
});