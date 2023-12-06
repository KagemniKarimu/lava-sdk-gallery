import inquirer from 'inquirer';
import colors from 'colors';
import { buildExample } from './examples/custom_ex.js';
import { useMultiChainWithBadges } from './examples/multi-chain-with-badge.js';

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
      await buildExample();
      break;
    case '🧰 Use Prebuilt Examples':
      await getPrebuiltExamplesMenu();
      break;
    case '🔙 Main Menu':
      break;
    default:
      await getExamplesMenu();
  };
};

async function getPrebuiltExamplesMenu() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Prebuilt Examples 🧰:',
      choices: [
        '⚡🌋 Multi-chain ("ETH1", "FVM", "NEAR", "COSHUB", "STRK", "AXELAR") with Badges',
        '🔙 Examples Menu'
      ],
    },
  ]);

  switch (answer.action) {
    case '⚡🌋 Multi-chain ("ETH1", "FVM", "NEAR", "COSHUB", "STRK", "AXELAR") with Badges':
      await useMultiChainWithBadges()
      break;
    case '🔙 Examples Menu':
      break;
    default:
      await getPrebuiltExamplesMenu();
  };
};

