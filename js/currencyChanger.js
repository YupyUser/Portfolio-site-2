
function changeCurrency () {
    let arr = document.querySelectorAll('.currencyChangeable');

    arr.forEach((item)=>{
        if (item.innerHTML.startsWith('$')) {

            item.innerHTML = '₽' + (item.innerHTML.slice(1) * 75).toFixed(1);

        } else {

            item.innerHTML = '$' + (item.innerHTML.slice(1) / 75).toFixed(1);

        }


    });
}

export default changeCurrency;
