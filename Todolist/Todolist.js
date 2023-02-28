
let addBox = document.getElementById('addBox'); // 입력값
let addTodo = document.getElementById('addTodo'); //버튼
let todo = document.getElementById('todo'); //목록 리스트

   addTodo.addEventListener('click',function(){
    if(addBox.value == false){
        alert('내용을 입력하시오');
    }
    else{
    //요소 접근
        var list = document.createElement('li');
        let del = document.createElement('button');
        list.innerHTML = addBox.value;
        todo.appendChild(list);
        list.appendChild(del);
        del.innerText= "x";
        del.addEventListener("click",deleteList);
        // del.style.fontSize = "20px";
        // del.style.border = "none";
        del.style.float = "right";
        // del.style.right = "17px";
        del.style.marginTop = "5px";
        // del.style.cursor = "pointer";
        
        list.addEventListener('dblclick',function(){
            todo.removeChild(list);

        })
        function deleteList(e){
            let removeOne =e.target.parentElement;
            removeOne.remove();
        }
    }
   
    })

    
   



