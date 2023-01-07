const task3Element = document.getElementById('task-3');

function one (){
    alert("Hi this is the first function")

}

function Two (name){
    alert("Hi " + name)
}

task3Element.addEventListener('click', one)
Two("Ahmed")

function Three(name1, name2, name3){
    const string = name1 + " " + name2 +" "+ name3
    return string
}

alert (Three("Toofi", "Mohammed", "Ali"))