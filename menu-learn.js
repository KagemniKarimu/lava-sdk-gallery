import inquirer from 'inquirer';
import colors from 'colors';
import { getInitMethodsText, getInitOptionsText, getBadgesPrivateKeysText, getGeolocationText, getSendRelayText} from './learn.js';

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
            getInitMethodsText();
            await returnToLearnMenuPrompt();
            break;
        case '🔧 Init Options':
            getInitOptionsText();
            await returnToLearnMenuPrompt();
            break;
        case '📛 Badges / 🔑 PrivateKeys':
            getBadgesPrivateKeysText();
            await returnToLearnMenuPrompt();
            break;
        case '🌍 Geolocation':
            getGeolocationText();
            await returnToLearnMenuPrompt();
            break;
        case '🛰️ sendRelay() Function':
            getSendRelayText();
            await returnToLearnMenuPrompt();
            break;
        case '🔙 Main Menu':
            console.log("Returning to Main Menu".red)
            console.log("\n")
            break;
        default:
            console.log('Invalid option. Please select a valid option.'.red);
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

    if (answer) {
        console.log('Returning to the Learn Menu... \n');
        await getLearnMenu();
    };
}
