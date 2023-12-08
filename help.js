import colors from "colors";

export async function showHelp() {

    console.log("----------------------------");

    console.log("Welcome to the Lava SDK Gallery! This application provides a collection of examples and resources to help you understand and use the Lava SDK.");

    console.log("\n🚀 Examples:".bold.green);
    console.log("   - Explore a variety of example usages of the Lava SDK.");
    console.log("   - Choose '🔨 Build an Example' to create your own custom example.");
    console.log("   - Select '🧰 Use Prebuilt Examples' to use pre-made examples.");

    console.log("\n📚 Learn:".bold.blue);
    console.log("   - Learn more about specific topics related to the Lava SDK.");
    console.log("   - Access documentation on initialization methods, options, badges, geolocation, and the sendRelay() function.");
    console.log("   - Navigate through the Learn Menu to access valuable resources.");

    console.log("\n🌋 Getting Started:".bold.magenta);
    console.log("   - Get started with the Lava SDK and explore its features.");
    console.log("   - Find guides and tutorials to help you on your journey.");

    console.log("\n❌ Quit:".bold.yellow);
    console.log("   - Exit the Lava SDK Gallery.");

    console.log("\nRepository is available at", "https://github.com/KagemniKarimu/lava-sdk-gallery".underline.bold);
    console.log("For more details, visit the Lava SDK documentation at https://docs.lavanet.xyz");

    console.log("----------------------------");
};