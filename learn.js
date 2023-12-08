import inquirer from 'inquirer';
import colors from 'colors';


export async function getLearnMenu() {

    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: '📚 Learn:',
            choices: [
                '🔩 Init Methods',
                '🔧 Init Options',
                '📛 Badges / 🔑 PrivateKeys',
                '🌍 Geolocation',
                '🛰️ sendRelay() Function',
                '🔙 Main Menu',
            ],
        },
    ]);

    switch (answer.action) {
        case '🔩 Init Methods':
            console.log("There are", "3".bold, "methods to initialize", "LavaSDK".red)
            // Add code to handle Initialization Methods documentation here
            await returnToLearnMenuPrompt();
            break;
        case '🔧 Init Options':
            // Add code to handle LavaSDK Options documentation here
            await returnToLearnMenuPrompt();
            break;
        case '📛 Badges / 🔑 PrivateKeys':
            // Add code to handle Badges / PrivateKeys documentation here
            await returnToLearnMenuPrompt();
            break;
        case '🌍 Geolocation':
            // Add code to handle Geolocation documentation here
            await returnToLearnMenuPrompt();
            break;
        case '🛰️ sendRelay() Function':
            // Add code to handle sendRelay() Function documentation here
            await returnToLearnMenuPrompt();
            break;
        case '🔙 Main Menu':
            // Add code to go back to the main menu here
            console.log("Returning to Main Menu".red)
            console.log("\n")
            break;
        default:
            await getLearnMenu();
    }
};

async function returnToLearnMenuPrompt() {
    const answer = await inquirer.prompt([
      {
        type: 'password',
        name: 'returnToLearnMenu',
        message: 'Press enter to return to the Learn Menu',
      },
    ]);
  
    if (answer.returnToLearnMenu) {
      console.log('Returning to the Learn Menu...');
      await getLearnMenu();
    };
  }
