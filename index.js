function driversWithRevenueOver(array, number) {
    return array.filter(function(driver) { return driver.revenue > number; });
}

function driverNamesWithRevenueOver(array, number) {
    return driversWithRevenueOver(array, number).map(function(driver) { return driver.name; });
}

function exactMatch(array, obj) {
    return array.filter(function(driver) { 
        let matches = false;
        for (const key in obj) {
            matches = driver[key] === obj[key];
        }
        return matches; 
    });
}

function exactMatchToList(array, obj) {
    return exactMatch(array, obj).map(function(driver) { return driver.name; });
}