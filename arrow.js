// const sayHello = function(name){
//     return "Hey there , " + name + "!"
// }

// console.log(sayHello('chaitu'))


const sayHello = (name) => {
    return `Hey there ${name}`
}

// console.log(sayHello('chaitu'));


const newTodo = [{
    title : 'Buy Bread',
    isDone : true          
}, {
    title : 'Goto GYM',
    isDone : true
}, {
    title : 'Record Vidoes',
    isDone : true
},{
    title : 'Goto COllege',
    isDone : false 
},{
    title : 'Sleep',
    isDone : false
},{
    title : 'Come BACK',
    isDone : false
}]

// const thingsDOne = newTodo.filter((todo) =>  todo.isDone === true )

const thingsNotDone = newTodo.filter((todo) => { 
    if(todo.isDone === false ){
        // return newTodo.title
        console.log(todo.title)


}
})
// .forEach((object) => {
//     console.log( object.title)
// })





// console.log(thingsNotDone)