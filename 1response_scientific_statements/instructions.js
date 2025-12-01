// Welcome message
const instr_welcome = '<p>Welcome to the experiment!</p><p><strong>Read the following information carefully.</strong></p>';

// Study overview
const instr_overview = '<p>In this study, you will be shown 6 blocks of 20 statements, with each block pertaining to a different scientific question. Your task is to determine whether each statement is true or false. Your judgments will be timed.</p>';

// Single-response format explanation
const instr_single_response_detail = `<p>You will evaluate each statement once. Decide whether the statement is true or false using the keyboard.</p>`;

// Confidence rating instruction
const instr_confidence = '<p>Once you have selected an answer, we will also ask you to indicate how confident you are in that answer.</p>';

// Keyboard setup instructions
const instr_keyboard_setup = `<p>Before we begin, you will learn to use the keyboard to select your answers. 
Place your fingers as indicated on the keyboard with your <strong>thumbs on C and N </strong> and your <strong>ring-middle-index fingers on 1-2-3 and 8-9-0 </strong>.</p>
<p>Press C or N to continue.</p>`;

// Response key instructions
const instr_response_keys = '<p>When giving your response to the statements you will use C for "True" and N for "False".</p><p>Press C or N to continue.</p>';

// Confidence key instructions
const instr_confidence_keys = `<p>When you have selected an answer we will also ask you to indicate how confident you are in your answer. 
When giving your confidence you will use: keys 1, 2, 3, 8, 9, and 0.</p>
<p>Press 1, 2, 3, 8, 9, or 0 to continue.</p>`;

// Practice trials introduction
const instr_practice_intro = '<p>We are going to start with a few practice items.</p><p>Press C or N to continue.</p>';

// First practice block instructions
const instr_practice_1 = `<p>You will now see six practice statements in the exact format used in the main task: one true/false response per statement, and the subsequent confidence question. Each statement will be preceded by a fixation cross.</p>
<p>Press C or N to continue.</p>`;

// Main task instructions
const instr_main_task = `<p>Warning! The experiment will begin on the next page. There are 6 blocks of 20 statements in total. 
You will be notified when you are halfway and you can take a short break then if needed.</p>

<p>Some of the statements you are about to see may be difficult to verify, and we do not expect you to know the truth-value of all. 
We simply urge you to try your best.</p>

<p>Remember, you must give your full attention for the duration of the study. Please ensure that you will not be disturbed. 
After you have completed all the trials, you will be asked brief demographic questions.</p>

<p>Press C or N to continue.</p>`;

// Block topic instruction template with counter
const getBlockTopicInstr = (topic, blockNumber, totalBlocks = 6) => {
    const current = Number(blockNumber);
    const total = Number(totalBlocks) || 6;
    const counter = Number.isFinite(current) ? `<p><strong>Block ${current} of ${total}</strong></p>` : '';
    return `${counter}<p>The next block will pertain to ${topic}.</p><p>Press C or N to continue.</p>`;
};

// Break instruction
const instr_break = `<p>You are now halfway, you can take a short break if you would like to do so.</p>

<p>Press C or N to continue whenever you are ready.</p>`;

// Completion message
const instr_complete = '<p>You have completed all the trials! Please answer the next few demographic questions.</p>';

// Thank you message
const instr_thank_you = '<p>Thank you for participating in this study!</p>';

// Expose instructions on the window object for browser usage
// (module.exports is not available in the browser environment)
window.instructions = {
    instr_welcome,
    instr_overview,
    instr_single_response_detail,
    instr_confidence,
    instr_keyboard_setup,
    instr_response_keys,
    instr_confidence_keys,
    instr_practice_intro,
    instr_practice_1,
        // // Expose the fused grid instruction under `instr_grid`
        // instr_grid: instr_grid,
    instr_main_task,
    getBlockTopicInstr,
    instr_break,
    instr_complete,
    instr_thank_you
};
