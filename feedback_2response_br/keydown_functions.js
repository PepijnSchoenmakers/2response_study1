// Global scope to handle keypress states
let keyPressed = false;
let currentTrialType = "";  // Track the type of the current trial to handle keys correctly

// Main function to handle keydown event for different trial types
function handleKeyDown(event) {
    // Reset keyPressed to allow multiple presses for grid selection
    keyPressed = false;

    // Handle different trial types by delegating to specific handlers
    if (currentTrialType === "grid_answer") {
        handleGridKeyDown(event);
    } else if (currentTrialType === "trial_response1" || currentTrialType === "trial_response2"|| currentTrialType === "hands1") {
        handleResponseKeyDown(event);
    } else if (currentTrialType === "confidence1" || currentTrialType === "confidence2") {
        handleConfidenceKeyDown(event);
    }
}

// Function to handle keydown for grid trials
function handleGridKeyDown(event) {
    let gridKeyMap = {
        '3': 0,  // Top-left grid (grid1)
        '"': 0,  // Handle different keyboard layouts for '3'
        '8': 1,  // Top-right grid (grid2)
        '_': 1,  // Handle different keyboard layouts for '8'
        'c': 2,  // Bottom-left grid (grid3)
        'n': 3   // Bottom-right grid (grid4)
    };

    if (gridKeyMap.hasOwnProperty(event.key)) {
        let gridIndex = gridKeyMap[event.key];

        // Reset borders for all grids to default (2px solid black)
        $('.grid-box img').css('border', '2px solid black');

        // Apply thicker border to the selected grid
        $('.grid-box').eq(gridIndex).find('img').css('border', '4px solid black');
    }
}

// Function to handle keydown for response trials (trial_response1 or trial_response2)
function handleResponseKeyDown(event) {
    if (event.key === 'n') {
        $('.choice-box').eq(1).css('border', '4px solid black'); // Highlight the right choice box
    } else if (event.key === 'c') {
        $('.choice-box').eq(0).css('border', '4px solid black'); // Highlight the left choice box
    }
}

// Function to handle keydown for confidence trials (confidence1 or confidence2)
function handleConfidenceKeyDown(event) {
    let keyMap = {
        '1': 0, '&': 0, // Handle '1'
        '2': 1, 'é': 1, // Handle '2'
        '3': 2, '"': 2, // Handle '3'
        '8': 3, '_': 3, // Handle '8'
        '9': 4, 'ç': 4, // Handle '9'
        '0': 5, 'à': 5  // Handle '0'
    };

    if (keyMap.hasOwnProperty(event.key)) {
        // Apply bold border to the corresponding choice box
        $('.choice-box').eq(keyMap[event.key]).css('border', '4px solid black');
    }
}

// Function to handle keyup event (common for all trial types)
function handleKeyUp(event) {
    let allowedKeys = ['n', 'c', '1', '2', '3', '8', '9', '0', '&', 'é', '"', '_', '!', 'ç', 'à'];

    if (currentTrialType === "grid_answer") {
        allowedKeys.push('3', '8', 'c', 'n');
    }

    if (allowedKeys.includes(event.key) && keyPressed) {
        keyPressed = false;  // Reset keyPressed for future trials
        jsPsych.finishTrial();  // Optionally finish the trial on key release
    }
}

// Function to attach keydown and keyup listeners for specific trial types
function attachKeyListeners(trialType) {
    currentTrialType = trialType;  // Set the current trial type (grid, response, or confidence)
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
}

// Function to clean up event listeners after the trial
function removeKeyListeners() {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);
}
