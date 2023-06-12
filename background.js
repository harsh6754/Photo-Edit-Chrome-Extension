// background.js

// Event listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    // Perform any necessary initialization or setup here
});

// Event listener for messages from the popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'imageData') {
        // Handle the received image data here
        // You can perform photo editing operations or other processing

        // Send a response back to the sender if needed
        sendResponse({ success: true });
    }
});
