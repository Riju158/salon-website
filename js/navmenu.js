$(".fa-bars").click(function () {
    $(".phone").toggle();
});

let changeIcon = function (icon) {
    icon.classList.toggle('fa-xmark')
}