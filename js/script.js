document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value)/100;
    const time = document.getElementById('time').value;

    const total = value * (1 + fee)**time;

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.',','));
})

function limpar(){
document.getElementById('value').value= '';
document.getElementById('fee').value= '';
document.getElementById('time').value= '';
document.getElementById('total').innerHTML= 'R$ 0,00';
}