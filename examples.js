import inquirer from 'inquirer';
import colors from 'colors';
import { buildExample } from './examples/custom.js';
import { useMultiChainWithBadges } from './examples/multi-chain-with-badge.js';
import { getEthAddressBalance } from './examples/eth-address-balance-web3.js';

export async function getExamplesMenu() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: '🚀 Examples:',
      choices: [
        '🔨 Build an Example (EXPERIMENTAL)',
        '🧰 Use Prebuilt Examples',
        '🔙 Main Menu'
      ],
    },
  ]);

  switch (answer.action) {
    case '🔨 Build an Example (EXPERIMENTAL)':
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
        '⚡🌋 Multi-chain Block Height ("ETH1", "FVM", "NEAR", "COSHUB", "STRK", "AXELAR") with Badges',
        '💰 Get the Balance on an Ethereum Address using Web3.js Integration',
        '🔙 Examples Menu'
      ],
    },
  ]);

  switch (answer.action) {
    case '⚡🌋 Multi-chain Block Height ("ETH1", "FVM", "NEAR", "COSHUB", "STRK", "AXELAR") with Badges':
      await useMultiChainWithBadges()
      break;
    case '💰 Get the Balance on an Ethereum Address using Web3.js Integration':
      await getEthAddressBalance()
      break;
    case '🔙 Examples Menu':
      break;
    default:
      console.log('Invalid option. Please select a valid option.'.red);
  };
};

