let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;
loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .box-container .box')];
    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}
// Service Section code
let LoadmoreBtn = document.querySelector('#Load-More');
let CurrentItem = 3;
LoadmoreBtn.onclick = () => {
    let Details = [...document.querySelectorAll('.col-lg-4')];
    for (var j = CurrentItem; j < CurrentItem + 3; j++) {
        Details[i].style.display = 'inline-block';
    }
    CurrentItem += 3;
    if (CurrentItem >= Details.length) {
        LoadmoreBtn.style.display = 'none';
    }
}