import { createViemClientWithLavaSDK } from "@lavanet/lava-viem";
import inquirer from "inquirer";
import ora from "ora";

export async function getEthAddressTxs() {
    await getEthAddress().then((ethAddress) => trackAddressTransactions(ethAddress))
}

async function trackAddressTransactions(address) {
    try {

        const spinner = ora({
            text: 'Initializing viem Provider...',
            spinner: "binary"
        }).start();

        const viem = await createViemClientWithLavaSDK({
            badge: {
                badgeServerAddress: "https://badges.lavanet.xyz",
                projectId: "1f2cecd3bb19f996997560be2184b8d4",
            },
            chainIds: "ETH1",
            geolocation: "1",
        });

        spinner.text = "Getting Latest Block Number..."
        spinner.spinner = "dots"

        const latestBlockNumber = Number(await viem.getBlockNumber())
        console.log(latestBlockNumber)

        spinner.text = "Getting Last 50 Blocks Data...";

        const blockFetchPromises = [];
        for (let i = 0; i < 50; i++) {
            const hexBlockNumber = '0x' + (latestBlockNumber - i).toString(16);
            blockFetchPromises.push(viem.request({
                method: "eth_getBlockByNumber",
                params: [hexBlockNumber, true],
            }));
        }

        const blocks = await Promise.all(blockFetchPromises);

        spinner.text = "Gathering transactions of interest..."

        const transactionsOfInterest = blocks.flatMap(block => block.transactions)
        .filter(tx => (tx.from == address || tx.to == address));

        spinner.stop();

        console.log(`Transactions in the last 50 blocks for address ( ${address.green} ):`);
        if (transactionsOfInterest.length > 0) {
        transactionsOfInterest.forEach(tx => {
            console.log("✨✨✨ TX Found! ")
             console.log(`Tx Hash: ${tx.hash.green}, From: ${tx.from}, To: ${tx.to}, Value: ${tx.value}`);
        });} else {
             console.log('No TX found! \n'.red)
        };

    } catch (error) {
        console.error('Error fetching balance:', error);
    }
}

async function getEthAddress() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'ethAddress',
            message: 'Enter an Ethereum address to track its recent TXs:',
            validate: (input) => {
                if (/^0x[a-fA-F0-9]{40}$/.test(input)) {
                    return true;
                }
                return 'Please enter a valid Ethereum address (hexadecimal format).';
            },
        },
    ]);

    const { ethAddress } = answers;

    return ethAddress;

};
