// Welcome message
const instr_welcome = '<p>Welcome to the experiment!</p><p><strong>Read the following information carefully.</strong></p>';

// Study overview
const instr_overview = '<p>In this study, you will be shown 6 blocks of 20 statements, with each block pertaining to a different scientific question. Your task is to determine whether each statement is true or false.</p>';

// Two-response format explanation
const instr_two_response_intro = '<p>We want to know what your initial, intuitive response to these statements is and how you respond after you have thought about the statement for some more time.</p>';

const instr_two_response_detail = `<p>Hence, as soon as the statement is presented, we will ask you to select your intuitive response. 
We want you to respond with the very first answer that comes to mind. You don't need to think about it. 
Just give the first answer that comes to mind as quickly as possible.</p>

<p>Next, the statement will be presented again and you can take all the time you want to actively reflect on it. 
Once you have made up your mind you select your final response. You will have as much time as you need to indicate your second response.</p>

<p>In sum, keep in mind that it is really crucial that you give your first, initial response as fast as possible. 
Afterwards, you can take as much time as you want to reflect on the statement and select your final response.</p>`;

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
const instr_practice_1 = `<p>You will now see two practice statements for which there is no time-limit yet and only one response required, 
just so you can get familiar with the format. Each statement will be preceded by a fixation cross.</p>
<p>Press C or N to continue.</p>`;

// Two-response practice instructions
const instr_practice_2 = `<p>You have completed the first two practice statements. In the next section, we will present two statements in the two-response format.</p>

<p>To recap, first we want you to respond with the very first answer that comes to mind. You don't need to think about it. 
Just give the first answer that comes to mind as quickly as possible. To make sure that you answer as fast as possible, 
a time limit was set for the first response which is going to be TBD seconds. Please make sure to answer before the deadline passes.</p>

<p>Next, the statement will be presented again and you can take all the time you want to actively reflect on it. 
Once you have made up your mind you select your final response. You will have as much time as you need to indicate your second response.</p>

<p>Press C or N to continue.</p>`;

// Confidence reminder
const instr_confidence_reminder = `<p>In sum, keep in mind that it is really crucial that you give your first, initial response as fast as possible. 
Afterwards, you can take as much time as you want to reflect on the statement and select your final response.</p>

<p>For both times, once you have selected an answer we will also ask you to indicate how confident you are in that answer.</p>
<p>Press C or N to continue.</p>`;

// Grid memorization instructions
const instr_grid = `<p>In the actual experiment, you will also need to memorize a pattern while you evaluate the statement. 
You will see a grid with crosses and you will have to memorize their location. The difficulty of the pattern might vary. 
Always try to memorize as many crosses as possible. Each cross counts!</p>

<p>We know that it is not always easy to memorize the pattern whilst you are also evaluating the statement. 
The most important thing is to correctly memorize the pattern. First, try to concentrate on the memorization task, 
and then try to evaluate the statement.</p>

<p>You only need to memorize the pattern when giving your first response. 
When you give your final response you can fully focus on the evaluation task.</p>

<p>When selecting grids like this, use 3, 8, C, or N to choose the top-left, top-right, bottom-left, or bottom-right grid, respectively.</p>
<p>Press 3, 8, C, or N to continue.</p>`;


// Main task instructions
const instr_main_task = `<p>Warning! The experiment will begin on the next page. There are 6 blocks of 20 statements in total. 
You will be notified when you are halfway and you can take a short break then if needed.</p>

<p>Some of the statements you are about to see may be difficult to verify, and we do not expect you to know the truth-value of all. 
We simply urge you to try your best.</p>

<p>Remember, you must give your full attention for the duration of the study. Please ensure that you will not be disturbed. 
After you have completed all the trials, you will be asked brief demographic questions.</p>
<p>Press C or N to continue.</p>`;

// Block topic instruction template
const getBlockTopicInstr = (topic) => `<p>This block will pertain to ${topic}.

Press C or N to continue.</p>`;

// Break instruction
const instr_break = '<p>You are now halfway, you can take a short break if you would like to do so.</p><p>Press C or N to continue whenever you are ready.</p>';

// Completion message
const instr_complete = '<p>You have completed all the trials! Please answer the next few demographic questions.</p>';

// Thank you message
const instr_thank_you = '<p>Thank you for participating in this study!</p>';

// Expose instructions on the window object for browser usage
// (module.exports is not available in the browser environment)
window.instructions = {
    instr_welcome,
    instr_overview,
    instr_two_response_intro,
    instr_two_response_detail,
    instr_confidence,
    instr_keyboard_setup,
    instr_response_keys,
    instr_confidence_keys,
    instr_practice_intro,
    instr_practice_1,
    instr_practice_2,
    instr_confidence_reminder,
    instr_grid,
        // // Expose the fused grid instruction under `instr_grid`
        // instr_grid: instr_grid,
    instr_main_task,
    getBlockTopicInstr,
    instr_break,
    instr_complete,
    instr_thank_you
};