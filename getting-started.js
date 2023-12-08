import colors from 'colors';

export async function getGettingStartedText() {

    console.log("   - Begin your Lava SDK journey with these steps:");

    console.log("      1. Sign up to the Gateway. 👉🏿 Register now if you haven’t already!");
    console.log("      2. Create a Project and Select your APIs!");
    console.log("      3. Open an API and click LavaSDK.");
    console.log("      4. Install the SDK into your project using npm:\n");

    console.log("         ", "npm install @lavanet-lava-sdk".bold.cyan, "\n");

    console.log("      5. Copy & paste your code snippet into your project to get started.");

    console.log("\nFor more detailed instructions, explore these resources:");

    console.log("   - 📽️ Video Demonstration (11 minutes):", "https://docs.lavanet.xyz/sdk-getting-started#-video-demonstration-11m".underline);
    console.log("   - 📖 Written Guide (5 minutes):", "https://docs.lavanet.xyz/sdk-getting-started#-written-guide-5m".underline);

    console.log("----------------------------");
};