class YatzyDice {
    constructor() {
        this.values = new Array(5).fill(0);
        this.throwCount = 0;
    }
    // Face values of the 5 dice.
    // 1 <= values[i] <= 6 for i in [0..4]
    // let values = [];
    // Number of times the 5 dice have been thrown.
    // 0 <= throwCount <= 3.
    // let throwCount = 0;

    /**
     * Return the 5 face values of the dice.
     */
    getValues() {
        return this.values;
    }

    /**
     * Return the number of times the 5 dice has been thrown.
     */
    getThrowCount() {
        return this.throwCount;
    }

    /**
     * Reset the throw count.
     */
    resetThrowCount() {
        this.throwCount = 0;
    }

    /**
     * Roll the 5 dice. Only roll dice that are not hold.<br/>
     * Note: holdStatus[i] is true, if die no. i is hold (for i in [0..4]).
     */
    throwDice(holdStatus) {
        for(let i = 0; i < 5; i++){
            if(!holdStatus[i]){
                this.values[i] = Math.floor(Math.random() * 6 + 1);
            }
        }
        this.throwCount++;
    }

    /**
     * Return all results possible with the current face values.<br/>
     * The order of the results is the same as on the score board.<br/>
     * Note: This is an optional method. Comment this method out,<br/>
     * if you don't want use it.
     */
    getResults() {
        let results = [];
        for (let i = 0; i <= 5; i++) {
            results[i] = this.sameValuePoints(i + 1);
        }
        results[6] = this.onePairPoints();
        results[7] = this.twoPairPoints();
        results[8] = this.threeSamePoints();
        results[9] = this.fourSamePoints();
        results[10] = this.fullHousePoints();
        results[11] = this.smallStraightPoints();
        results[12] = this.largeStraightPoints();
        results[13] = this.chancePoints();
        results[14] = this.yatzyPoints();

        return results;
    }

    // -------------------------------------------------------------------------

    // Return an int[7] containing the frequency of face values.
    // Frequency at index v is the number of dice with the face value v, 1 <= v <= 6.
    // Index 0 is not used.
    // Note: This method can be used in several of the following methods.
    frequency() {
        let freq = new Array(7).fill(0);
        for(let e of this.values){
            freq[e]++;
        }
        return freq;
    }

    /**
     * Return same-value points for the given face value.<br/>
     * Returns 0, if no dice has the given face value.<br/>
     * Pre: 1 <= value <= 6;
     */
    sameValuePoints(value) {
        let freq = this.frequency();
        let points = value * freq[value];
        return points;
    }

    /**
     * Return points for one pair (for the face value giving the highest points).<br/>
     * Return 0, if there aren't 2 dice with the same face value.
     */
    onePairPoints() {
        let onePairScore = 0;
        let freq = this.frequency();
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
    twoPairPoints() {
        let count = 0;
        let twoPairScore = 0;
        let freq = this.frequency();
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
    threeSamePoints() {
        let points = 0;
        let freq = this.frequency();
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
    fourSamePoints() {
        let points = 0;
        let freq = this.frequency();
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
    fullHousePoints() {
        let points = 0;
        let freq = this.frequency();
        for(let i = 1; i < 7; i++){
            if(freq[i] == 1 || freq[i] == 4 || freq[i] == 5){
                break;
            }
            else if(freq[i] == 2 && this.threeSamePoints() != 0){
                points = i * 2 + this.threeSamePoints();
                break;
            }
        }
        return points;
    }

    /**
     * Return points for small straight.<br/>
     * Return 0, if the dice aren't showing 1,2,3,4,5.
     */
    smallStraightPoints() {
        let straight;
        for(let i = 1; i < 6; i++){
            straight = false;
            for(let e of this.values){
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
    largeStraightPoints() {
        let straight;
        for(let i = 2; i < 7; i++){
            straight = false;
            for(let e of this.values){
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
    chancePoints() {
        let points = 0;
        for (let face of this.values) {
            points += face;
        }
        return points;
    }

    /**
     * Return points for yatzy (50 points).<br/>
     * Return 0, if there aren't 5 dice with the same face value.
     */
    yatzyPoints() {
        let points = 0;
        let freq = this.frequency();
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
}



//let yatzyDie = new YatzyDice();
export default YatzyDice;

// -------------------------------------------------------------------------



