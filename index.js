function driversWithRevenueOver(drivers, number) {
    return drivers.filter(function(driver) {
        return driver.revenue > number;
    });
}

function driverNamesWithRevenueOver(drivers, number) {
    return driversWithRevenueOver(drivers, number).map(function(driver) {
        return driver.name;
    });
}

function exactMatch(drivers, driverMatch) {
    return drivers.filter(function(driver) {
        let result = true;
        for (const key in driverMatch) {
            result &= driver[key] === driverMatch[key];
        }
        return result;
    });
}

function exactMatchToList(drivers, driverMatch) {
    return exactMatch(drivers, driverMatch).map(function(driver) {
        return driver.name;
    });
}

