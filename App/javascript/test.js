$(document).ready(() => {

    const setSVG = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        $("svg").attr("width", width).attr("height", height);
        // $("circle.")
    }

    setSVG()

    //===========================================================================

    const rgbValues = [];

    const pushValue = (RGB, timesPushed) => {
        for (i = 0; i < timesPushed; i++) {
            rgbValues.push(`rgb(${RGB.red},${RGB.green},${RGB.blue})`)
        }
    }

    // todo both rgb grabbers need to be refactored
    const getRgbSmallScreen = (width) => {
        const RGB = {
            red: 255,
            green: 0,
            blue: 0
        }

        const skipVal = 1530 / (1530 - width);
        let atSkip = 0
        let currentTotal = 0;

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? atSkip++ : pushValue(RGB, 1);
            RGB.green++;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? atSkip++ : pushValue(RGB, 1);
            RGB.red--;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? atSkip++ : pushValue(RGB, 1);
            RGB.blue++;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? atSkip++ : pushValue(RGB, 1);
            RGB.green--;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? atSkip++ : pushValue(RGB, 1);
            RGB.red++;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? atSkip++ : pushValue(RGB, 1);
            RGB.blue--;
            currentTotal++;
        }
    }

    const getRgbBigScreen = (width) => {
        const RGB = {
            red: 255,
            green: 0,
            blue: 0
        }

        const skipVal = width / (width - 1530);
        let atSkip = 0
        let currentTotal = 0;

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? pushValue(RGB, 2) : pushValue(RGB, 1);
            RGB.green++;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? pushValue(RGB, 2) : pushValue(RGB, 1);
            RGB.red--;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? pushValue(RGB, 2) : pushValue(RGB, 1);
            RGB.blue++;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? pushValue(RGB, 2) : pushValue(RGB, 1);
            RGB.green--;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? pushValue(RGB, 2) : pushValue(RGB, 1);
            RGB.red++;
            currentTotal++;
        }

        for (g = 0; g < 255; g++) {
            currentTotal === Math.round(skipVal * atSkip) ? pushValue(RGB, 2) : pushValue(RGB, 1);
            RGB.blue--;
            currentTotal++;
        }
    }

    const compareValues = () => {
        let width = window.innerWidth;

        const rgbLength = 1530;

        width > rgbLength ? getRgbBigScreen(width) : getRgbSmallScreen(width)
    }

    compareValues();

    $(document).on("mousemove", (event) => {
        const mouseX = event.originalEvent.pageX
        const width = window.innerWidth
        // $("circle.mainPlanet").attr("fill", rgbValues[mouseX]);
        // $("circle.buttonPlanet").attr("fill", Math.round(mouseX + (width/3)) >= rgbValues.length ? rgbValues[Math.round((mouseX + (width/3) - rgbValues.length))] : rgbValues[Math.round(mouseX + (width/3))]);
    });
});

// const getBracketLengths = (total) => {
//     const noByeBracketSizes = [];

//     for (i = 1; i < total; i++) {
//         noByeBracketSizes.push(Math.pow(2, i));
//     }

//     console.log(noByeBracketSizes)
// }

// const insertThings = (tempBracket, numToAdd) => {
//     tempBracket.forEach(player => {
//         atPlayer++
//         bracketOrder[(player - 1) + numToAdd] = atPlayer;
//         console.log(`Bracket Order: ${bracketOrder}, Player: ${player}`)
//     });
// }

// const fillOrder = (size) => {
//     let initialVal = size;

//     const roundsToRun = (size/2);

//     let atPlayer = 1

//     const bracketOrder = [1]

//     for (i = 0; i < roundsToRun; i++) {
//         const tempBracket = bracketOrder;

//         const numToAdd = initialVal/2

//         console.log(`Temp Brakcet: ${tempBracket}`)

        
//         initialVal = initialVal/2
//     }
// }

// fillOrder(4);

const testForEach = () => {
    const arrName = [1,,,,,,,2,,,,,,,];

    arrName.forEach(num => {console.log(num)})
}

testForEach();

