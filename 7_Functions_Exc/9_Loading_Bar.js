function loadingBar(progress) {
    // Determine the number of '%' symbols
    const percentSymbols = progress / 10;
    // Create the loading bar with '%' for completed parts and '.' for incomplete
    const bar = '%'.repeat(percentSymbols) + '.'.repeat(10 - percentSymbols);
    
    // Check if the loading is complete
    if (progress === 100) {
        console.log("100% Complete!\n[%%%%%%%%%%]");
    } else {
        console.log(`${progress}% [${bar}]\nStill loading...`);
    }
}