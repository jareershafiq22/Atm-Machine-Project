// # ATM BY JAREER SHAFIQ IN TYPESCRIPT
//This somewhat complex Typescript/Node.js project is console-based application. When the system starts them
//user id and user pin. After entreing the details successfully the ATM functinalities are unlocked.

 //start code by import inquirer
import inquirer from "inquirer";

let user = await inquirer.prompt([

    {
      type:"string",
      name: "cardholdername",
      message: "Welcome Jareer Shafiq"
    
    },


{
  type: "number",
  name: "pinCode",
  message: "enter your 4 digit pincode"
},


     //creating listing and withdrawal method


     {
      type:"list",
      name: "accountType",
      message: "Select your account type",
      choices: ["Saving", "Current"]
     },

     //transition type

     {
      type:"list",
      name: "transactionType",
      message: "Select your transaction type",
      choices: ["cash","withdrawal"]
     },
    
     //selected amount
      {
        type: "list",
        name: "amount",
        message: "Select your amount",
        choices:[1000,2000,5000,10000],
        when(user){
           return user.transitionType === "cash"
        },
      },

      {
        type: "number",
        name: "amount",
        messsage: "Enter your amount",
        when(user){
          return user.transitionType === "withdrawal"
        },
      },
    
    ]); 

     //final slip

     if(user.pincode){
       const balance = Math.floor(Math.random() * 10000 + 1)
       console.log(balance)
       const enteramount = user.account;

       if (enteramount <= balance) {
         const remaning = balance - enteramount

          console.log(`you have withdrawal ruppes ${enteramount} your remaining balance ${remaning} `)
       }
     };
