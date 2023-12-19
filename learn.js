import colors from "colors";

export async function getInitMethodsText() {
    console.log("----------------------------\n");
  
    console.log("🚀 Initialization methods allow you to create and initialize a LavaSDK instance:".green);
    console.log("As of version 0.27 & up, there are".green, "3 ways".bold.blue, "to initialize the SDK".green)
  
    console.log("\n import { LavaSDK } from '@lavanet/lava-sdk'; \n"); 
    // Method: sdkInstance.create()
    console.log("\n1. ".bold.blue, "sdkInstance.create()".bold.blue);
    console.log("   - Automatically makes and initializes a LavaSDK instance.");
    console.log("   - Ideal for quick setup and use.\n");
  
    // Method: new sdkInstance() ... sdkInstance.init()
    console.log("2. ".bold.blue, "new sdkInstance() ... sdkInstance.init()".bold.blue);
    console.log("   - Manually makes and initializes a LavaSDK instance step by step.");
    console.log("   - Provides control over the initialization process.\n");
  
    // Method: new sdkInstance()  ... sdkInstance.sendRelay()
    console.log("3. ".bold.blue, "new sdkInstance() ... sdkInstance.sendRelay()".bold.blue);
    console.log("   - Makes and initializes a LavaSDK instance upon the first relay.");
    console.log("   - Delayed initialization until it's needed.\n");
  
    // End of methods description
    console.log("\n----------------------------\n");
  
};

export async function getInitOptionsText() {
    console.log("----------------------------\n");
    console.log("🚀 Initialization options allow you to configure and customize a LavaSDK instance:".green)
    console.log("As of version 0.27 & up, there are only".green, "2 required".bold.blue, "options".green)

    // Option: privateKey
    console.log("🔑 privateKey:".bold.blue, "Required".green);
    console.log("  The private key with an active subscription to be used in lieu of a badge.\n");

    // Option: badge
    console.log("🏅 badge:".bold.blue, "Required".green);
    console.log("  Public URL of the badge server and ID of the project you want to connect.");
    console.log("  Remove privateKey if a badge is provided.\n");

    // Option: chainIds
    console.log("🌐 chainIds:".bold.blue, "Required".green);
    console.log("  The ID of the chain you want to query or an array of chain IDs.");
    console.log("  Example: 'ETH1' or ['ETH1', 'LAV1']\n");

    // Option: pairingListConfig
    console.log("🔗 pairingListConfig:".bold.blue, "Optional".cyan);
    console.log("  The Lava pairing list config used for communicating with the Lava network.");
    console.log("  Default is 'Lava-providers'.\n");

    // Option: network
    console.log("🌐 network:".bold.blue, "Optional".cyan);
    console.log("  The network from pairingListConfig to be used.");
    console.log("  Example: ['mainnet', 'testnet']\n");

    // Option: geolocation
    console.log("🌍 geolocation:".bold.blue, "Optional".cyan);
    console.log("  The geolocation to be used.");
    console.log("  Example: '1' for North America, '2' for Europe (Default: '1')\n");

    // Option: lavaChainId
    console.log("🌋 lavaChainId:".bold.blue, "Optional".cyan);
    console.log("  The Lava chain ID (Default: 'lava-testnet-2')\n");

    // Option: secure
    console.log("🔒 secure:".bold.blue, "Optional".cyan);
    console.log("  Communicates through HTTPS (Temporary flag, will be disabled once the chain uses HTTPS by default)\n");

    // Option: allowInsecureTransport
    console.log("🔓 allowInsecureTransport:".bold.blue, "Optional".cyan);
    console.log("  Indicates to use an insecure transport when connecting the provider, for testing purposes only\n");

    // Option: logLevel
    console.log("📜 logLevel:".bold.blue, "Optional".cyan);
    console.log("  Log level settings (e.g., 'debug', 'info', 'warn', 'error', 'success', 'NoPrints')\n");

    // Option: transport
    console.log("🚂 transport:".bold.blue, "Optional".cyan);
    console.log("  Transport settings for changing the method of transport\n");

    // Option: providerOptimizerStrategy
    console.log("🎯 providerOptimizerStrategy:".bold.blue, "Optional".cyan);
    console.log("  The strategy to use to pick providers (Default: 'balanced')\n");

    // Option: maxConcurrentProviders
    console.log("⚙️ maxConcurrentProviders:".bold.blue, "Optional".cyan);
    console.log("  The maximum number of providers to use concurrently (Default: 3)\n");

    // End of requirements description
    console.log("\n----------------------------\n");
};

export async function getBadgesPrivateKeysText() {
    console.log("----------------------------\n");

    console.log("🚀 Badges & Private Keys are essential to covering the compute costs of the SDK's relays".green)
    console.log("As of version 0.27 & up, either can be gotten for free at".green, "gateway.lavanet.xyz".bold.blue, "\n")
  
    // Badges
    console.log("🏅 Badges:".bold.blue);
    console.log("   - A secure way to interact with Lava SDK.");
    console.log("   - Consists of multiple parts.");
    console.log("   - Must be signed by a trusted server.");
    console.log("   - Default Badge Server hosted by Lava.");
    console.log("   - No additional configurations needed.\n");
  
    // Private Keys
    console.log("🔑 Private Keys:".bold.blue);
    console.log("   - Risky for frontend usage.");
    console.log("   - Can be unsafe if exposed in the browser.");
    console.log("   - Requires an active subscription for chains.");
    console.log("   - Can be generated from `lavad` or Lava Gateway.");
    console.log("   - Requires careful handling and security measures.\n");
  
    // End of description
    console.log("\n----------------------------\n");
};

export async function getGeolocationText() {
    console.log("----------------------------\n");

    // Explanation
    console.log("🌍 Geolocation is used for selecting providers from the Lava blockchain's provider pairing list.".bold.blue);
    console.log("   - It helps determine the geographic region for provider selection.");
    console.log("   - Selecting a geolocation with no providers on a specific chain can result in errors.");
    console.log(`   - Currently, LavaSDK supports '${"1".bold}' for the United States and '${"2".bold}' for Europe.`);
    console.log("   - As more providers join the network and service chains, additional geolocations will become available.\n");
  
    // End of description
    console.log("\n----------------------------\n");
};

export async function getSendRelayText() {
    console.log("----------------------------");

    // Explanation
    console.log("🛰️ The sendRelay() function allows you to send requests to the blockchain using Lava SDK.".bold.blue);
    console.log("   It provides various options to customize your request:\n");
  
    // SendRelayOptions
    console.log("   ✅ SendRelayOptions:".bold.green);
    console.log("      -", "method:".bold.cyan, "The RPC method to be called", "(Required for most interfaces)".bold.yellow);
    console.log("      -", "params:".bold.cyan, "An array of parameters to be passed to the RPC method", "(Required for most interfaces)".bold.yellow);
    console.log("      -", "connectionType:".bold.cyan, "The HTTP method to be used", "(Required for REST)".italic.green);
    console.log("      -", "url:".bold.cyan, "The API Path (URL)", "(Required for REST)".italic.green);
    console.log("      -", "relays:".bold.cyan, "The relays to send", "(Required for Batch Relays)".italic.grey);
    console.log("      -", "id:".bold.cyan, "The ID of the relay", "(Optional; set to a random number if not specified)".italic.gray);
    console.log("      -", "chainId:".bold.cyan, "The chain ID to send the request to", "(Optional; chosen by default if one chain is initialized)".italic.gray);
    console.log("      -", "metadata:".bold.cyan, "Headers to be sent with the request", "(Optional)".italic.gray);
    console.log("      -", "apiInterface:".bold.cyan, "Specify only if both tendermintrpc and jsonrpc are both supported", "(Optional)".italic.gray);
  
    // End of description
    console.log("----------------------------");
};
