import inquirer from 'inquirer';
import colors from 'colors';
import { getExamplesMenu } from './examples.js'
import { getLearnMenu } from './learn.js';

// Menu Logic
async function displayMainMenu() {

  let continueRunning = true;

  while (continueRunning) {

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Main Menu:',
        choices: [
          '🚀 Examples',
          '📚 Learn',
          '🌋 Getting Started',
          '🆘 Help',
          '❌ Quit'
        ],
      },
    ])

    switch (answers.action) {
      case '🚀 Examples':
        console.log('Lava SDK Gallery contains a plethora of examples of SDK usages that can be executed from within the application'.blue);
        await getExamplesMenu()
        // method1();
        break;
      case '📚 Learn':
        console.log('Learn more about specific topics of Lava SDK '.blue)
        await getLearnMenu()
        break;
      case '🆘 Help':
        showHelp();
        await returnToMainMenuPrompt()
        break;
      case '🌋 Getting Started':
        console.log("Get Started".red.bgGreen)
        break;
      case '❌ Quit':
        quitApp();
        break;
      default:
        console.log('Invalid option. Please select a valid option.'.red);
    }
  }
};

async function returnToMainMenuPrompt() {
  const answer = await inquirer.prompt([
    {
      type: 'password',
      name: 'returnToMainMenu',
      message: 'Press enter to return to the Main Menu',
    },
  ]);

  if (answer.returnToMainMenu) {
    console.log('Returning to the Main Menu...');
    await displayMainMenu(); 
  }
};

// Helper Functions
async function showHelp() {
  console.log('Help information...');
}

function quitApp() {
  console.log('Quitting the application. Goodbye!');
  process.exit();
}


// Program Logic
console.log('Welcome to', 'LavaSDK'.blue.bold, 'BETA'.bgRed, 'Gallery')
console.log('Check out documentation @', 'https://docs.lavanet.xyz/access-sdk'.underline.green)
displayMainMenu();
