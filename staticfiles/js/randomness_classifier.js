// import * as tf from '@tensorflow/tfjs';

// const logistic = await tf.loadLayersModel('../models/logistic/model.json');

// function predictLogistic() {
//     const sequence = document.getElementById('ai-sequence').ariaValueMax;
//     var streaks = tf.tensor(getStreaks(sequence));
//     document.getElementById('logistic-stuff').value = logistic.predict(streaks);
//     // return logistic.predict(streaks);
// }


// function getStreaks(sequence) {
//     var streaks = Array(20).fill(0);
//     var c = 1;
//     var previous = sequence[0];
//     for(let i = 0; i < 20; i++) {
//         if(sequence.charAt(i) != previous) {
//             streaks[c-1] += 1;
//             c = 0;
//             previous = sequence.charAt(i);
//         }
//         c += 1
//     }
//     streaks[c-1] += 1;
//     return streaks;
// }