export function probability(score:number){

    if(score>=90){

        return{

            signal:"BUY",

            confidence:95

        }

    }

    if(score>=70){

        return{

            signal:"BUY",

            confidence:85

        }

    }

    if(score>=45){

        return{

            signal:"WAIT",

            confidence:60

        }

    }

    return{

        signal:"SELL",

        confidence:90

    }

}
