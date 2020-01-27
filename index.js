// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter((driver) => {
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue)
        .map((driver) => {
            return driver.name;
        });
}

function exactMatch(drivers, matcher) {
    return drivers.filter((driver) => {
        let matches = false;

        for (const key in matcher) {
            matches = driver[key] === matcher[key];
        }

        return matches;
    });
}

function exactMatchToList(drivers, matcher) {
    return exactMatch(drivers, matcher)
        .map((driver) => {
            return driver.name;
        });
}