$('#pharId').on('click',storePharmacyNeed);
function storePharmacyNeed( )
{ 
  console.log('pharmacy');
  var content = document.getElementById('form2');
  localStorage.setItem('pharStorage', content.value);
  document.getElementById('form2').innerText = localStorage.getItem('pharStorage');

}
//---------- shopping---------------
$('#shopId').on('click',storeShoppingNeed);
function storeShoppingNeed( )
{ 
  console.log('shopping');
  var content = document.getElementById('form22');
  localStorage.setItem('shopStorage', content.value);
  document.getElementById('form22').innerText = localStorage.getItem('shopStorage');
}
//---------- Grocery---------------
$('#groId').on('click',storeGroceryNeed);
function storeGroceryNeed( )
{ 
  console.log('grocery');
  var content = document.getElementById('form23');
  localStorage.setItem('groceryStorage', content.value);
  document.getElementById('form23').innerText = localStorage.getItem('groceryStorage');

}
//---------- Car---------------
$('#carId').on('click',storeCarNeed);
function storeCarNeed( )
{ 
  console.log('car');
  var content = document.getElementById('form24');
  localStorage.setItem('carStorage', content.value);
  document.getElementById('form24').innerText = localStorage.getItem('carStorage');

}


$('body').onload=get();

/*----------------- upload------------*/

function get(){
    console.log(localStorage.getItem('pharStorage'));
    console.log('-------------');
    console.log(localStorage.getItem('shopStorage'));
    console.log('-------------');
    console.log(localStorage.getItem('groceryStorage'));
    console.log('-------------');
    console.log(localStorage.getItem('carStorage'));
    
        //Pharmacy:
        document.getElementById('form2').innerText = localStorage.getItem('pharStorage');
        // Car:
        document.getElementById('form24').innerText = localStorage.getItem('carStorage');
        // Shopping:
        document.getElementById('form22').innerText = localStorage.getItem('shopStorage');
        // Grocery:
         document.getElementById('form23').innerText = localStorage.getItem('groceryStorage');
    }
