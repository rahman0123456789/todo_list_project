// Todo list project.

import inquirer from "inquirer";

let arr: string[] = ["Abdul","Rahman"];

async function createtodoList(arr: string[]){

do{

    console.log("......Todo List Prjoect..........\n");
    let user = await inquirer.prompt({

        type: "list",
        name: "select",
        message: "Select an operation: ",
        choices: ["add","update","view","delete"]
    });


    if (user.select === "add"){

        let addTodo = await inquirer.prompt({
          
            type: "input",
            name: "addtodo",
            message: "add item : ",
            
        })

        arr.push(addTodo.addtodo)
        console.log(arr);
    };

    if (user.select === "update"){

        let updateTodo = await inquirer.prompt({

            type: "list",
            name: "updatetodo",
            message: "Select item for update : ",
            choices: arr.map(item => item)
        });

        let addTodo = await inquirer.prompt({
          
            type: "input",
            message: "add item : ",
            name: "addtodo",  
        });

        let newTodo = arr.filter(val => val !== updateTodo.updatetodo);
        arr = [...newTodo , addTodo.addtodo];
        console.log(arr);
    } 

    if (user.select === "view"){

        console.log(arr);
    }

    if (user.select === "delete"){

        let deleteTodo = await inquirer.prompt({

            type: "list",
            name: "deletetodo",
            message: "Select item for delete : ",
            choices: arr.map(item => item)
        });

        let newTodo = arr.filter(val => val !== deleteTodo.deletetodo);
        arr = [...newTodo];
        console.log(arr);

    }


}while(true);

}
createtodoList(arr);

