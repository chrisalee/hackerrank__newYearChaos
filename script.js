/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  //queue FIFO
  let totalBribes = 0;
  
  for(let currentPos = 0; currentPos < q.length; currentPos++) {
    // get original position 
    const originalPos = q[currentPos] - 1;
    
    //difference of how far a person moved
    const diff = originalPos - currentPos;
    //if person moved more than two spots, not possible 
    if(diff > 2) {
      console.log('Too chaotic');
      return 'Too chaotic';
    }
    
    //check each person starting from one person ahead of original position up until current position
    for(let j = Math.max(0, originalPos - 1); j < currentPos; j++) {
      const startPosOfForwardPerson = q[j] - 1;
      //if a person in front of current person started behind
      //current person, then current person must have been bribed by them
      if(startPosOfForwardPerson > originalPos) {
        totalBribes++;
      }
    }
  }  
  console.log(totalBribes);
  return totalBribes;
}
