var makeInfo = document.getElementsByClassName('shopping-cart_icon'),
    index = 0;

$(makeInfo).click(function () {
    document.getElementById('numberItem').innerHTML= ++index;
})