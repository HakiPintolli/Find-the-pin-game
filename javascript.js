
document.addEventListener("DOMContentLoaded", function () {
    const refreshButton = document.getElementById("refresh");

    refreshButton.addEventListener("click", function () {
        const min = 1;
        const max = 9;
        const randomNum1 = Math.floor(Math.random() * (max - min + 1) + min);

        const num1 = 0;
        const num2 = 0;
        const num3 = 0;
        const num4 = 0;

        for (let i = 1; i <= 15; i++) {
            const listItem = document.getElementById(`${i}`);
            
            const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
            listItem.textContent = randomNum;
            
            if (i === 1 || i === 4) {
                listItem.textContent = randomNum1;
            }

            if(randomNum === 1){
                num1++;
            }
            else if(randomNum === 2){
                num2++;
            }
            else if(randomNum === 3){
                num3++;
            }
            else if(randomNum === 4){
                num4++;
            }
            if(num1 === 4){
                continue;
            }
            else if(num2 === 4){
                continue;
            }
            else if(num3 === 4){
                continue;
            }
            else if(num4 === 4){
                continue;
            }

        }
    });
});
