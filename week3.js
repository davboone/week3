function heeHaw(){
    let heeHawNums = document.getElementById("numbers");
    let number = document.getElementById("number");
    heeHawNums.innerText = "";
    for(let i = 1; i <= number.value; i++){
        let paragraph = document.createElement('p');

        if(i%3 === 0 && i%5 === 0){
            paragraph.innerText = "Hee Haw!";
            heeHawNums.appendChild(paragraph);
        }
        else if(i%3 === 0){
            paragraph.innerText = "Hee!";
            heeHawNums.appendChild(paragraph);
        }
        else if(i%5 === 0){
            paragraph.innerText = "Haw!"
            heeHawNums.appendChild(paragraph);
        }
        else{
            paragraph.innerText = i;
            heeHawNums.appendChild(paragraph);
        }
    }
}
let btn = document.getElementById("click");
btn.onclick = heeHaw;