#! /usr/bin/env node
import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";
const delay = (seconds) => {
    return new Promise((res) => setTimeout(res, seconds));
};
async function welcomeMsg() {
    const spinner = createSpinner(chalk.yellow("Loading Number Guessing Game...")).start();
    await delay(2000);
    spinner.success();
    figlet(`Number  Guessing  Game  !\n`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + "\n");
    });
    await delay(1000);
    let rainbow = chalkAnimation.rainbow("\t\t\t\t\t\tDveloped By M.Fasih\n\n");
    await delay(2000);
    rainbow.stop();
}
const validateNumber = (input) => {
    if (isNaN(input) || input === "") {
        return "Please enter a valid number";
    }
    else {
        return true;
    }
};
let play;
let score;
let playerLife;
const getInput = async () => {
    const levels = await inquirer.prompt({
        name: "options",
        type: "list",
        choices: ["Easy", "Medium", "Hard"],
        message: "Which level you want to play?",
    });
    switch (levels.options) {
        case "Easy":
            score = 0;
            playerLife = 2;
            play = true;
            await easyLevel();
            break;
        case "Medium":
            score = 0;
            playerLife = 4;
            play = true;
            await mediumLevel();
            break;
        case "Hard":
            score = 0;
            playerLife = 9;
            play = true;
            await hardLevel();
            break;
    }
};
async function easyLevel() {
    console.log(chalk.yellow(`\n NOTE:`) + chalk.rgb(70, 147, 198).bold(` You have 3 chances if you guess wrong you lost 1 life...\n`));
    do {
        let randomEasy = Math.ceil(Math.random() * 3);
        const easy = await inquirer.prompt({
            name: "userGuess",
            type: "input",
            message: "Enter Number Between 1 to 3: ",
            validate: validateNumber
        });
        let easyNum = Number(easy.userGuess);
        if (easyNum === randomEasy) {
            console.log(chalk.yellow("\n Correct Guess: ") + chalk.green("Congrations! You earned +10 points"));
            score += 10;
            console.log(chalk.yellow(`\n Your total Score is: ${chalk.rgb(70, 147, 198).bold(score)}\n`));
        }
        else if (easyNum > randomEasy) {
            console.log(chalk.green("\n Wrong Guess: ") + chalk.redBright("Oops! Number is smaller...Try again!!\n"));
            if (playerLife > 1) {
                console.log(chalk.yellow(` You have ${playerLife} more lifes!\n`));
                playerLife--;
            }
            else if ((playerLife > 0)) {
                console.log(chalk.yellow(` You have ${playerLife} more life!\n`));
                playerLife--;
            }
            else if (playerLife == 0) {
                console.log(chalk.yellow(`\n NOTE:`) + chalk.red(` This is your last life!\n`));
                playerLife--;
            }
            else {
                console.log(" " + chalk.bgRed(" GAME OVER!! \n"));
                play = false;
            }
        }
        else {
            console.log(chalk.yellow("\n Wrong Guess: ") + chalk.redBright("Oops! Number is greater...Try again!!\n"));
            if (playerLife > 1) {
                console.log(chalk.yellow(` You have ${playerLife} more lifes!\n`));
                playerLife--;
            }
            else if (playerLife > 0) {
                console.log(chalk.yellow(` You have ${playerLife} more life!\n`));
                playerLife--;
            }
            else if (playerLife == 0) {
                console.log(chalk.yellow(`\n NOTE:`) + chalk.red(` This is your last life!\n`));
                playerLife--;
            }
            else {
                console.log(" " + chalk.bgRed(" GAME OVER!! \n"));
                play = false;
            }
        }
    } while (play);
}
async function mediumLevel() {
    console.log(chalk.rgb(70, 147, 198).bold(`\n NOTE: You have 5 chances if you guess wrong you lost 1 life...\n`));
    do {
        let randomMedium = Math.ceil(Math.random() * 5);
        const medium = await inquirer.prompt({
            name: "userGuess",
            type: "input",
            message: "Enter Number Between 1 to 5: ",
            validate: validateNumber
        });
        let mediumNum = Number(medium.userGuess);
        if (mediumNum === randomMedium) {
            console.log(chalk.yellow("\n Correct Guess: ") + chalk.green("Congrations! You earned +10 points"));
            score += 10;
            console.log(chalk.yellow(`\n Your total Score is: ${chalk.rgb(70, 147, 198).bold(score)}\n`));
        }
        else if (mediumNum > randomMedium) {
            console.log(chalk.yellow("\n Wrong Guess: ") + chalk.redBright("Oops! Number is smaller...Try again!!\n"));
            if (playerLife > 1) {
                console.log(chalk.yellow(` You have ${playerLife} more lifes!\n`));
                playerLife--;
            }
            else if ((playerLife > 0)) {
                console.log(chalk.yellow(` You have ${playerLife} more life!\n`));
                playerLife--;
            }
            else if (playerLife == 0) {
                console.log(chalk.yellow(`\n NOTE:`) + chalk.red(` This is your last life!\n`));
                playerLife--;
            }
            else {
                console.log(" " + chalk.bgRed(" GAME OVER!! \n"));
                play = false;
            }
        }
        else {
            console.log(chalk.yellow("\n Wrong Guess: ") + chalk.redBright("Oops! Number is greater...Try again!!\n"));
            if (playerLife > 1) {
                console.log(chalk.yellow(` You have ${playerLife} more lifes!\n`));
                playerLife--;
            }
            else if (playerLife > 0) {
                console.log(chalk.yellow(` You have ${playerLife} more life!\n`));
                playerLife--;
            }
            else if (playerLife == 0) {
                console.log(chalk.yellow(`\n NOTE:`) + chalk.red(` This is your last life!\n`));
                playerLife--;
            }
            else {
                play = false;
                console.log(" " + chalk.bgRed(" GAME OVER!! \n"));
            }
        }
    } while (play);
}
async function hardLevel() {
    console.log(chalk.rgb(70, 147, 198).bold(`\n NOTE: You have 10 chances if you guess wrong you lost 1 life...\n`));
    do {
        let randomHard = Math.ceil(Math.random() * 10);
        const hard = await inquirer.prompt({
            name: "userGuess",
            type: "input",
            message: "Enter Number Between 1 to 10: ",
            validate: validateNumber
        });
        let hardNum = Number(hard.userGuess);
        if (hardNum === randomHard) {
            console.log(chalk.yellow("\n Correct Guess: ") + chalk.green("Congrations! You earned +10 points"));
            score += 10;
            console.log(chalk.yellow(`\n Your total Score is: ${chalk.rgb(70, 147, 198).bold(score)}\n`));
        }
        else if (hardNum > randomHard) {
            console.log(chalk.yellow("\n Wrong Guess: ") + chalk.redBright("Oops! Number is smaller...Try again!!\n"));
            if (playerLife > 1) {
                console.log(chalk.yellow(` You have ${playerLife} more lifes!\n`));
                playerLife--;
            }
            else if ((playerLife > 0)) {
                console.log(chalk.yellow(` You have ${playerLife} more life!\n`));
                playerLife--;
            }
            else if (playerLife == 0) {
                console.log(chalk.yellow(`\n NOTE:`) + chalk.red(` This is your last life!\n`));
                playerLife--;
            }
            else {
                play = false;
                console.log(" " + chalk.bgRed(" GAME OVER!! \n"));
            }
        }
        else {
            console.log(chalk.yellow("\n Wrong Guess: ") + chalk.redBright("Oops! Number is greater...Try again!!\n"));
            if (playerLife > 1) {
                console.log(chalk.yellow(` You have ${playerLife} more lifes!\n`));
                playerLife--;
            }
            else if (playerLife > 0) {
                console.log(chalk.yellow(` You have ${playerLife} more life!\n`));
                playerLife--;
            }
            else if (playerLife == 0) {
                console.log(chalk.yellow(`\n NOTE:`) + chalk.red(` This is your last life!\n`));
                playerLife--;
            }
            else {
                play = false;
                console.log(" " + chalk.bgRed(" GAME OVER!! \n"));
            }
        }
    } while (play);
}
async function toContinue() {
    console.clear();
    await welcomeMsg();
    do {
        await getInput();
        var again = await inquirer.prompt({
            name: "restart",
            type: "confirm",
            message: "Do you want to play again?"
        });
    } while (again.restart);
}
toContinue();
