document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загрузилась");
    var sec = 1;
    var intervalDescriptor = setInterval(function () {
        if (sec == 3) {
            clearInterval(intervalDescriptor);
        }
        sec++;
        console.log(Date());
    }, 5000);
    function external() {
        var extVar = 'Внешняя функция';
        return function internal() {
            var intVar = "Внутрення функция";
            console.log(intVar);
            console.log(extVar);
        };
    }
    // const internalfun = external();
    // console.log(internalfun);
    // internalfun();
});
