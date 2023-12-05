import inquirer from 'inquirer';
import colors from 'colors';
import { buildExample } from './examples/custom_ex.js';

export async function getExamplesMenu() {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Examples 💛:',
            choices: [
                '🔨 Build an Example',
                '🧰 Use Prebuilt Examples',
                '🔙 Main Menu'
            ],
        },
    ]);

    switch (answer.action) {
      case '🔨 Build an Example':
        await buildExample()
        break;
      case '🧰 Use Prebuilt Examples':
        console.log("not implemented...");
        break;
      case '🔙 Main Menu':
        break;
      default:
        await getExamplesMenu();
    }
};
