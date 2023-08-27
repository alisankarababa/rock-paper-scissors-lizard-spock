
//maxVal excluded
function rng(minVal, maxVal) 
{  
    return Math.floor((maxVal - minVal) * Math.random()) + minVal;
}


const rock = 0;
const paper = 1;
const scissors = 2;
const lizard = 3;
const spock = 4;

const arrOptions = ["rock", "paper", "scissors", "lizard", "spock"];

const min= 0;
const max = 4;

function rng(minVal, maxVal)
{
    return Math.floor((maxVal - minVal) * Math.random()) + minVal;
}

function optionComputer()
{
    return rng(0, arrOptions.length);
}

function showCmpSelectedImg(opt)
{

    try {
        document.getElementById("cmp-opt").src = `./assets/images/${arrOptions[opt]}.png`;
        
    } catch (error) {
        console.log(`catch showCmpSelectedImg: opt: ${opt}, error: ${error}, `);
    }




}



function rpslsReferee(opt1, opt2)
{
    if ( opt1 < min || opt2 < min || opt1 > max || opt2 > max ) {
        return -Infinity;
    }

    if (opt1 === opt2) {
        return 0;
    }

    switch (opt1)
    {
        case rock:
            return (opt2 === lizard || opt2 === scissors) ? 1 : -1;
        case paper:
            return (opt2 === rock || opt2 === spock) ? 1 : -1;
        case scissors:
            return (opt2 === paper || opt2 === lizard) ? 1 : -1;
        case lizard:
            return (opt2 === spock || opt2 === paper) ? 1 : -1;
        case spock:
            return (opt2 === scissors || opt2 === rock) ? 1 : -1;
    }
}


let userOpts = document.querySelectorAll(".user-opt");

let selectionUser = null;

for (const option of userOpts) {
    option.addEventListener("click", function () {
        selectionUser = option.id;

        const optCmp = optionComputer();
        showCmpSelectedImg(optCmp);

        const result = rpslsReferee(arrOptions.indexOf(selectionUser), optCmp);

        let textRes = null;
        switch (result) {
            case 1:
                textRes = "YOU WIN!";
                break;
                
            case -1: 
                textRes = "YOU LOSE!";
                break;
                
            case 0:
                textRes = "DRAW!";
                break;
                
            case -Infinity:
                textRes = "SOMETHING WENT WRONG.";
                break;
        }

        try {
            document.getElementById("game-result").innerHTML = textRes;
            
        } catch (error) {
            console.log(`catch setting game res text. Error: ${error}.`);
        }




    });
}

















// //Test rng

// console.log(rng(3, 1));
// console.log(rng(1, 5));






/* Test rpslsReferee function
// console.log(rpslsReferee(rock, rock));
// console.log(rpslsReferee(paper, paper));
// console.log(rpslsReferee(scissors, scissors));
// console.log(rpslsReferee(lizard, lizard));
// console.log(rpslsReferee(spock, spock));

// console.log(rpslsReferee(rock, lizard));
// console.log(rpslsReferee(lizard, rock));

// console.log(rpslsReferee(rock, scissors));
// console.log(rpslsReferee(scissors, rock));

// console.log(rpslsReferee(paper, rock));
// console.log(rpslsReferee(rock, paper));

// console.log(rpslsReferee(paper, spock));
// console.log(rpslsReferee(spock, paper));

// console.log(rpslsReferee(scissors, paper));
// console.log(rpslsReferee(paper, scissors));

// console.log(rpslsReferee(scissors, lizard));
// console.log(rpslsReferee(lizard, scissors));

// console.log(rpslsReferee(lizard, spock));
// console.log(rpslsReferee(spock, lizard));

// console.log(rpslsReferee(lizard, paper));
// console.log(rpslsReferee(paper, lizard));

// console.log(rpslsReferee(spock, scissors));
// console.log(rpslsReferee(scissors, spock));

// console.log(rpslsReferee(spock, rock));
// console.log(rpslsReferee(rock, spock));

*/




