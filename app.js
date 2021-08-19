// update case number
function updateProductNumber (product ,price, increasingDecreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
   if ( increasingDecreasing == true){
    productNumber = parseInt(productNumber) + 1;
   }
   
   else if (productNumber > 0){
    productNumber = parseInt(productNumber) - 1; 
   }
   productInput.value = productNumber;
   calculateTotal ();
//    update case total
const productTotal = document.getElementById(product +'-total');
 productTotal.innerText = productNumber * price;

}
function getInputValue (product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal (){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal ;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// phone plus
document.getElementById('phone-plus').addEventListener('click',function (){
    updateProductNumber('phone',1219,true);
})
// phone minus
document.getElementById('phone-minus').addEventListener('click',function (){
    updateProductNumber('phone',1219,false);
})
// case plus
document.getElementById('case-plus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1; 
    updateProductNumber ('case',59,true);
})  
// case minus
document.getElementById('case-minus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1; 
    updateProductNumber ('case',59,false);
})  