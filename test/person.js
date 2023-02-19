let values = [6,2,6,6,6]
console.log(getResults());

function getResults() {
    let results = [];
    for (let i = 0; i <= 5; i++) {
        results[i] = sameValuePoints(i + 1);
    }
    results[6] = onePairPoints();
    results[7] = twoPairPoints();
    results[8] = threeSamePoints();
    results[9] = fourSamePoints();
    results[10] = fullHousePoints();
    results[11] = smallStraightPoints();
    results[12] = largeStraightPoints();
    results[13] = chancePoints();
    results[14] = yatzyPoints();

    return results;
}

// -------------------------------------------------------------------------

// Return an int[7] containing the frequency of face values.
// Frequency at index v is the number of dice with the face value v, 1 <= v <= 6.
// Index 0 is not used.
// Note: This method can be used in several of the following methods.
function frequency() {
    let freq = [0, 0, 0, 0, 0, 0, 0];
    for(let e of values){
        freq[e]++;
    }
    return freq;
}

/**
 * Return same-value points for the given face value.<br/>
 * Returns 0, if no dice has the given face value.<br/>
 * Pre: 1 <= value <= 6;
 */
function sameValuePoints(value) {
    let freq = frequency();
    let points = value * freq[value];
    return points;
}

/**
 * Return points for one pair (for the face value giving the highest points).<br/>
 * Return 0, if there aren't 2 dice with the same face value.
 */
function onePairPoints() {
    let onePairScore = 0;
    let freq = frequency();
    for(let i = 1; i < 7; i++){
        if(freq[i] > 1 && i * 2 > onePairScore){
            onePairScore = i * 2;
        }
    }
    return onePairScore;
}

/**
 * Return points for two pairs<br/>
 * (for the 2 face values giving the highest points).<br/>
 * Return 0, if there aren't 2 dice with the same face value<br/>
 * and 2 other dice with the same but different face value.
 */
function twoPairPoints() {
    let count = 0;
    let twoPairScore = 0;
    let freq = frequency();
    for(let i = 1; i < 7; i++){
        if(freq[i] > 1){
            twoPairScore += i * 2;
            count++;
        }
    }
    if(count != 2){
        return 0;
    }
    return twoPairScore;
}

/**
 * Return points for 3 of a kind.<br/>
 * Return 0, if there aren't 3 dice with the same face value.
 */
function threeSamePoints() {
    let points = 0;
    let freq = frequency();
    for(let i = 1; i < 7; i++){
        if(freq[i] > 2){
            points = i * 3;
        }
    }
    return points;
}

/**
 * Return points for 4 of a kind.<br/>
 * Return 0, if there aren't 4 dice with the same face value.
 */
function fourSamePoints() {
    let points = 0;
    let freq = frequency();
    for(let i = 1; i < 7; i++){
        if(freq[i] > 3){
            points = i * 4;
        }
    }
    return points;
}

/**
 * Return points for full house.<br/>
 * Return 0, if there aren't 3 dice with the same face value<br/>
 * and 2 other dice with the same but different face value.
 */
function fullHousePoints() {
    let points = 0;
    let freq = frequency();
    for(let i = 1; i < 7; i++){
        if(freq[i] == 1 || freq[i] == 4 || freq[i] == 5){
            break;
        }
        else if(freq[i] == 2 && threeSamePoints() != 0){
            points = i * 2 + threeSamePoints();
            break;
        }
    }
    return points;
}

/**
 * Return points for small straight.<br/>
 * Return 0, if the dice aren't showing 1,2,3,4,5.
 */
function smallStraightPoints() {
    let straight;
    for(let i = 1; i < 6; i++){
        straight = false;
        for(let e of values){
            if(e == i){
                straight = true;
            }
        }
        if(!straight){
            return 0;
        }
    }
    return 15;
}

/**
 * Return points for large straight.<br/>
 * Return 0, if the dice aren't showing 2,3,4,5,6.
 */
function largeStraightPoints() {
    let straight;
    for(let i = 2; i < 7; i++){
        straight = false;
        for(let e of values){
            if(e == i){
                straight = true;
            }
        }
        if(!straight){
            return 0;
        }
    }
    return 20;
}

/**
 * Return points for chance (the sum of face values).
 */
function chancePoints() {
    let points = 0;
    for (let face of values) {
        points += face;
    }
    return points;
}

/**
 * Return points for yatzy (50 points).<br/>
 * Return 0, if there aren't 5 dice with the same face value.
 */
function yatzyPoints() {
    let points = 0;
    let freq = frequency();
    for(let i = 1; i < 7; i++){
        if(freq[i] == 5){
            points = 50;
            return points;
        } else if(freq[i] != 0){
            break;
        }
    }
    return points;
}