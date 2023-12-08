import inquirer from 'inquirer';
import { LavaWeb3Provider } from '@lavanet/lava-web3';
import Web3 from 'web3';
import ora from 'ora'

export async function getEthAddressBalance() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'ethAddress',
      message: 'Enter an Ethereum address to check its balance:',
      validate: (input) => {
        if (/^0x[a-fA-F0-9]{40}$/.test(input)) {
          return true;
        }
        return 'Please enter a valid Ethereum address (hexadecimal format).';
      },
    },
  ]);

  const { ethAddress } = answers;

  try {

    const spinner = ora({
        text: 'Initializing Web3 Provider...',
        spinner: "binary"
    }).start();

    // Create a LavaWeb3Provider
    const provider = await LavaWeb3Provider.create({
        badge: {
            badgeServerAddress: "https://badges.lavanet.xyz",
            projectId: "1f2cecd3bb19f996997560be2184b8d4"
        },
      chainIds: 'ETH1',
      geolocation: '1', // Optional: Specify geolocation
    });

    spinner.text = "Connecting to Web3 Provider..."
    spinner.spinner = "dots"
    // Create a Web3 instance with the LavaWeb3Provider
    const web3 = new Web3(provider);

    spinner.text = "Getting Balance..."
    spinner.spinner = "dots"
    // Use the Web3 instance to fetch the balance
    const balanceInWei = await web3.eth.getBalance(ethAddress);
    const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');

    spinner.stop();

    console.log("\n Balance of Address (".green, ethAddress, ")".green, "\n", balanceInEther.blue.bold, "ETH".blue, "\n");
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
};
