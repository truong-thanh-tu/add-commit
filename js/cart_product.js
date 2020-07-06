var index = 0,
    numberProduct = document.getElementsByClassName('input-number-decrement');
$(numberProduct).click(function(){
    document.getElementById('input-numbers').innerHTML = ++index;
})