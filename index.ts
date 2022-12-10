#! /usr/bin/env node


import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation"



const delay = (seconds: number) => {
    return new Promise((res) => setTimeout(res, seconds));
};

async function welcomeMsg() {
    const spinner = createSpinner(chalk.yellow("Initializing Number Guessing Game...")).start()
    await delay(2000);
    spinner.success();

    figlet(`Number  Guessing  Game  !\n`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + "\n");
    });
    await delay(1000);
    let rainbow = chalkAnimation.rainbow("\t\t\t\t\t\tDveloped By M.Fasih\n\n")
    await delay(2000);
    rainbow.stop();
}

const validateNumber = (input: any): string | boolean => {
    if (isNaN(input) || input === "") {
        return "Please enter a valid number";
    }
    else { return true; }
}

let play: boolean;
let score: number;

const getInput = async () => {
    const levels = await inquirer.prompt({
        name: "options",
        type: "list",
        choices: ["Easy", "Medium", "Hard"],
        message: "Which level you want to play?",
    })

    switch (levels.options) {
        case "Easy":
            score = 0;
            play = true;
            await easyLevel();
            break;
        case "Medium":
            score = 0;
            play = true;
            await mediumLevel();
            break;
        case "Hard":
            score = 0;
            play = true;
            await hardLevel();
            break;
    }
}


async function easyLevel() {
    while (play) {
        let randomEasy: number = Math.ceil(Math.random() * 3);
    
        const easy = await inquirer.prompt({
            name: "userGuess",
            type: "input",
            message: "Enter Number Between 1 to 3: ",
            validate: validateNumber
        })

        let easyNum = Number(easy.userGuess);

        if (easyNum === randomEasy) {
            console.log(chalk.yellow("\nCorrect Guess: ") + chalk.green("Congrations! You earned +10 points"));
            score += 10;
            console.log(chalk.yellow(`\nYour total Score is: ${chalk.rgb(70, 147, 198).bold(score)}\n`));

        } else if (easyNum > randomEasy) {
            console.log(chalk.yellow("\nWrong Guess: ") + chalk.red("Oops! Number is smaller...Try again!!\n"));
            play = false;
        } else {
            console.log(chalk.yellow("\nWrong Guess: ") + chalk.red("Oops! Number is greater...Try again!!\n"));
            play = false;
        }
    }

}


async function mediumLevel() {
    while (play) {
        let randomMedium: number = Math.ceil(Math.random() * 5);

        const medium = await inquirer.prompt({
            name: "userGuess",
            type: "input",
            message: "Enter Number Between 1 to 5: ",
            validate: validateNumber
        })

        let mediumNum = Number(medium.userGuess);

        if (mediumNum === randomMedium) {
            console.log(chalk.yellow("\nCorrect Guess: ") + chalk.green("Congrations! You earned +10 points"));
            score += 10;
            console.log(chalk.yellow(`\nYour total Score is: ${chalk.rgb(70, 147, 198).bold(score)}\n`));
        }
        else if (mediumNum > randomMedium) {
            console.log(chalk.yellow("\nWrong Guess: ") + chalk.red("Oops! Number is smaller...Try again!!\n"));
            play = false;
        }
        else {
            console.log(chalk.yellow("\nWrong Guess: ") + chalk.red("Oops! Number is greater...Try again!!\n"));
            play = false;
        }
    }
}

async function hardLevel() {
    while (play) {
        let randomHard: number = Math.ceil(Math.random() * 10);

        const hard = await inquirer.prompt({
            name: "userGuess",
            type: "input",
            message: "Enter Number Between 1 to 10: ",
            validate: validateNumber
        })

        let hardNum = Number(hard.userGuess);
        if (hardNum === randomHard) {
            console.log(chalk.yellow("\nCorrect Guess: ") + chalk.green("Congrations! You earned +10 points"));
            score += 10;
            console.log(chalk.yellow(`\nYour total Score is: ${chalk.rgb(70, 147, 198).bold(score)}\n`));
        }
        else if (hardNum > randomHard) {
            console.log(chalk.yellow("\nWrong Guess: ") + chalk.red("Oops! Number is smaller...Try again!!\n"));
            play = false;
        }
        else {
            console.log(chalk.yellow("\nWrong Guess: ") + chalk.red("Oops! Number is greater...Try again!!\n"));
            play = false;
        }
    }
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
    }
    while (again.restart)
}

toContinue();

