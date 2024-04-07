document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница загрузилась");
    
    let sec = 1;
    let intervalDescriptor = setInterval(() => 
    {   
        if (sec==3) {
            clearInterval(intervalDescriptor)
        }
        sec++;
  
        console.log(Date());
    }, 5000);


    function external() {
        const extVar = 'Внешняя функция';

        return function internal()
        {
            const intVar = "Внутрення функция";
            console.log(intVar);
            console.log(extVar);
        }
    }

    // const internalfun = external();
    // console.log(internalfun);
    // internalfun();
});