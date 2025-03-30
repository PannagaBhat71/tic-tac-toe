let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset-button");
let newGamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0= true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((btn)=>{
    btn.addEventListener("click", () =>{
        console.log("box was clicked")
        if(turn0== true){
            btn.innerText = "O";
            turn0= false;
            
        }else{
            btn.innerText = "X";
            turn0=true;
        }
        btn.disabled = true;
        checkwinner();
    })

    
})
const disableboxes = () => {
        for(let box of boxes){
            box.disabled= true;
        }
}


const showwinner = (winner) => {
    msg.innerText = `congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for(pattern of winPatterns) {
        let post1val =  boxes[pattern[0]].innerText;
        let post2val =  boxes[pattern[1]].innerText;
        let post3val =  boxes[pattern[2]].innerText;
        
        if(post1val != ""&&post2val != ""&&post3val !=""){
            if(post1val == post2val&& post2val == post3val){
                console.log("winner");
                
                showwinner(post1val);
                
            }
        }
    }

}

