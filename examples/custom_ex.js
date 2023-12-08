import inquirer from 'inquirer';
import colors from 'colors';
import { chainList } from '../chains.js';
import { LavaSDK } from '@lavanet/lava-sdk';
import ora from 'ora';

export async function buildExample() {
  const selectChainsOutput = await selectChains()
  const chosenChains = await selectChainsOutput[0];
  const sdkInstance = await selectChainsOutput[1];
  const selectedAPI = await selectApiInterface(chosenChains)
  const selectedChain = await selectChainForApi(selectedAPI, chosenChains)
  console.log(selectedChain)
  const apiCall = await inputApiCall(selectedAPI)

  await confirmAndExecute(selectedChain, selectedAPI, apiCall, sdkInstance)
}

async function selectChains() {

  const answers = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selectedChains',
      message: 'Select chains to initialize:',
      choices: chainList.map(chain => ({
        name: `⛓️ ${chain.chainName.blue} (${chain.chainID.bold})`,
        value: chain
      })),
      validate: (selectedChains) => {
        if (selectedChains.length === 0) {
          return '\n ⚠️ Please select at least one chain to initialize.';
        }
        return true;
      },
    }
  ]);


  const spinner = ora({
    text: 'Initializing Chains...',
    spinner: "binary"
  }).start();

  const sdkInstance = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz",
      projectId: "1f2cecd3bb19f996997560be2184b8d4",
    },
    chainIds: answers.selectedChains.map(chain => chain.chainID),
  })

  spinner.stop();

  return [answers.selectedChains, sdkInstance]
};


async function selectApiInterface(selectedChains) {
  const apiInterfaces = Array.from(new Set(selectedChains.flatMap(chain => chain.enabledApiInterfaces)));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedApi',
      message: 'Select an API interface:',
      choices: apiInterfaces
    }
  ]);

  return answers.selectedApi
}

async function selectChainForApi(selectedApi, chosenChains) {
  const chains = chosenChains.filter(chain => chain.enabledApiInterfaces.includes(selectedApi));
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedChain',
      message: 'Select a chain:',
      choices: chains.map(chain => ({ name: chain.chainName, value: chain.chainID }))
    }
  ]);

  return answers.selectedChain;
}


async function inputApiCall(apiInterface) {

  if (apiInterface == "rest") {
    const connectionInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'connectionType',
        message: 'Enter the connection type for the API call:',
        default: "GET"
      }
    ]);

    const urlInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'endpointURL',
        message: 'Enter the URL of the Endpoint:',
        default: "/blocks/latest"
      }
    ]);

    return [connectionInput.connectionType, urlInput.endpointURL]

  } else {

    const methodInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'methodName',
        message: 'Enter the method name for the API call:',
        default: "eth_blockNumber"
      }
    ]);

    const paramsInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'parameters',
        message: 'Enter the parameters:',
        default: "[]"
      }
    ]);

    return [methodInput.methodName, paramsInput.parameters]
  }
}


async function confirmAndExecute(selectedChain, selectedApi, apiCall, sdkInstance) {
  console.log(`🌋 You have selected to call the method \"${apiCall[0].bold}\" using ${selectedApi.green} on the following chain ${selectedChain.bgWhite}`);

  let relayString;

  if (selectedApi == "rest") {
    relayString = `
    sendRelay({       
      chainId: "${selectedChain}",
      connectionType: "${apiCall[0]}",
      url: "${apiCall[1]}",
      rpcInterface: "${selectedApi}",
    })`

  } else {
    relayString = `
    sendRelay({       
      chainId: "${selectedChain}",
      method: "${apiCall[0]}",
      params: ${apiCall[1]},
      rpcInterface: "${selectedApi}",
    })`
  };

  console.log(relayString);

  const confirmation = await confirmChoices()

  if (confirmation) {
    console.log("✅ Confirmed. Executing sendRelay...");
    
    
    try {
    let relayResponse;
    if (selectedApi == "rest") {
      relayResponse = await sdkInstance.sendRelay({
        chainId: selectedChain,
        connectionType: apiCall[0],
        url: apiCall[1],
        rpcInterface: selectedApi,
      });
    } else {
      relayResponse = await sdkInstance.sendRelay({
        chainId: selectedChain,
        method: apiCall[0],
        params: apiCall[1],
        rpcInterface: selectedApi,
      });
    };
    console.log(relayResponse);
    
  } catch (error) {
    console.error('An error occured:', error);
  };


  } else {
    console.log("❌ Confirmation declined. Relay not executed.")
  }

};



async function confirmChoices() {

  const answer = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmation',
      message: "Is this the correct API?"
    }
  ]);

  return answer.confirmation
}