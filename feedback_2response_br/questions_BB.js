//list to load images before experiment
var grid_list = [
    "grids/1.png", "grids/2.png", "grids/3.png", "grids/4.png", "grids/5.png",
    "grids/6.png", "grids/7.png", "grids/8.png", "grids/9.png", "grids/10.png",
    "grids/11.png", "grids/12.png", "grids/13.png", "grids/14.png", "grids/15.png",
    "grids/16.png", "grids/17.png", "grids/18.png", "grids/19.png", "grids/20.png",
    "grids/21.png", "grids/22.png", "grids/23.png", "grids/24.png", "grids/25.png",
    "grids/26.png", "grids/27.png", "grids/28.png", "grids/29.png", "grids/30.png",
    "grids/31.png", "grids/32.png", "grids/33.png", "grids/34.png", "grids/35.png",
    "grids/36.png", "grids/37.png", "grids/38.png", "grids/39.png", "grids/40.png",
    "grids/41.png", "grids/42.png", "grids/43.png", "grids/44.png", "grids/45.png",
    "grids/46.png", "grids/47.png", "grids/48.png", "grids/49.png", "grids/50.png",
    "grids/51.png", "grids/52.png", "grids/53.png", "grids/54.png", "grids/55.png",
    "grids/56.png", "grids/57.png", "grids/58.png", "grids/59.png", "grids/60.png",
    "grids/61.png", "grids/62.png", "grids/63.png", "grids/64.png", "grids/65.png",
    "grids/66.png", "grids/67.png", "grids/68.png", "grids/69.png", "grids/70.png",
    "grids/71.png", "grids/72.png", "grids/73.png", "grids/74.png", "grids/75.png",
    "grids/76.png", "grids/77.png", "grids/78.png", "grids/79.png", "grids/80.png",
    "grids/81.png", "grids/82.png", "grids/83.png", "grids/84.png", "grids/85.png",
    "grids/86.png", "grids/87.png", "grids/88.png", "grids/89.png", "grids/90.png",
    "grids/91.png", "grids/92.png", "grids/93.png", "grids/94.png", "grids/95.png",
    "grids/96.png", "grids/97.png", "grids/98.png", "grids/99.png", "grids/100.png",
    "grids/101.png", "grids/102.png", "grids/103.png", "grids/104.png", "grids/105.png",
    "grids/106.png", "grids/107.png", "grids/108.png", "grids/109.png", "grids/110.png",
    "grids/111.png", "grids/112.png", "grids/113.png", "grids/114.png", "grids/115.png",
    "grids/116.png", "grids/117.png", "grids/118.png", "grids/119.png", "grids/120.png",
    "grids/121.png", "grids/122.png", "grids/123.png", "grids/124.png", "grids/125.png",
    "grids/126.png"
];

// list of pratice quads (contain bad (easy) target grids)

var grid_practice = [
    ["grids/121.png", "grids/120.png", "grids/2.png", "grids/3.png"],
    ["grids/91.png", "grids/90.png", "grids/37.png", "grids/38.png"],
    ["grids/1.png", "grids/2.png", "grids/123.png", "grids/124.png"],
    ["grids/44.png", "grids/45.png", "grids/104.png", "grids/103.png"],
    ["grids/125.png", "grids/126.png", "grids/23.png", "grids/24.png"],
    ["grids/62.png", "grids/63.png", "grids/46.png", "grids/45.png"],
    ["grids/115.png", "grids/116.png", "grids/3.png", "grids/4.png"],
    ["grids/14.png", "grids/15.png", "grids/98.png", "grids/97.png"],
    ["grids/3.png", "grids/4.png", "grids/115.png", "grids/116.png"],
    ["grids/109.png", "grids/110.png", "grids/10.png", "grids/11.png"]
]

//list of 120 lists of four grids, first is the target. List made according to Raolison rules. Script saved: /Users/zoepurcell/Library/CloudStorage/GoogleDrive-zoepurcell19@gmail.com/My Drive/a Research Projects/Confidence Feedback - Two Response/experiment/load matrices (with script)/Load matrices_ZP2.R
var grid_quads = [
    ["grids/8.png", "grids/9.png", "grids/106.png", "grids/107.png"],
    ["grids/10.png", "grids/11.png", "grids/109.png", "grids/110.png"],
    ["grids/11.png", "grids/10.png", "grids/103.png", "grids/104.png"],
    ["grids/12.png", "grids/13.png", "grids/99.png", "grids/100.png"],
    ["grids/13.png", "grids/14.png", "grids/98.png", "grids/97.png"],
    ["grids/15.png", "grids/14.png", "grids/97.png", "grids/98.png"],
    ["grids/16.png", "grids/17.png", "grids/101.png", "grids/100.png"],
    ["grids/17.png", "grids/18.png", "grids/106.png", "grids/107.png"],
    ["grids/18.png", "grids/17.png", "grids/94.png", "grids/95.png"],
    ["grids/19.png", "grids/20.png", "grids/95.png", "grids/94.png"],
    ["grids/20.png", "grids/21.png", "grids/97.png", "grids/98.png"],
    ["grids/21.png", "grids/20.png", "grids/112.png", "grids/113.png"],
    ["grids/22.png", "grids/23.png", "grids/90.png", "grids/91.png"],
    ["grids/23.png", "grids/24.png", "grids/125.png", "grids/126.png"],
    ["grids/25.png", "grids/26.png", "grids/84.png", "grids/83.png"],
    ["grids/26.png", "grids/25.png", "grids/83.png", "grids/84.png"],
    ["grids/27.png", "grids/28.png", "grids/91.png", "grids/90.png"],
    ["grids/28.png", "grids/29.png", "grids/81.png", "grids/80.png"],
    ["grids/29.png", "grids/30.png", "grids/80.png", "grids/81.png"],
    ["grids/30.png", "grids/29.png", "grids/76.png", "grids/77.png"],
    ["grids/31.png", "grids/32.png", "grids/74.png", "grids/75.png"],
    ["grids/32.png", "grids/33.png", "grids/116.png", "grids/117.png"],
    ["grids/34.png", "grids/35.png", "grids/84.png", "grids/83.png"],
    ["grids/36.png", "grids/35.png", "grids/73.png", "grids/74.png"],
    ["grids/39.png", "grids/40.png", "grids/109.png", "grids/110.png"],
    ["grids/40.png", "grids/39.png", "grids/67.png", "grids/68.png"],
    ["grids/42.png", "grids/43.png", "grids/65.png", "grids/64.png"],
    ["grids/43.png", "grids/42.png", "grids/69.png", "grids/70.png"],
    ["grids/46.png", "grids/45.png", "grids/102.png", "grids/103.png"],
    ["grids/48.png", "grids/49.png", "grids/61.png", "grids/60.png"],
    ["grids/49.png", "grids/48.png", "grids/59.png", "grids/60.png"],
    ["grids/50.png", "grids/51.png", "grids/98.png", "grids/97.png"],
    ["grids/51.png", "grids/52.png", "grids/77.png", "grids/78.png"],
    ["grids/52.png", "grids/51.png", "grids/66.png", "grids/67.png"],
    ["grids/53.png", "grids/54.png", "grids/65.png", "grids/64.png"],
    ["grids/54.png", "grids/55.png", "grids/94.png", "grids/95.png"],
    ["grids/55.png", "grids/56.png", "grids/73.png", "grids/74.png"],
    ["grids/57.png", "grids/58.png", "grids/126.png", "grids/125.png"],
    ["grids/58.png", "grids/59.png", "grids/125.png", "grids/126.png"],
    ["grids/59.png", "grids/60.png", "grids/124.png", "grids/125.png"],
    ["grids/60.png", "grids/61.png", "grids/49.png", "grids/48.png"],
    ["grids/61.png", "grids/60.png", "grids/48.png", "grids/49.png"],
    ["grids/63.png", "grids/64.png", "grids/43.png", "grids/42.png"],
    ["grids/65.png", "grids/64.png", "grids/118.png", "grids/119.png"],
    ["grids/66.png", "grids/67.png", "grids/117.png", "grids/116.png"],
    ["grids/67.png", "grids/68.png", "grids/51.png", "grids/52.png"],
    ["grids/69.png", "grids/70.png", "grids/43.png", "grids/42.png"],
    ["grids/70.png", "grids/71.png", "grids/113.png", "grids/114.png"],
    ["grids/71.png", "grids/70.png", "grids/37.png", "grids/38.png"],
    ["grids/73.png", "grids/74.png", "grids/32.png", "grids/33.png"],
    ["grids/75.png", "grids/74.png", "grids/108.png", "grids/109.png"],
    ["grids/76.png", "grids/77.png", "grids/36.png", "grids/35.png"],
    ["grids/78.png", "grids/77.png", "grids/50.png", "grids/51.png"],
    ["grids/79.png", "grids/80.png", "grids/49.png", "grids/48.png"],
    ["grids/80.png", "grids/81.png", "grids/103.png", "grids/104.png"],
    ["grids/81.png", "grids/80.png", "grids/27.png", "grids/28.png"],
    ["grids/82.png", "grids/83.png", "grids/25.png", "grids/26.png"],
    ["grids/84.png", "grids/83.png", "grids/99.png", "grids/100.png"],
    ["grids/86.png", "grids/87.png", "grids/23.png", "grids/24.png"],
    ["grids/88.png", "grids/89.png", "grids/40.png", "grids/39.png"],
    ["grids/89.png", "grids/90.png", "grids/25.png", "grids/26.png"],
    ["grids/90.png", "grids/91.png", "grids/28.png", "grids/29.png"],
    ["grids/93.png", "grids/94.png", "grids/18.png", "grids/17.png"],
    ["grids/94.png", "grids/95.png", "grids/18.png", "grids/17.png"],
    ["grids/96.png", "grids/97.png", "grids/52.png", "grids/51.png"],
    ["grids/97.png", "grids/98.png", "grids/86.png", "grids/87.png"],
    ["grids/99.png", "grids/100.png", "grids/18.png", "grids/17.png"],
    ["grids/100.png", "grids/101.png", "grids/12.png", "grids/13.png"],
    ["grids/101.png", "grids/100.png", "grids/47.png", "grids/48.png"],
    ["grids/102.png", "grids/103.png", "grids/46.png", "grids/45.png"],
    ["grids/103.png", "grids/104.png", "grids/20.png", "grids/21.png"],
    ["grids/105.png", "grids/106.png", "grids/43.png", "grids/42.png"],
    ["grids/106.png", "grids/107.png", "grids/10.png", "grids/11.png"],
    ["grids/107.png", "grids/106.png", "grids/76.png", "grids/77.png"],
    ["grids/108.png", "grids/109.png", "grids/15.png", "grids/14.png"],
    ["grids/116.png", "grids/117.png", "grids/32.png", "grids/33.png"],
    ["grids/117.png", "grids/116.png", "grids/16.png", "grids/17.png"],
    ["grids/118.png", "grids/119.png", "grids/6.png", "grids/5.png"],
    ["grids/119.png", "grids/120.png", "grids/2.png", "grids/3.png"],
    ["grids/120.png", "grids/121.png", "grids/4.png", "grids/5.png"],
    ["grids/122.png", "grids/123.png", "grids/26.png", "grids/25.png"],
    ["grids/123.png", "grids/124.png", "grids/25.png", "grids/26.png"],
    ["grids/61.png", "grids/60.png", "grids/48.png", "grids/49.png"],
    ["grids/63.png", "grids/64.png", "grids/120.png", "grids/121.png"],
    ["grids/65.png", "grids/64.png", "grids/42.png", "grids/43.png"],
    ["grids/66.png", "grids/67.png", "grids/39.png", "grids/40.png"],
    ["grids/67.png", "grids/68.png", "grids/40.png", "grids/39.png"],
    ["grids/69.png", "grids/70.png", "grids/37.png", "grids/38.png"],
    ["grids/70.png", "grids/71.png", "grids/113.png", "grids/114.png"],
    ["grids/71.png", "grids/70.png", "grids/37.png", "grids/38.png"],
    ["grids/73.png", "grids/74.png", "grids/33.png", "grids/32.png"],
    ["grids/75.png", "grids/74.png", "grids/31.png", "grids/32.png"],
    ["grids/76.png", "grids/77.png", "grids/30.png", "grids/29.png"],
    ["grids/78.png", "grids/77.png", "grids/29.png", "grids/30.png"],
    ["grids/79.png", "grids/80.png", "grids/33.png", "grids/32.png"],
    ["grids/80.png", "grids/81.png", "grids/48.png", "grids/49.png"],
    ["grids/81.png", "grids/80.png", "grids/102.png", "grids/103.png"],
    ["grids/82.png", "grids/83.png", "grids/36.png", "grids/35.png"],
    ["grids/84.png", "grids/83.png", "grids/24.png", "grids/25.png"],
    ["grids/86.png", "grids/87.png", "grids/23.png", "grids/24.png"],
    //adding 20 more quads to reach 120 total from (https://docs.google.com/spreadsheets/d/1JGTu34U017vsMyl8uODJPu189euN6SqMezI4PRU8vCU/edit?gid=940057898#gid=940057898)
    ["grids/8.png", "grids/9.png", "grids/106.png", "grids/107.png"],
    ["grids/20.png", "grids/21.png", "grids/94.png", "grids/95.png"],
    ["grids/22.png", "grids/23.png", "grids/89.png", "grids/90.png"],
    ["grids/25.png", "grids/26.png", "grids/123.png", "grids/124.png"],
    ["grids/31.png", "grids/32.png", "grids/117.png", "grids/116.png"],
    ["grids/27.png", "grids/28.png", "grids/121.png", "grids/120.png"],
    ["grids/32.png", "grids/33.png", "grids/75.png", "grids/74.png"],
    ["grids/34.png", "grids/35.png", "grids/114.png", "grids/113.png"],
    ["grids/36.png", "grids/35.png", "grids/76.png", "grids/77.png"],
    ["grids/42.png", "grids/43.png", "grids/70.png", "grids/71.png"],
    ["grids/11.png", "grids/10.png", "grids/122.png", "grids/123.png"],
    ["grids/48.png", "grids/49.png", "grids/70.png", "grids/71.png"],
    ["grids/53.png", "grids/54.png", "grids/95.png", "grids/94.png"],
    ["grids/54.png", "grids/55.png", "grids/64.png", "grids/65.png"],
    ["grids/55.png", "grids/56.png", "grids/93.png", "grids/94.png"],
    ["grids/78.png", "grids/77.png", "grids/105.png", "grids/106.png"],
    ["grids/79.png", "grids/80.png", "grids/104.png", "grids/103.png"],
    ["grids/81.png", "grids/80.png", "grids/31.png", "grids/32.png"],
    ["grids/88.png", "grids/89.png", "grids/26.png", "grids/25.png"],
    ["grids/89.png", "grids/90.png", "grids/22.png", "grids/23.png"],
];

//practice stimuli (hard coded, same for everyone)
//info for practice with grids using item_order > 72 so that we can match to grid quads without overlapping with other item_orders
var trial_info_practice1 = [
    { item_order: 1001, item: 'Practice 1', stimulus1: '<p>Mark has $10 in his pocket.</p>', stimulus2: '<p>Mark has $10 in his pocket.</p><p>Mark gives $5 to his friend, Tom.</p><p>How much money does Mark have left in his pocket?</p><p><span style="color: gray">C = left option and N = right option</span></p>', choices: ['10', ' 5'], QuestionType: 'practice', correct_response: '$5', condition: 'practice', conf_stimulus: '<p>How confident are you in this response?</p><p><span style="color: gray">1 = Definitely wrong, 2 = Suspected wrong, 3 = Guessed wrong, 4 = Guessed right, 5 = Suspected right, 6 = Definitely right.</span></p>' },
    { item_order: 1002, item: 'Practice 2', stimulus1: '<p>Miriam drives at 3 km per hour.</p>', stimulus2: '<p>Miriam drives at 3 km per hour.</p><p>Miriam drove for 3 hours.</p><p>How far did Miriam drive?</p><p><span style="color: gray">C = left option and N = right option</span></p>', choices: ['9', '6'], QuestionType: 'practice', correct_response: '9km', condition: 'practice', conf_stimulus: '<p>How confident are you in this response?</p><p><span style="color: gray">1 = Definitely wrong, 2 = Suspected wrong, 3 = Guessed wrong, 4 = Guessed right, 5 = Suspected right, 6 = Definitely right.</span></p>' }
]; //random item order

var trial_info_practice2 = [
    { item_order: 101, item: 'Practice 3', stimulus1: '<p>If a box contains 12 chocolates</p>', stimulus2: '<p>If a box contains 12 chocolates and 4 are eaten, </p><p>how many chocolates are left in the box?</p>', choices: ['8', '4'], QuestionType: 'practice', correct_response: '8', condition: 'practice', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item_order: 102, item: 'Practice 4', stimulus1: '<p>If Sarah has 7 apples and gives 3 to her friend,</p>', stimulus2: '<p>If Sarah has 7 apples and gives 3 to her friend, </p><p>how many apples does Sarah have left?</p>', choices: ['4', '3'], QuestionType: 'practice', correct_response: '4', condition: 'practice', conf_stimulus: '<p>How confident are you in this response?</p>' }
];

var trial_info_practice3 = [
    { item_order: 102, item: 'Practice 5', stimulus1: '<p>If a book has 10 chapters and you have read 7,</p>', stimulus2: '<p>If a book has 10 chapters and you have read 7, </p><p>how many chapters do you have left to read?</p>', choices: ['3', '7'], QuestionType: 'practice', correct_response: '3 chapters', condition: 'practice', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item_order: 103, item: 'Practice 6', stimulus1: '<p>If a box contains 20 pencils and 6 are taken,</p>', stimulus2: '<p>If a box contains 20 pencils and 6 are taken, </p><p>how many pencils are left in the box?</p>', choices: ['14', ' 6'], QuestionType: 'practice', correct_response: '14 pencils', condition: 'practice', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item_order: 104, item: 'Practice 7', stimulus1: '<p>If a bus travels at 60 km/h for 2 hours, </p>', stimulus2: '<p>If a bus travels at 60 km/h for 2 hours, </p><p>how far does it travel?</p>', choices: ['120 km', '60 km'], QuestionType: 'practice', correct_response: '120 km', condition: 'practice', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item_order: 105, item: 'Practice 8', stimulus1: '<p>If a bag contains 15 marbles and 5 are taken, </p>', stimulus2: '<p>If a bag contains 15 marbles and 5 are taken, </p><p>how many marbles are left in the bag?</p>', choices: ['10 marbles', '5 marbles'], QuestionType: 'practice', correct_response: '10 marbles', condition: 'practice', conf_stimulus: '<p>How confident are you in this response?</p>' }
];


var trial_info_LIFE_conflict_respiration = [

    { item: 1, stimulus: '<p>Algae respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>'},
    { item: 2, stimulus: '<p>Bacteria respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>'},
    { item: 3, stimulus: '<p>Cactuses respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 4, stimulus: '<p>Coral respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 5, stimulus: '<p>Daffodils respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 6, stimulus: '<p>Daisies respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 7, stimulus: '<p>Dandelions respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 8, stimulus: '<p>Elms respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 9, stimulus: '<p>Ferns respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 10, stimulus: '<p>Grass respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 11, stimulus: '<p>Kelp respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 12, stimulus: '<p>Mold respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 13, stimulus: '<p>Moss respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 14, stimulus: '<p>Mushrooms respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 15, stimulus: '<p>Oaks respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 16, stimulus: '<p>Petunias respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 17, stimulus: '<p>Seaweed respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 18, stimulus: '<p>Tulips respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 19, stimulus: '<p>Willows respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 20, stimulus: '<p>Yeast respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 21, stimulus: '<p>Bicycles respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 22, stimulus: '<p>Clocks respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 23, stimulus: '<p>Comets respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 24, stimulus: '<p>Computers respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 25, stimulus: '<p>Elevators respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 26, stimulus: '<p>Fire respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 27, stimulus: '<p>Geysers respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 28, stimulus: '<p>Glaciers respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 29, stimulus: '<p>Helicopters respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 30, stimulus: '<p>Lava respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 31, stimulus: '<p>Rivers respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 32, stimulus: '<p>Robots respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 33, stimulus: '<p>Sailboats respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 34, stimulus: '<p>Satelites respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 35, stimulus: '<p>Smartphones respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 36, stimulus: '<p>The internet respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 37, stimulus: '<p>The moon respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 38, stimulus: '<p>The sun respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 39, stimulus: '<p>Tornadoes respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 40, stimulus: '<p>Wind respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },]




var trial_info_LIFE_conflict_reproduction = [

    { item: 41, stimulus: '<p>Algae reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 42, stimulus: '<p>Bacteria reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 43, stimulus: '<p>Cactuses reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 44, stimulus: '<p>Coral reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 45, stimulus: '<p>Daffodils reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 46, stimulus: '<p>Daisies reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 47, stimulus: '<p>Dandelions reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 48, stimulus: '<p>Elms reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 49, stimulus: '<p>Ferns reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 50, stimulus: '<p>Grass reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 51, stimulus: '<p>Kelp reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 52, stimulus: '<p>Mold reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 53, stimulus: '<p>Moss reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 54, stimulus: '<p>Mushrooms reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 55, stimulus: '<p>Oaks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 56, stimulus: '<p>Petunias reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 57, stimulus: '<p>Seaweed reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 58, stimulus: '<p>Tulips reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 59, stimulus: '<p>Willows reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 60, stimulus: '<p>Yeast reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 61, stimulus: '<p>Bicycles reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 62, stimulus: '<p>Clocks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 63, stimulus: '<p>Comets reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 64, stimulus: '<p>Computers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 65, stimulus: '<p>Elevators reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 66, stimulus: '<p>Fire reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 67, stimulus: '<p>Geysers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 68, stimulus: '<p>Glaciers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 69, stimulus: '<p>Helicopters reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 70, stimulus: '<p>Lava reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 71, stimulus: '<p>Rivers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 72, stimulus: '<p>Robots reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 73, stimulus: '<p>Sailboats reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 74, stimulus: '<p>Satelites reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 75, stimulus: '<p>Smartphones reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 76, stimulus: '<p>The internet reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 77, stimulus: '<p>The moon reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 78, stimulus: '<p>The sun reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 79, stimulus: '<p>Tornadoes reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 80, stimulus: '<p>Wind reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },]



var trial_info_LIFE_conflict_nutrient = [

    { item: 81, stimulus: '<p>Algae need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 82, stimulus: '<p>Bacteria need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 83, stimulus: '<p>Cactuses need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 84, stimulus: '<p>Coral needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 85, stimulus: '<p>Daffodils need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 86, stimulus: '<p>Daisies need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 87, stimulus: '<p>Dandelions need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 88, stimulus: '<p>Elms need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 89, stimulus: '<p>Ferns need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 90, stimulus: '<p>Grass needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 91, stimulus: '<p>Kelp needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 92, stimulus: '<p>Mold needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 93, stimulus: '<p>Moss needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 94, stimulus: '<p>Mushrooms need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 95, stimulus: '<p>Oaks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 96, stimulus: '<p>Petunias need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 97, stimulus: '<p>Seaweed needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 98, stimulus: '<p>Tulips need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 99, stimulus: '<p>Willows need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 100, stimulus: '<p>Yeast needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 101, stimulus: '<p>Bicycles need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 102, stimulus: '<p>Clocks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 103, stimulus: '<p>Comets need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 104, stimulus: '<p>Computers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 105, stimulus: '<p>Elevators need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 106, stimulus: '<p>Fire needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 107, stimulus: '<p>Geysers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 108, stimulus: '<p>Glaciers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 109, stimulus: '<p>Helicopters need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 110, stimulus: '<p>Lava needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 111, stimulus: '<p>Rivers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 112, stimulus: '<p>Robots need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 113, stimulus: '<p>Sailboats need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 114, stimulus: '<p>Satelites need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 115, stimulus: '<p>Smartphones need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 116, stimulus: '<p>The internet needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 117, stimulus: '<p>The moon needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 118, stimulus: '<p>The sun needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 119, stimulus: '<p>Tornadoes need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 120, stimulus: '<p>Wind needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' }, ]






var trial_info_MATTER_conflict_weight = [

    { item: 121, stimulus: '<p>Air has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 122, stimulus: '<p>Bubbles have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 123, stimulus: '<p>Caffeine has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 124, stimulus: '<p>Clouds have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 125, stimulus: '<p>DNA has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 126, stimulus: '<p>Dust has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 127, stimulus: '<p>Foam has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 128, stimulus: '<p>Fog has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 129, stimulus: '<p>Frost has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 130, stimulus: '<p>Germs have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 131, stimulus: '<p>Inkblots have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 132, stimulus: '<p>Methane has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 133, stimulus: '<p>Perfume has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 134, stimulus: '<p>Pollen has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 135, stimulus: '<p>Saliva has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 136, stimulus: '<p>Smoke has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 137, stimulus: '<p>Snowflakes have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 138, stimulus: '<p>Spores have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 139, stimulus: '<p>Steam has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 140, stimulus: '<p>Testosterone has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 141, stimulus: '<p>Coldness has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 142, stimulus: '<p>Color has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 143, stimulus: '<p>Drumbeats have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 144, stimulus: '<p>Echoes have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 145, stimulus: '<p>Electricity has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 146, stimulus: '<p>Flames have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 147, stimulus: '<p>Friction has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 148, stimulus: '<p>Gravity has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 149, stimulus: '<p>Heat has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 150, stimulus: '<p>Laser beams have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 151, stimulus: '<p>Lightning has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 152, stimulus: '<p>Magnetic fields have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 153, stimulus: '<p>Moonbeams have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 154, stimulus: '<p>Music has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 155, stimulus: '<p>Radio waves have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 156, stimulus: '<p>Rainbows have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 157, stimulus: '<p>Shadows have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 158, stimulus: '<p>Starlight has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 159, stimulus: '<p>Sunshine has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 160, stimulus: '<p>Thunder has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },]




var trial_info_MATTER_conflict_temperature = [

    { item: 161, stimulus: '<p>Air has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 162, stimulus: '<p>Bubbles have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 163, stimulus: '<p>Caffeine has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 164, stimulus: '<p>Clouds have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 165, stimulus: '<p>DNA has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 166, stimulus: '<p>Dust has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 167, stimulus: '<p>Foam has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 168, stimulus: '<p>Fog has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 169, stimulus: '<p>Frost has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 170, stimulus: '<p>Germs have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 171, stimulus: '<p>Inkblots have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 172, stimulus: '<p>Methane has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 173, stimulus: '<p>Perfume has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 174, stimulus: '<p>Pollen has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 175, stimulus: '<p>Saliva has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 176, stimulus: '<p>Smoke has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 177, stimulus: '<p>Snowflakes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 178, stimulus: '<p>Spores have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 179, stimulus: '<p>Steam has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 180, stimulus: '<p>Testosterone has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 181, stimulus: '<p>Coldness has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 182, stimulus: '<p>Color has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 183, stimulus: '<p>Drumbeats have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 184, stimulus: '<p>Echoes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 185, stimulus: '<p>Electricity has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 186, stimulus: '<p>Flames have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 187, stimulus: '<p>Friction has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 188, stimulus: '<p>Gravity has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 189, stimulus: '<p>Heat has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 190, stimulus: '<p>Laser beams have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 191, stimulus: '<p>Lightning has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 192, stimulus: '<p>Magnetic fields have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 193, stimulus: '<p>Moonbeams have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 194, stimulus: '<p>Music has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 195, stimulus: '<p>Radio waves have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 196, stimulus: '<p>Rainbows have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 197, stimulus: '<p>Shadows have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 198, stimulus: '<p>Starlight has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 199, stimulus: '<p>Sunshine has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 200, stimulus: '<p>Thunder has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },]








var trial_info_MATTER_conflict_space = [

    { item: 201, stimulus: '<p>Air occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 202, stimulus: '<p>Bubbles occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 203, stimulus: '<p>Caffeine occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 204, stimulus: '<p>Clouds occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 205, stimulus: '<p>DNA occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 206, stimulus: '<p>Dust occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 207, stimulus: '<p>Foam occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 208, stimulus: '<p>Fog occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 209, stimulus: '<p>Frost occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 210, stimulus: '<p>Germs occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 211, stimulus: '<p>Inkblots occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 212, stimulus: '<p>Methane occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 213, stimulus: '<p>Perfume occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 214, stimulus: '<p>Pollen occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 215, stimulus: '<p>Saliva occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 216, stimulus: '<p>Smoke occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 217, stimulus: '<p>Snowflakes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 218, stimulus: '<p>Spores occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 219, stimulus: '<p>Steam occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 220, stimulus: '<p>Testosterone occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 221, stimulus: '<p>Coldness occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 222, stimulus: '<p>Color occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 223, stimulus: '<p>Drumbeats occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 224, stimulus: '<p>Echoes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 225, stimulus: '<p>Electricity occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 226, stimulus: '<p>Flames occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 227, stimulus: '<p>Friction occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 228, stimulus: '<p>Gravity occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 229, stimulus: '<p>Heat occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 230, stimulus: '<p>Laser beams occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 231, stimulus: '<p>Lightning occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 232, stimulus: '<p>Magnetic fields occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 233, stimulus: '<p>Moonbeams occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 234, stimulus: '<p>Music occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 235, stimulus: '<p>Radio waves occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 236, stimulus: '<p>Rainbows occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 237, stimulus: '<p>Shadows occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 238, stimulus: '<p>Starlight occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 239, stimulus: '<p>Sunshine occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 240, stimulus: '<p>Thunder occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
]

    
    
    

var trial_info_LIFE_noconflict_respiration = [

    { item: 241, stimulus: '<p>Boulders respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 242, stimulus: '<p>Caves respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 243, stimulus: '<p>Craters respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 244, stimulus: '<p>Emeralds respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 245, stimulus: '<p>Forks respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 246, stimulus: '<p>Hammers respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 247, stimulus: '<p>Islands respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 248, stimulus: '<p>Mittens respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 249, stimulus: '<p>Mountains respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 250, stimulus: '<p>Napkins respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 251, stimulus: '<p>Pebbles respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 252, stimulus: '<p>Rugs respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 253, stimulus: '<p>Sand respires.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 254, stimulus: '<p>Shells respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 255, stimulus: '<p>Shirts respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 256, stimulus: '<p>Shoes respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 257, stimulus: '<p>Shovels respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 258, stimulus: '<p>Stones respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 259, stimulus: '<p>Tables respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 260, stimulus: '<p>Towels respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 261, stimulus: '<p>Chipmunks respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 262, stimulus: '<p>Crocodiles respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 263, stimulus: '<p>Elephants respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 264, stimulus: '<p>Flamingos respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 265, stimulus: '<p>Frogs respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 266, stimulus: '<p>Giraffes respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 267, stimulus: '<p>Goats respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 268, stimulus: '<p>Gorillas respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 269, stimulus: '<p>Otters respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 270, stimulus: '<p>Owls respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 271, stimulus: '<p>Pelicans respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 272, stimulus: '<p>Pigs respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 273, stimulus: '<p>Rabbits respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 274, stimulus: '<p>Sharks respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 275, stimulus: '<p>Snails respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 276, stimulus: '<p>Spiders respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 277, stimulus: '<p>Tigers respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 278, stimulus: '<p>Turtles respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 279, stimulus: '<p>Wolves respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 280, stimulus: '<p>Zebras respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },]






var trial_info_LIFE_noconflict_reproduction = [

    { item: 281, stimulus: '<p>Boulders reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 282, stimulus: '<p>Caves reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 283, stimulus: '<p>Craters reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 284, stimulus: '<p>Emeralds reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 285, stimulus: '<p>Forks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 286, stimulus: '<p>Hammers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 287, stimulus: '<p>Islands reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 288, stimulus: '<p>Mittens reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 289, stimulus: '<p>Mountains reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 290, stimulus: '<p>Napkins reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 291, stimulus: '<p>Pebbles reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 292, stimulus: '<p>Rugs reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 293, stimulus: '<p>Sand reproduces.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 294, stimulus: '<p>Shells reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 295, stimulus: '<p>Shirts reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 296, stimulus: '<p>Shoes reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 297, stimulus: '<p>Shovels reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 298, stimulus: '<p>Stones reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 299, stimulus: '<p>Tables reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 300, stimulus: '<p>Towels reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 301, stimulus: '<p>Chipmunks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 302, stimulus: '<p>Crocodiles reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 303, stimulus: '<p>Elephants reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 304, stimulus: '<p>Flamingos reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 305, stimulus: '<p>Frogs reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 306, stimulus: '<p>Giraffes reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 307, stimulus: '<p>Goats reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 308, stimulus: '<p>Gorillas reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 309, stimulus: '<p>Otters reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 310, stimulus: '<p>Owls reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 311, stimulus: '<p>Pelicans reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 312, stimulus: '<p>Pigs reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 313, stimulus: '<p>Rabbits reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 314, stimulus: '<p>Sharks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 315, stimulus: '<p>Snails reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 316, stimulus: '<p>Spiders reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 317, stimulus: '<p>Tigers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 318, stimulus: '<p>Turtles reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 319, stimulus: '<p>Wolves reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 320, stimulus: '<p>Zebras reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
]



var trial_info_LIFE_noconflict_nutrient = [

    { item: 321, stimulus: '<p>Boulders need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 322, stimulus: '<p>Caves need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 323, stimulus: '<p>Craters need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 324, stimulus: '<p>Emeralds need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 325, stimulus: '<p>Forks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 326, stimulus: '<p>Hammers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 327, stimulus: '<p>Islands need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 328, stimulus: '<p>Mittens need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 329, stimulus: '<p>Mountains need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 330, stimulus: '<p>Napkins need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 331, stimulus: '<p>Pebbles need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 332, stimulus: '<p>Rugs need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 333, stimulus: '<p>Sand needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 334, stimulus: '<p>Shells need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 335, stimulus: '<p>Shirts need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 336, stimulus: '<p>Shoes need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 337, stimulus: '<p>Shovels need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 338, stimulus: '<p>Stones need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 339, stimulus: '<p>Tables need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 340, stimulus: '<p>Towels need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 341, stimulus: '<p>Chipmunks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 342, stimulus: '<p>Crocodiles need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 343, stimulus: '<p>Elephants need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 344, stimulus: '<p>Flamingos need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 345, stimulus: '<p>Frogs need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 346, stimulus: '<p>Giraffes need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 347, stimulus: '<p>Goats need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 348, stimulus: '<p>Gorillas need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 349, stimulus: '<p>Otters need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 350, stimulus: '<p>Owls need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 351, stimulus: '<p>Pelicans need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 352, stimulus: '<p>Pigs need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 353, stimulus: '<p>Rabbits need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 354, stimulus: '<p>Sharks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 355, stimulus: '<p>Snails need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 356, stimulus: '<p>Spiders need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 357, stimulus: '<p>Tigers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 358, stimulus: '<p>Turtles need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 359, stimulus: '<p>Wolves need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 360, stimulus: '<p>Zebras need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
]




var trial_info_MATTER_noconflict_weight = [

    { item: 361, stimulus: '<p>Christmas has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 362, stimulus: '<p>Dreams have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 363, stimulus: '<p>Feelings have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 364, stimulus: '<p>Halloween has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 365, stimulus: '<p>Hopes have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 366, stimulus: '<p>Hours have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 367, stimulus: '<p>Jokes have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 368, stimulus: '<p>Justice has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 369, stimulus: '<p>Love has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 370, stimulus: '<p>Minutes have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 371, stimulus: '<p>Mondays have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 372, stimulus: '<p>Numbers have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 373, stimulus: '<p>Poetry has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 374, stimulus: '<p>Silence has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 375, stimulus: '<p>Songs have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 376, stimulus: '<p>Stories have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 377, stimulus: '<p>Thoughts have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 378, stimulus: '<p>Vacations have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 379, stimulus: '<p>Wishes have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 380, stimulus: '<p>Words have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 381, stimulus: '<p>Anvils have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 382, stimulus: '<p>Bowling balls have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 383, stimulus: '<p>Bricks have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 384, stimulus: '<p>Clay has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 385, stimulus: '<p>Coal has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 386, stimulus: '<p>Concrete has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 387, stimulus: '<p>Copper has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 388, stimulus: '<p>Diamonds have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 389, stimulus: '<p>Dumbbells have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 390, stimulus: '<p>Glass has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 391, stimulus: '<p>Gold has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 392, stimulus: '<p>Granite has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 393, stimulus: '<p>Ice has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 394, stimulus: '<p>Iron has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 395, stimulus: '<p>Logs have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 396, stimulus: '<p>Lumber has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 397, stimulus: '<p>Rocks have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 398, stimulus: '<p>Rubber has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 399, stimulus: '<p>Salt has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 400, stimulus: '<p>Steel has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
]



var trial_info_MATTER_noconflict_temperature = [

    { item: 401, stimulus: '<p>Christmas has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 402, stimulus: '<p>Dreams have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 403, stimulus: '<p>Feelings have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 404, stimulus: '<p>Halloween has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 405, stimulus: '<p>Hopes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 406, stimulus: '<p>Hours have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 407, stimulus: '<p>Jokes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 408, stimulus: '<p>Justice has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 409, stimulus: '<p>Love has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 410, stimulus: '<p>Minutes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 411, stimulus: '<p>Mondays have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 412, stimulus: '<p>Numbers have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 413, stimulus: '<p>Poetry has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 414, stimulus: '<p>Silence has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 415, stimulus: '<p>Songs have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 416, stimulus: '<p>Stories have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 417, stimulus: '<p>Thoughts have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 418, stimulus: '<p>Vacations have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 419, stimulus: '<p>Wishes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 420, stimulus: '<p>Words have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 421, stimulus: '<p>Anvils have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 422, stimulus: '<p>Bowling balls have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 423, stimulus: '<p>Bricks have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 424, stimulus: '<p>Clay has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 425, stimulus: '<p>Coal has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 426, stimulus: '<p>Concrete has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 427, stimulus: '<p>Copper has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 428, stimulus: '<p>Diamonds have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 429, stimulus: '<p>Dumbbells have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 430, stimulus: '<p>Glass has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 431, stimulus: '<p>Gold has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 432, stimulus: '<p>Granite has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 433, stimulus: '<p>Ice has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 434, stimulus: '<p>Iron has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 435, stimulus: '<p>Logs have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 436, stimulus: '<p>Lumber has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 437, stimulus: '<p>Rocks have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 438, stimulus: '<p>Rubber has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 439, stimulus: '<p>Salt has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 440, stimulus: '<p>Steel has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
]






var trial_info_MATTER_noconflict_space=[
    { item: 441, stimulus: '<p>Christmas occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 442, stimulus: '<p>Dreams occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 443, stimulus: '<p>Feelings occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 444, stimulus: '<p>Halloween occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 445, stimulus: '<p>Hopes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 446, stimulus: '<p>Hours occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 447, stimulus: '<p>Jokes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 448, stimulus: '<p>Justice occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 449, stimulus: '<p>Love occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 450, stimulus: '<p>Minutes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 451, stimulus: '<p>Mondays occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 452, stimulus: '<p>Numbers occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 453, stimulus: '<p>Poetry occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 454, stimulus: '<p>Silence occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 455, stimulus: '<p>Songs occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 456, stimulus: '<p>Stories occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 457, stimulus: '<p>Thoughts occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 458, stimulus: '<p>Vacations occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 459, stimulus: '<p>Wishes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 460, stimulus: '<p>Words occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 461, stimulus: '<p>Anvils occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 462, stimulus: '<p>Bowling balls occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 463, stimulus: '<p>Bricks occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 464, stimulus: '<p>Clay occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 465, stimulus: '<p>Coal occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 466, stimulus: '<p>Concrete occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 467, stimulus: '<p>Copper occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 468, stimulus: '<p>Diamonds occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 469, stimulus: '<p>Dumbbells occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 470, stimulus: '<p>Glass occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 471, stimulus: '<p>Gold occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 472, stimulus: '<p>Granite occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 473, stimulus: '<p>Ice occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 474, stimulus: '<p>Iron occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 475, stimulus: '<p>Logs occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 476, stimulus: '<p>Lumber occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 477, stimulus: '<p>Rocks occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 478, stimulus: '<p>Rubber occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 479, stimulus: '<p>Salt occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 480, stimulus: '<p>Steel occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },]

var trial_info_LIFE_conflict_respiration = [

    { item: 1, stimulus: '<p>Algae respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>'},
    { item: 2, stimulus: '<p>Bacteria respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>'},
    { item: 3, stimulus: '<p>Cactuses respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 4, stimulus: '<p>Coral respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 5, stimulus: '<p>Daffodils respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 6, stimulus: '<p>Daisies respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 7, stimulus: '<p>Dandelions respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 8, stimulus: '<p>Elms respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 9, stimulus: '<p>Ferns respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 10, stimulus: '<p>Grass respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 11, stimulus: '<p>Kelp respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 12, stimulus: '<p>Mold respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 13, stimulus: '<p>Moss respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 14, stimulus: '<p>Mushrooms respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 15, stimulus: '<p>Oaks respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 16, stimulus: '<p>Petunias respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 17, stimulus: '<p>Seaweed respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 18, stimulus: '<p>Tulips respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 19, stimulus: '<p>Willows respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 20, stimulus: '<p>Yeast respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 21, stimulus: '<p>Bicycles respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 22, stimulus: '<p>Clocks respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 23, stimulus: '<p>Comets respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 24, stimulus: '<p>Computers respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 25, stimulus: '<p>Elevators respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 26, stimulus: '<p>Fire respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 27, stimulus: '<p>Geysers respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 28, stimulus: '<p>Glaciers respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 29, stimulus: '<p>Helicopters respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 30, stimulus: '<p>Lava respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 31, stimulus: '<p>Rivers respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 32, stimulus: '<p>Robots respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 33, stimulus: '<p>Sailboats respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 34, stimulus: '<p>Satelites respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 35, stimulus: '<p>Smartphones respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 36, stimulus: '<p>The internet respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 37, stimulus: '<p>The moon respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 38, stimulus: '<p>The sun respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 39, stimulus: '<p>Tornadoes respire.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 40, stimulus: '<p>Wind respires.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },]




var trial_info_LIFE_conflict_reproduction = [

    { item: 41, stimulus: '<p>Algae reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 42, stimulus: '<p>Bacteria reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 43, stimulus: '<p>Cactuses reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 44, stimulus: '<p>Coral reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 45, stimulus: '<p>Daffodils reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 46, stimulus: '<p>Daisies reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 47, stimulus: '<p>Dandelions reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 48, stimulus: '<p>Elms reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 49, stimulus: '<p>Ferns reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 50, stimulus: '<p>Grass reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 51, stimulus: '<p>Kelp reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 52, stimulus: '<p>Mold reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 53, stimulus: '<p>Moss reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 54, stimulus: '<p>Mushrooms reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 55, stimulus: '<p>Oaks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 56, stimulus: '<p>Petunias reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 57, stimulus: '<p>Seaweed reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 58, stimulus: '<p>Tulips reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 59, stimulus: '<p>Willows reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 60, stimulus: '<p>Yeast reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 61, stimulus: '<p>Bicycles reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 62, stimulus: '<p>Clocks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 63, stimulus: '<p>Comets reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 64, stimulus: '<p>Computers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 65, stimulus: '<p>Elevators reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 66, stimulus: '<p>Fire reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 67, stimulus: '<p>Geysers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 68, stimulus: '<p>Glaciers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 69, stimulus: '<p>Helicopters reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 70, stimulus: '<p>Lava reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 71, stimulus: '<p>Rivers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 72, stimulus: '<p>Robots reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 73, stimulus: '<p>Sailboats reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 74, stimulus: '<p>Satelites reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 75, stimulus: '<p>Smartphones reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 76, stimulus: '<p>The internet reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 77, stimulus: '<p>The moon reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 78, stimulus: '<p>The sun reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 79, stimulus: '<p>Tornadoes reproduce.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 80, stimulus: '<p>Wind reproduces.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },]



var trial_info_LIFE_conflict_nutrient = [

    { item: 81, stimulus: '<p>Algae need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 82, stimulus: '<p>Bacteria need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 83, stimulus: '<p>Cactuses need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 84, stimulus: '<p>Coral need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 85, stimulus: '<p>Daffodils need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 86, stimulus: '<p>Daisies need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 87, stimulus: '<p>Dandelions need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 88, stimulus: '<p>Elms need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 89, stimulus: '<p>Ferns need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 90, stimulus: '<p>Grass needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 91, stimulus: '<p>Kelp need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 92, stimulus: '<p>Mold need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 93, stimulus: '<p>Moss need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 94, stimulus: '<p>Mushrooms need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 95, stimulus: '<p>Oaks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 96, stimulus: '<p>Petunias need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 97, stimulus: '<p>Seaweed needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 98, stimulus: '<p>Tulips need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 99, stimulus: '<p>Willows need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 100, stimulus: '<p>Yeast needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 101, stimulus: '<p>Bicycles need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 102, stimulus: '<p>Clocks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 103, stimulus: '<p>Comets need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 104, stimulus: '<p>Computers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 105, stimulus: '<p>Elevators need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 106, stimulus: '<p>Fire needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 107, stimulus: '<p>Geysers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 108, stimulus: '<p>Glaciers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 109, stimulus: '<p>Helicopters need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 110, stimulus: '<p>Lava needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 111, stimulus: '<p>Rivers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 112, stimulus: '<p>Robots need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 113, stimulus: '<p>Sailboats need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 114, stimulus: '<p>Satelites need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 115, stimulus: '<p>Smartphones need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 116, stimulus: '<p>The internet needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 117, stimulus: '<p>The moon needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 118, stimulus: '<p>The sun needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 119, stimulus: '<p>Tornadoes need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 120, stimulus: '<p>Wind needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' }, ]






var trial_info_MATTER_conflict_weight = [

    { item: 121, stimulus: '<p>Air has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 122, stimulus: '<p>Bubbles have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 123, stimulus: '<p>Caffeine has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 124, stimulus: '<p>Clouds have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 125, stimulus: '<p>DNA has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 126, stimulus: '<p>Dust has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 127, stimulus: '<p>Foam has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 128, stimulus: '<p>Fog has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 129, stimulus: '<p>Frost has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 130, stimulus: '<p>Germs have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 131, stimulus: '<p>Inkblots have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 132, stimulus: '<p>Methane has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 133, stimulus: '<p>Perfume has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 134, stimulus: '<p>Pollen has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 135, stimulus: '<p>Saliva has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 136, stimulus: '<p>Smoke has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 137, stimulus: '<p>Snowflakes have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 138, stimulus: '<p>Spores have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 139, stimulus: '<p>Steam has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 140, stimulus: '<p>Testosterone has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 141, stimulus: '<p>Coldness has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 142, stimulus: '<p>Color has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 143, stimulus: '<p>Drumbeats have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 144, stimulus: '<p>Echoes have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 145, stimulus: '<p>Electricity has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 146, stimulus: '<p>Flames have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 147, stimulus: '<p>Friction has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 148, stimulus: '<p>Gravity has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 149, stimulus: '<p>Heat has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 150, stimulus: '<p>Laser beams have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 151, stimulus: '<p>Lightning has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 152, stimulus: '<p>Magnetic fields have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 153, stimulus: '<p>Moonbeams have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 154, stimulus: '<p>Music has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 155, stimulus: '<p>Radio waves have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 156, stimulus: '<p>Rainbows have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 157, stimulus: '<p>Shadows have weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 158, stimulus: '<p>Starlight has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 159, stimulus: '<p>Sunshine has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 160, stimulus: '<p>Thunder has weight.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },]




var trial_info_MATTER_conflict_temperature = [

    { item: 161, stimulus: '<p>Air has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 162, stimulus: '<p>Bubbles have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 163, stimulus: '<p>Caffeine has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 164, stimulus: '<p>Clouds have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 165, stimulus: '<p>DNA has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 166, stimulus: '<p>Dust has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 167, stimulus: '<p>Foam has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 168, stimulus: '<p>Fog has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 169, stimulus: '<p>Frost has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 170, stimulus: '<p>Germs have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 171, stimulus: '<p>Inkblots have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 172, stimulus: '<p>Methane has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 173, stimulus: '<p>Perfume has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 174, stimulus: '<p>Pollen has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 175, stimulus: '<p>Saliva has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 176, stimulus: '<p>Smoke has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 177, stimulus: '<p>Snowflakes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 178, stimulus: '<p>Spores have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 179, stimulus: '<p>Steam has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 180, stimulus: '<p>Testosterone has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 181, stimulus: '<p>Coldness has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 182, stimulus: '<p>Color has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 183, stimulus: '<p>Drumbeats have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 184, stimulus: '<p>Echoes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 185, stimulus: '<p>Electricity has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 186, stimulus: '<p>Flames have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 187, stimulus: '<p>Friction has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 188, stimulus: '<p>Gravity has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 189, stimulus: '<p>Heat has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 190, stimulus: '<p>Laser beams have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 191, stimulus: '<p>Lightning has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 192, stimulus: '<p>Magnetic fields have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 193, stimulus: '<p>Moonbeams have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 194, stimulus: '<p>Music has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 195, stimulus: '<p>Radio waves have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 196, stimulus: '<p>Rainbows have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 197, stimulus: '<p>Shadows have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 198, stimulus: '<p>Starlight has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 199, stimulus: '<p>Sunshine has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 200, stimulus: '<p>Thunder has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },]








var trial_info_MATTER_conflict_space = [

    { item: 201, stimulus: '<p>Air occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 202, stimulus: '<p>Bubbles occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 203, stimulus: '<p>Caffeine occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 204, stimulus: '<p>Clouds occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 205, stimulus: '<p>DNA occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 206, stimulus: '<p>Dust occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 207, stimulus: '<p>Foam occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 208, stimulus: '<p>Fog occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 209, stimulus: '<p>Frost occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 210, stimulus: '<p>Germs occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 211, stimulus: '<p>Inkblots occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 212, stimulus: '<p>Methane occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 213, stimulus: '<p>Perfume occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 214, stimulus: '<p>Pollen occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 215, stimulus: '<p>Saliva occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 216, stimulus: '<p>Smoke occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 217, stimulus: '<p>Snowflakes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 218, stimulus: '<p>Spores occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 219, stimulus: '<p>Steam occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 220, stimulus: '<p>Testosterone occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 221, stimulus: '<p>Coldness occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 222, stimulus: '<p>Color occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 223, stimulus: '<p>Drumbeats occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 224, stimulus: '<p>Echoes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 225, stimulus: '<p>Electricity occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 226, stimulus: '<p>Flames occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 227, stimulus: '<p>Friction occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 228, stimulus: '<p>Gravity occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 229, stimulus: '<p>Heat occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 230, stimulus: '<p>Laser beams occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 231, stimulus: '<p>Lightning occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 232, stimulus: '<p>Magnetic fields occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 233, stimulus: '<p>Moonbeams occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 234, stimulus: '<p>Music occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 235, stimulus: '<p>Radio waves occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 236, stimulus: '<p>Rainbows occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 237, stimulus: '<p>Shadows occupy space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 238, stimulus: '<p>Starlight occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 239, stimulus: '<p>Sunshine occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 240, stimulus: '<p>Thunder occupies space.</p>', choices: ['True', 'False'], QuestionType: 'C', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
]

    
    
    

var trial_info_LIFE_noconflict_respiration = [

    { item: 241, stimulus: '<p>Boulders respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 242, stimulus: '<p>Caves respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 243, stimulus: '<p>Craters respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 244, stimulus: '<p>Emeralds respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 245, stimulus: '<p>Forks respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 246, stimulus: '<p>Hammers respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 247, stimulus: '<p>Islands respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 248, stimulus: '<p>Mittens respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 249, stimulus: '<p>Mountains respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 250, stimulus: '<p>Napkins respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 251, stimulus: '<p>Pebbles respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 252, stimulus: '<p>Rugs respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 253, stimulus: '<p>Sand respires.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 254, stimulus: '<p>Shells respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 255, stimulus: '<p>Shirts respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 256, stimulus: '<p>Shoes respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 257, stimulus: '<p>Shovels respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 258, stimulus: '<p>Stones respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 259, stimulus: '<p>Tables respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 260, stimulus: '<p>Towels respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 261, stimulus: '<p>Chipmunks respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 262, stimulus: '<p>Crocodiles respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 263, stimulus: '<p>Elephants respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 264, stimulus: '<p>Flamingos respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 265, stimulus: '<p>Frogs respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 266, stimulus: '<p>Giraffes respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 267, stimulus: '<p>Goats respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 268, stimulus: '<p>Gorillas respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 269, stimulus: '<p>Otters respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 270, stimulus: '<p>Owls respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 271, stimulus: '<p>Pelicans respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 272, stimulus: '<p>Pigs respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 273, stimulus: '<p>Rabbits respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 274, stimulus: '<p>Sharks respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 275, stimulus: '<p>Snails respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 276, stimulus: '<p>Spiders respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 277, stimulus: '<p>Tigers respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 278, stimulus: '<p>Turtles respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 279, stimulus: '<p>Wolves respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 280, stimulus: '<p>Zebras respire.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },]






var trial_info_LIFE_noconflict_reproduction = [

    { item: 281, stimulus: '<p>Boulders reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 282, stimulus: '<p>Caves reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 283, stimulus: '<p>Craters reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 284, stimulus: '<p>Emeralds reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 285, stimulus: '<p>Forks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 286, stimulus: '<p>Hammers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 287, stimulus: '<p>Islands reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 288, stimulus: '<p>Mittens reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 289, stimulus: '<p>Mountains reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 290, stimulus: '<p>Napkins reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 291, stimulus: '<p>Pebbles reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 292, stimulus: '<p>Rugs reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 293, stimulus: '<p>Sand reproduces.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 294, stimulus: '<p>Shells reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 295, stimulus: '<p>Shirts reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 296, stimulus: '<p>Shoes reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 297, stimulus: '<p>Shovels reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 298, stimulus: '<p>Stones reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 299, stimulus: '<p>Tables reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 300, stimulus: '<p>Towels reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 301, stimulus: '<p>Chipmunks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 302, stimulus: '<p>Crocodiles reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 303, stimulus: '<p>Elephants reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 304, stimulus: '<p>Flamingos reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 305, stimulus: '<p>Frogs reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 306, stimulus: '<p>Giraffes reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 307, stimulus: '<p>Goats reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 308, stimulus: '<p>Gorillas reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 309, stimulus: '<p>Otters reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 310, stimulus: '<p>Owls reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 311, stimulus: '<p>Pelicans reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 312, stimulus: '<p>Pigs reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 313, stimulus: '<p>Rabbits reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 314, stimulus: '<p>Sharks reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 315, stimulus: '<p>Snails reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 316, stimulus: '<p>Spiders reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 317, stimulus: '<p>Tigers reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 318, stimulus: '<p>Turtles reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 319, stimulus: '<p>Wolves reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 320, stimulus: '<p>Zebras reproduce.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
]



var trial_info_LIFE_noconflict_nutrient = [

    { item: 321, stimulus: '<p>Boulders need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 322, stimulus: '<p>Caves need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 323, stimulus: '<p>Craters need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 324, stimulus: '<p>Emeralds need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 325, stimulus: '<p>Forks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 326, stimulus: '<p>Hammers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 327, stimulus: '<p>Islands need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 328, stimulus: '<p>Mittens need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 329, stimulus: '<p>Mountains need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 330, stimulus: '<p>Napkins need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 331, stimulus: '<p>Pebbles need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 332, stimulus: '<p>Rugs need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 333, stimulus: '<p>Sand needs nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 334, stimulus: '<p>Shells need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 335, stimulus: '<p>Shirts need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 336, stimulus: '<p>Shoes need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 337, stimulus: '<p>Shovels need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 338, stimulus: '<p>Stones need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 339, stimulus: '<p>Tables need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 340, stimulus: '<p>Towels need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 341, stimulus: '<p>Chipmunks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 342, stimulus: '<p>Crocodiles need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 343, stimulus: '<p>Elephants need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 344, stimulus: '<p>Flamingos need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 345, stimulus: '<p>Frogs need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 346, stimulus: '<p>Giraffes need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 347, stimulus: '<p>Goats need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 348, stimulus: '<p>Gorillas need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 349, stimulus: '<p>Otters need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 350, stimulus: '<p>Owls need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 351, stimulus: '<p>Pelicans need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 352, stimulus: '<p>Pigs need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 353, stimulus: '<p>Rabbits need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 354, stimulus: '<p>Sharks need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 355, stimulus: '<p>Snails need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 356, stimulus: '<p>Spiders need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 357, stimulus: '<p>Tigers need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 358, stimulus: '<p>Turtles need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 359, stimulus: '<p>Wolves need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 360, stimulus: '<p>Zebras need nutrients.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
]




var trial_info_MATTER_noconflict_weight = [

    { item: 361, stimulus: '<p>Christmas has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 362, stimulus: '<p>Dreams have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 363, stimulus: '<p>Feelings have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 364, stimulus: '<p>Halloween has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 365, stimulus: '<p>Hopes have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 366, stimulus: '<p>Hours have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 367, stimulus: '<p>Jokes have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 368, stimulus: '<p>Justice has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 369, stimulus: '<p>Love has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 370, stimulus: '<p>Minutes have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 371, stimulus: '<p>Mondays have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 372, stimulus: '<p>Numbers have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 373, stimulus: '<p>Poetry has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 374, stimulus: '<p>Silence has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 375, stimulus: '<p>Songs have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 376, stimulus: '<p>Stories have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 377, stimulus: '<p>Thoughts have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 378, stimulus: '<p>Vacations have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 379, stimulus: '<p>Wishes have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 380, stimulus: '<p>Words have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 381, stimulus: '<p>Anvils have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 382, stimulus: '<p>Bowling balls have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 383, stimulus: '<p>Bricks have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 384, stimulus: '<p>Clay has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 385, stimulus: '<p>Coal has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 386, stimulus: '<p>Concrete has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 387, stimulus: '<p>Copper has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 388, stimulus: '<p>Diamonds have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 389, stimulus: '<p>Dumbbells have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 390, stimulus: '<p>Glass has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 391, stimulus: '<p>Gold has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 392, stimulus: '<p>Granite has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 393, stimulus: '<p>Ice has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 394, stimulus: '<p>Iron has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 395, stimulus: '<p>Logs have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 396, stimulus: '<p>Lumber has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 397, stimulus: '<p>Rocks have weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 398, stimulus: '<p>Rubber has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 399, stimulus: '<p>Salt has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 400, stimulus: '<p>Steel has weight.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
]



var trial_info_MATTER_noconflict_temperature = [

    { item: 401, stimulus: '<p>Christmas has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 402, stimulus: '<p>Dreams have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 403, stimulus: '<p>Feelings have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 404, stimulus: '<p>Halloween has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 405, stimulus: '<p>Hopes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 406, stimulus: '<p>Hours have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 407, stimulus: '<p>Jokes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 408, stimulus: '<p>Justice has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 409, stimulus: '<p>Love has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 410, stimulus: '<p>Minutes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 411, stimulus: '<p>Mondays have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 412, stimulus: '<p>Numbers have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 413, stimulus: '<p>Poetry has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 414, stimulus: '<p>Silence has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 415, stimulus: '<p>Songs have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 416, stimulus: '<p>Stories have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 417, stimulus: '<p>Thoughts have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 418, stimulus: '<p>Vacations have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 419, stimulus: '<p>Wishes have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 420, stimulus: '<p>Words have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 421, stimulus: '<p>Anvils have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 422, stimulus: '<p>Bowling balls have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 423, stimulus: '<p>Bricks have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 424, stimulus: '<p>Clay has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 425, stimulus: '<p>Coal has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 426, stimulus: '<p>Concrete has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 427, stimulus: '<p>Copper has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 428, stimulus: '<p>Diamonds have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 429, stimulus: '<p>Dumbbells have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 430, stimulus: '<p>Glass has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 431, stimulus: '<p>Gold has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 432, stimulus: '<p>Granite has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 433, stimulus: '<p>Ice has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 434, stimulus: '<p>Iron has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 435, stimulus: '<p>Logs have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 436, stimulus: '<p>Lumber has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 437, stimulus: '<p>Rocks have a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 438, stimulus: '<p>Rubber has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 439, stimulus: '<p>Salt has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 440, stimulus: '<p>Steel has a temperature.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
]






var trial_info_MATTER_noconflict_space=[
    { item: 441, stimulus: '<p>Christmas occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 442, stimulus: '<p>Dreams occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 443, stimulus: '<p>Feelings occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 444, stimulus: '<p>Halloween occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 445, stimulus: '<p>Hopes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 446, stimulus: '<p>Hours occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 447, stimulus: '<p>Jokes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 448, stimulus: '<p>Justice occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 449, stimulus: '<p>Love occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 450, stimulus: '<p>Minutes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 451, stimulus: '<p>Mondays occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 452, stimulus: '<p>Numbers occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 453, stimulus: '<p>Poetry occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 454, stimulus: '<p>Silence occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 455, stimulus: '<p>Songs occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 456, stimulus: '<p>Stories occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 457, stimulus: '<p>Thoughts occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 458, stimulus: '<p>Vacations occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 459, stimulus: '<p>Wishes occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 460, stimulus: '<p>Words occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'F', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 461, stimulus: '<p>Anvils occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 462, stimulus: '<p>Bowling balls occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 463, stimulus: '<p>Bricks occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 464, stimulus: '<p>Clay occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 465, stimulus: '<p>Coal occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 466, stimulus: '<p>Concrete occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 467, stimulus: '<p>Copper occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 468, stimulus: '<p>Diamonds occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 469, stimulus: '<p>Dumbbells occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 470, stimulus: '<p>Glass occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 471, stimulus: '<p>Gold occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 472, stimulus: '<p>Granite occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 473, stimulus: '<p>Ice occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 474, stimulus: '<p>Iron occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 475, stimulus: '<p>Logs occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 476, stimulus: '<p>Lumber occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 477, stimulus: '<p>Rocks occupy space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 478, stimulus: '<p>Rubber occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 479, stimulus: '<p>Salt occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
    { item: 480, stimulus: '<p>Steel occupies space.</p>', choices: ['True', 'False'], QuestionType: 'NC', correct_response: 'T', conf_stimulus: '<p>How confident are you in this response?</p>' },
]

// Function to add domain and predicate fields to trial objects
function addDomainAndPredicate(trials, domain, predicate) {
    return trials.map(trial => ({
        ...trial,
        // preserve original trial fields and add metadata expected by the experiment
        domain: domain,
        predicate: predicate,
        // ensure the timeline variables that the HTML expects exist
        stimulus1: trial.stimulus1 !== undefined ? trial.stimulus1 : (trial.stimulus || ''),
        stimulus2: trial.stimulus2 !== undefined ? trial.stimulus2 : (trial.stimulus || ''),
        stimulus3: trial.stimulus3 !== undefined ? trial.stimulus3 : (trial.stimulus || ''),
        // map QuestionType ('C'/'NC') to a boolean conflict field
        conflict: trial.conflict !== undefined ? trial.conflict : (trial.QuestionType === 'C')
    }));
}

// Combine all trials into a single array with domain and predicate fields
var trial_info_all = [
    ...addDomainAndPredicate(trial_info_LIFE_conflict_respiration, 'LIFE', 'respiration'),
    ...addDomainAndPredicate(trial_info_LIFE_conflict_reproduction, 'LIFE', 'reproduction'),
    ...addDomainAndPredicate(trial_info_LIFE_conflict_nutrient, 'LIFE', 'nutrient'),
    ...addDomainAndPredicate(trial_info_LIFE_noconflict_respiration, 'LIFE', 'respiration'), 
    ...addDomainAndPredicate(trial_info_LIFE_noconflict_reproduction, 'LIFE', 'reproduction'),
    ...addDomainAndPredicate(trial_info_LIFE_noconflict_nutrient, 'LIFE', 'nutrient'),
    ...addDomainAndPredicate(trial_info_MATTER_conflict_weight, 'MATTER', 'weight'),
    ...addDomainAndPredicate(trial_info_MATTER_conflict_temperature, 'MATTER', 'temperature'),
    ...addDomainAndPredicate(trial_info_MATTER_conflict_space, 'MATTER', 'space'),
    ...addDomainAndPredicate(trial_info_MATTER_noconflict_weight, 'MATTER', 'weight'),
    ...addDomainAndPredicate(trial_info_MATTER_noconflict_temperature, 'MATTER', 'temperature'),
    ...addDomainAndPredicate(trial_info_MATTER_noconflict_space, 'MATTER', 'space')
];

// Function to shuffle array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to sample trials for a block
function sampleBlockTrials(domain) {
    // Filter trials by domain
    const domainTrials = trial_info_all.filter(trial => trial.domain === domain);
    
    // Initialize result array
    let result = [];
    
    // Get predicates for this domain
    const predicates = [...new Set(domainTrials.map(trial => trial.predicate))];
    
    // For each predicate, sample 10 conflict and 10 nonconflict trials
    predicates.forEach(predicate => {
        const predicateTrials = domainTrials.filter(trial => trial.predicate === predicate);
        
        // Get conflict trials
        const conflictTrials = predicateTrials.filter(trial => trial.QuestionType === 'C');
        const sampledConflict = shuffleArray([...conflictTrials]).slice(0, 10);
        
        // Get nonconflict trials
        const nonconflictTrials = predicateTrials.filter(trial => trial.QuestionType === 'NC');
        const sampledNonconflict = shuffleArray([...nonconflictTrials]).slice(0, 10);
        
        // Add sampled trials to result
        result = result.concat(sampledConflict, sampledNonconflict);
    });
    
    // Shuffle final array to randomize trial order
    return shuffleArray(result);
}

// Function to verify trial distribution
function verifyBlockDistribution(trials, domain) {
    console.log(`\nVerifying ${domain} block distribution:`);
    
    // Get predicates for this domain
    const predicates = [...new Set(trials.map(trial => trial.predicate))];
    
    // For each predicate
    predicates.forEach(predicate => {
        const predicateTrials = trials.filter(trial => trial.predicate === predicate);
        const conflictTrials = predicateTrials.filter(trial => trial.QuestionType === 'C');
        const nonconflictTrials = predicateTrials.filter(trial => trial.QuestionType === 'NC');
        
        console.log(`\nPredicate: ${predicate}`);
        console.log(`Total trials: ${predicateTrials.length}`);
        console.log(`Conflict trials: ${conflictTrials.length}`);
        console.log(`Nonconflict trials: ${nonconflictTrials.length}`);
    });
    
    console.log(`\nTotal trials in block: ${trials.length}`);
}

// Create blocks
var block1_trials = sampleBlockTrials('MATTER'); // 60 trials (20 per predicate, 10 C/10 NC each)
var block2_trials = sampleBlockTrials('LIFE'); // 60 trials (20 per predicate, 10 C/10 NC each)

// Verify distribution
verifyBlockDistribution(block1_trials, 'MATTER');
verifyBlockDistribution(block2_trials, 'LIFE');