import colors from 'colors';

export async function getGettingStartedText() {

    console.log("----------------------------\n");
    console.log("🌟 Begin your Lava SDK journey with these steps:".bold.green);
    
    console.log("   1️⃣ Sign up to the Gateway. 👉🏿 Register now if you haven’t already!", "gateway.lavanet.xyz".italic.red);
    console.log("   2️⃣ Create a Project and Select your APIs!");
    console.log("   3️⃣ Open an API and click LavaSDK.");
    console.log("   4️⃣ Install the SDK into your project using npm:".bold.cyan);
    console.log("       ", "npm install @lavanet/lava-sdk".bold.blue);
    console.log("   5️⃣ Copy & paste your code snippet into your project to get started.");
    
    console.log("\nFor more detailed instructions, explore these resources:".bold.green);
    console.log("   - 📽️ Video Demonstration (11 minutes):", "https://docs.lavanet.xyz/sdk-getting-started#-video-demonstration-11m".underline);
    console.log("   - 📖 Written Guide (5 minutes):", "https://docs.lavanet.xyz/sdk-getting-started#-written-guide-5m".underline);
    
    console.log("----------------------------\n");
    
};