// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
    const filteredDrivers = drivers.filter(function(driver){
        return driver["revenue"] >= revenue;
    })
    return filteredDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue){
    const filteredDrivers = driversWithRevenueOver(drivers, revenue);
    const filteredDriverNames = filteredDrivers.map(function(driver){
        return driver.name;
    })
    return filteredDriverNames;
}

function exactMatch(drivers, object) {
    const filteredDrivers = drivers.filter(function(driver){
        return driver.name === object.name || driver.revenue === object.revenue
    })
    return filteredDrivers
}

function exactMatchToList(drivers, object){
    const filteredDrivers = exactMatch(drivers, object);
    const filteredDriverNames = filteredDrivers.map(function(driver){
        return driver.name
    })
    return filteredDriverNames;
}