import inquirer from 'inquirer';
import colors from 'colors';
import { getExamplesMenu } from './examples.js'
import { getLearnMenu } from './menu-learn.js';
import { showHelp } from './help.js';
import { getGettingStartedText } from './getting-started.js';

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
        console.log('Lava SDK Gallery contains a plethora of examples of SDK usages that can be executed from within the application'.blue, "\n");
        await getExamplesMenu()
        // method1();
        break;
      case '📚 Learn':
        console.log('Learn more about specific topics of Lava SDK '.blue, "\n");
        await getLearnMenu()
        break;
      case '🆘 Help':
        showHelp();
        await returnToMainMenuPrompt();
        break;
      case '🌋 Getting Started':
        getGettingStartedText();
        await returnToMainMenuPrompt();
        break;
      case '❌ Quit':
        await quitApp();
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

  if (answer) {
    console.log('Returning to the Main Menu...'.red, "\n");
    await displayMainMenu(); 
  }
};

// Helper Functions
async function quitApp() {
  console.log('Quitting the application. Goodbye!');
  process.exit();
}


// Program Logic
console.log('Welcome to', 'LavaSDK'.blue.bold, 'BETA'.bgRed, 'Gallery')
console.log('Check out documentation @', 'https://docs.lavanet.xyz/access-sdk'.underline.green, "\n")
displayMainMenu();
