import inquirer from 'inquirer';
import colors from 'colors';

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
        '🚀 Method 1',
        '🎬 Method 2',
        '🆘 Help',
        '🚩 Getting Started with Lava SDK',
        '🏳️ Quit'
      ],
    },
  ])

  switch (answers.action) {
    case '🚀 Method 1':
      console.log('Method 1 executed'.blue);
        // method1();
        break;
      case '🎬 Method 2':
        console.log('Method 2 executed')
        //method2();
        break;
      case '🆘 Help':
        showHelp();
        break;
      case '🚩 Getting Started with Lava SDK':
        console.log("Get Started".red.bgGreen)
        break;
      case '🏳️ Quit':
        quitApp();
        break;
      default:
        displayMainMenu();
    }
  }
}

// Helper Functions
function showHelp() {
  console.log('Help information...');
}

function quitApp() {
  console.log('Quitting the application. Goodbye!');
  process.exit();
}

// Program Logic
console.log('Welcome to','LavaSDK'.blue.bold, 'BETA'.bgRed,'Gallery')
console.log('Check out documentation @','https://docs.lavanet.xyz/access-sdk'.underline.green)
displayMainMenu();
