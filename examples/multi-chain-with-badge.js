
import { LavaSDK } from "@lavanet/lava-sdk";
import ora from "ora";

async function createLavaHandler() {

    const lavaHandler = await LavaSDK.create({
        badge: {
            badgeServerAddress: "https://badges.lavanet.xyz",
            projectId: "1f2cecd3bb19f996997560be2184b8d4"
        },
        chainIds: ["ETH1", "FVM", "NEAR", "COS5", "STRK", "AXELAR"],
    });

    return lavaHandler
}


async function getEthereumBlockNum(lavaHandler) {

    const ethRelay = await lavaHandler.sendRelay({
        chainId: "ETH1",
        method: "eth_blockNumber",
        params: [],
        rpcInterface: "jsonrpc",
    });

    return parseInt(ethRelay.result, 16)
};

async function getFileCoinBlockNum(lavaHandler) {

    const fvmRelay = await lavaHandler.sendRelay({
        chainId: "FVM",
        method: "eth_blockNumber",
        params: [],
        rpcInterface: "jsonrpc",
    });

    return parseInt(fvmRelay.result, 16)
};

async function getNearBlockHeight(lavaHandler) {

    const nearRelay = await lavaHandler.sendRelay({
        chainId: "NEAR",
        method: "block",
        params: { "finality": "final" },
        rpcInterface: "jsonrpc",
    });

    return nearRelay.result.header.height;
};

async function getCosmosBlockHeight(lavaHandler) {

    const cosmosHubRelay = await lavaHandler.sendRelay({
        chainId: "COS5",
        method: "abci_info",
        params: [],
        rpcInterface: "tendermintrpc",
    });

    return cosmosHubRelay.result.response.last_block_height;
};

async function getStarknetBlockNumber(lavaHandler) {

    const starknetRelay = await lavaHandler.sendRelay({
        chainId: "STRK",
        method: "starknet_blockNumber",
        params: [],
        rpcInterface: "jsonrpc",
    });

    return starknetRelay.result;
};

async function getAxelarBlockHeight(lavaHandler) {

    const axelarRelay = await lavaHandler.sendRelay({
        chainId: "AXELAR",
        connectionType: "GET",
        url: "/blocks/latest"
    })

    return axelarRelay.block.header.height
}


export async function useMultiChainWithBadges() {

    const spinner = ora({
        text: 'Initializing Chains...',
        spinner: "binary"
    }).start();

    try {
        const lavaRelayHandler = await createLavaHandler()

        spinner.text = 'Making Calls';
        spinner.stop();

        console.log("\n RESULTS ✨✨✨");
        console.log("==================");
        console.log("Axelar Block Number:", await getAxelarBlockHeight(lavaRelayHandler));
        console.log("Ethereum Block Number:", await getEthereumBlockNum(lavaRelayHandler));
        console.log("Filecoin Block Number:", await getFileCoinBlockNum(lavaRelayHandler));
        console.log("NEAR Block Height:", await getNearBlockHeight(lavaRelayHandler));
        console.log("CosmosHub Block Height:", await getCosmosBlockHeight(lavaRelayHandler));
        console.log("Starknet Block Number:", await getStarknetBlockNumber(lavaRelayHandler));
        console.log("\n");
    } catch (error) {
        spinner.stop();
        console.error('An error occurred:', error);
    };

};