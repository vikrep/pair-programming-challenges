var arr = [
    "http://via.placeholder.com/350x150?text=1",
    "http://via.placeholder.com/350x150?text=2",
    "http://via.placeholder.com/350x150?text=3"
];
var container = document.querySelector('img');

function slider(arr, i) {
    container.setAttribute('src', arr[i]);
    if (i == arr.length - 1) {
        i = 0;
    } else {
        i++;
    }
    timer = setTimeout(slider, 2000, arr, i)
};


var buttons = document.getElementsByTagName('button');
var timer = setTimeout(2000);
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        clearTimeout(timer)
        slider(arr, i)
    }
    )
}