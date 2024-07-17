
document.addEventListener("DOMContentLoaded", function () {
    const refreshButton = document.getElementById("refresh");

    refreshButton.addEventListener("click", function () {
        const min = 1;
        const max = 9;
        const randomNum1 = Math.floor(Math.random() * (max - min + 1) + min);
        const randomNum2 = Math.floor(Math.random() * (max - min + 1) + min);
        const randomNum3 = Math.floor(Math.random() * (max - min + 1) + min);
        const randomNum4 = Math.floor(Math.random() * (max - min + 1) + min);
        const randomNum5 = Math.floor(Math.random() * (max - min + 1) + min);
        const randomNum6 = Math.floor(Math.random() * (max - min + 1) + min);
        const randomNum7 = Math.floor(Math.random() * (max - min + 1) + min);
        
        
        for (let i = 1; i <= 15; i++) {
            const listItem = document.getElementById(`${i}`);
            
            

            if(i == 1 || i == 4 || i== 9){
                listItem.textContent = randomNum1;
            }

            else if(i== 2 || i == 12 || i == 14){
                listItem.textContent = randomNum2;
                }
            
            else if(i==3 || i== 7){
                listItem.textContent = randomNum3;
            }
            else if(i==10 || i== 13){
                listItem.textContent = randomNum4;
            }
            else if(i==5){
                listItem.textContent = randomNum5;
            }
            else if(i==8 ||i== 15){
                listItem.textContent = randomNum6;
            }
            else{
                listItem.textContent = randomNum7;
            }
        }
    });
});
