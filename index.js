// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice((arrayOfDrivers.length) - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function (int) { return int * fare }
}

const fareDoubler = function (fare) {
    const double = createFareMultiplier(2)
    return double(fare)
}

const fareTripler = function (fare) {
    const triple = createFareMultiplier(3)
    return triple(fare)
}

function selectDifferentDrivers(arrayOfDrivers, second) {
    if (second === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if (second === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}