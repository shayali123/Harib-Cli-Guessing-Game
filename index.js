import inquirer from "inquirer";
let random = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Please guess a number 1-10 :",
    },
]);
if (answer.userguessednumber === random) {
    console.log("Congratulation, you guessed a right number");
}
else {
    console.log("You guessed a wrong number");
}
