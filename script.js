const form = document.getElementById('form');
//console.log(form)
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted =(0);

function handleSubmit(e){
    e.preventDefault(); 
    
    
    if(!inputValue.value || inputValue.value < 0 ){
        alert('Informe um valor correto!');
        return;
    } else if(!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        return;
    }

 converter();
};

function converter(){
 if(selectedCurrency.value === 'eur'){
    valueConverted = inputValue.value / 5.22;
    result.innerHTML = valueConverted 

    animateResult();    

 }else if(selectedCurrency.value ==='dol'){
    valueConverted = inputValue .value / 4.74;
    result.innerHTML = valueConverted 

    animateResult();
 }



  else if (selectedCurrency.value === 'bit'){
    valueConverted = inputValue.value / 138.186,45;
    result.innerHTML = valueConverted 

    animateResult();    
};
    inputValue.value= '';
    selectedCurrency.value = '';
};

function valueFormatter(Locale,currency) {
  const value = valueConverted.toLocaleString('${Locale}', {style: 'currency', currency: '${currency}'})
  return `${value}` ;
};

/*function animateResult(){
    return result.animate([
     {trasform: 'translateY(-150px)'},   
     {trasform: 'translateY(0px)'},   
    ], { duration: 1500});
};
*/