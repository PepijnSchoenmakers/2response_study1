// Track the current trial type to handle keys correctly
let currentTrialType = "";

// Main function to handle keydown event for different trial types
function handleKeyDown(event) {
    // Normalize the key where useful (handle uppercase letters)
    const key = event.key;

    // Delegate to specific handlers by trial type
    if (currentTrialType === "grid_answer") {
        handleGridKeyDown(key);
    } else if (currentTrialType === "trial_response1" || currentTrialType === "trial_response2" || currentTrialType === "hands1") {
        handleResponseKeyDown(key);
    } else if (currentTrialType === "confidence1" || currentTrialType === "confidence2") {
        handleConfidenceKeyDown(key);
    }
}

// Function to handle keydown for grid trials
function handleGridKeyDown(key) {
    // Map many keyboard layout variants to the four grid indices
    const k = key.toLowerCase();
    let gridKeyMap = {
        '3': 0, '"': 0, // top-left
        '8': 1, '_': 1, '!': 1, // top-right (include ! for AZERTY)
        'c': 2, 'C': 2, // bottom-left
        'n': 3, 'N': 3  // bottom-right
    };

    if (gridKeyMap.hasOwnProperty(key) || gridKeyMap.hasOwnProperty(k)) {
        let gridIndex = gridKeyMap[key] !== undefined ? gridKeyMap[key] : gridKeyMap[k];

        // Reset borders for all grids to default (2px solid black)
        $('.grid-box img').css('border', '2px solid black');

        // Apply thicker border to the selected grid, then clear after a short delay
        $('.grid-box').eq(gridIndex).find('img').css('border', '4px solid black');
        setTimeout(function () {
            $('.grid-box img').css('border', '2px solid black');
        }, 250);
    }
}

// Function to handle keydown for response trials (trial_response1 or trial_response2)
function handleResponseKeyDown(key) {
    // Accept uppercase as well
    const k = key.toLowerCase();

    // Reset choice-box borders first
    $('.choice-box').css('border', '2px solid #000');

    if (k === 'n') {
        $('.choice-box').eq(1).css('border', '4px solid black'); // Highlight the right choice box
        setTimeout(function () { $('.choice-box').eq(1).css('border', '2px solid #000'); }, 250);
    } else if (k === 'c') {
        $('.choice-box').eq(0).css('border', '4px solid black'); // Highlight the left choice box
        setTimeout(function () { $('.choice-box').eq(0).css('border', '2px solid #000'); }, 250);
    }
}

// Function to handle keydown for confidence trials (confidence1 or confidence2)
function handleConfidenceKeyDown(key) {
    const k = key;
    // Map many variants to confidence indices
    const keyMap = {
        '1': 0, '&': 0,
        '2': 1, 'é': 1,
        '3': 2, '"': 2,
        '8': 3, '_': 3, '!': 3,
        '9': 4, 'ç': 4,
        '0': 5, 'à': 5
    };

    const idx = keyMap[k] !== undefined ? keyMap[k] : keyMap[k.toLowerCase()];
    if (idx !== undefined) {
        // Reset all choice-box borders then highlight
        $('.choice-box').css('border', '2px solid #000');
        $('.choice-box').eq(idx).css('border', '4px solid black');
        setTimeout(function () { $('.choice-box').eq(idx).css('border', '2px solid #000'); }, 250);
    }
}

// Function to handle keyup event (common for all trial types)
function handleKeyUp(event) {
    // No-op: we do not finish trials here since jsPsych plugin handles trial endings.
    // This function is retained for compatibility, but does not call jsPsych.finishTrial().
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
