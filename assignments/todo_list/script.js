let count=0;
document.querySelector('#addTodo').onclick = function(){
    let input = document.querySelector('#todoInput').value;
    if(input.length===0){
        alert("Please enter a task");
    }else{
        document.querySelector('.todos').innerHTML += `
        <p key =${count}>
        <span class = "task">
            ${count}
        </span>
        </p>
        `;
        count++;
        let currentTask = document.querySelectorAll('.task');
        for(let i=0; i<currentTask.length;i++){
            currentTask[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        
    }

}