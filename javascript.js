
document.addEventListener("DOMContentLoaded", function () {
    const refreshButton = document.getElementById("refresh");

    refreshButton.addEventListener("click", function () {
        function generateUniqueRandomNumber() {
            const numbers = [];
        
            // Krijo një array me numrat nga 1 deri në 9
            for (let i = 1; i <= 9; i++) {
                numbers.push(i);
            }
        
            // Përziej array-in
            for (let i = numbers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
            }
        
            // Merr numrin e parë
            const randomNumber = numbers.pop();
            return randomNumber;
        }

        const randomNum1 = generateUniqueRandomNumber();
        const randomNum2 = generateUniqueRandomNumber();
        const randomNum3 = generateUniqueRandomNumber();
        const randomNum4 = generateUniqueRandomNumber();
        const randomNum5 = generateUniqueRandomNumber();
        const randomNum6 = generateUniqueRandomNumber();
        const randomNum7 = generateUniqueRandomNumber();

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
