import inquirer from 'inquirer';
import colors from 'colors';
import { chainList } from '../chains.js';

export async function buildExample() {
    const chosenChains = await selectChains()
    const selectedAPI = await selectApiInterface(chosenChains)
    const selectedChain = await selectChainForApi(selectedAPI, chosenChains)
    console.log(selectedChain)
    const apiCall = await inputApiCall()

    await confirmAndExecute(selectedChain, selectedAPI, apiCall[0])
}

async function selectChains() {
    console.log("test")
    const answers = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedChains',
        message: 'Select chains to make calls on:',
        choices: chainList.map(chain => ({
          name: `⛓️ ${chain.chainName.blue} (${chain.chainID.bold})`,
          value: chain
        }))
      }
    ]);
    return answers.selectedChains
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
  

async function inputApiCall() {
    const methodInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'methodName',
        message: 'Enter the method name for the API call:'
      }
    ]);

    const paramsInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'parameters',
      message: 'Input the parameters! (Default: [])'
    }
    ]);

    return [methodInput.methodName, paramsInput.parameters] 
  }
  

async function confirmAndExecute(selectedChain, selectedApi, methodName) {
    console.log(`🌋 You have selected to call the method \"${methodName.bold}\" using ${selectedApi.green} on the following chain ${selectedChain.bgWhite}`);
    // Here you can add logic to execute the mock call or relay the information

    const answer = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmation',
            message: "Is this the correct API?"
        }
    ]);


    if (answer.confirmation) {
        console.log("accept confirmation!");
    } else if (!answer.confirmation) {
        console.log("reject confirmation!");
    } else {
        console.log("error");
    }
  }