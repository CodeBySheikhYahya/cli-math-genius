import inquirer from "inquirer";
const answer = await inquirer.prompt([{ Messege: "Enter First number", type: "number", name: "Firstnumber" }, { Messege: "Enter Second number", type: "number", name: "Secondnumber" }, { message: "Choose one operation to execute.", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"] }]);
// NOW WE ARE USING COND OF IF AND ELSE
if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else if (answer.operator === "Modulus") {
    console.log(answer.Firstnumber % answer.Secondnumber);
}
else {
    console.log("invalid data");
}
// console.log("your answer is" + answer.FirstNumber +  answer.SecondNumber) => basically if we plus then anwer just be join like if i have 3 and 5 so then according to my code is 34 bcz when we add two strings they will be join not add like a number now if we remove 
// console.log("your answer is" + answer.FirstNumber +  answer.SecondNumber) => basically if we plus then anwer just be join like if i have 3 and 5 so then according to my code is 34 bcz when we add two strings they will be join not add like a number now if we remove 
// console.log("your answer is" + answer.FirstNumber +  answer.SecondNumber) => basically if we plus then anwer just be join like if i have 3 and 5 so then according to my code is 34 bcz when we add two strings they will be join not add like a number now if we remove "your answer is" + then now answer would be correct
// this curly bracket means we make a object inside the array
// this await means wait for a user input 
// now we have to define key in object
// we make another object in same array for second number
// list means when person open the calculator now they have option what to do like plus munus multiple divide modulus
// inquirer done a great job ask for quetions which we write in form of messeges
