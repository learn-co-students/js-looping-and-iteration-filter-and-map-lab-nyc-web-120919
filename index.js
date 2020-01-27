// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    let new_arr = [];
    new_arr = drivers.filter(function(driver) {
        return driver['revenue'] >= revenue})
    return new_arr;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let obj_arr = driversWithRevenueOver(drivers,revenue);
    let new_arr = obj_arr.map(function(driver) {
        return driver["name"];
    }
    )
    return new_arr;
}

function exactMatch(array, obj){
    for (const key in obj){
    return array.filter(driver => driver[key] === obj[key])
    }}

function exactMatchToList(array, obj) {
    let full_arr = exactMatch(array, obj);
    let new_arr = []
    for (const i in full_arr) {
        new_arr.push(full_arr[i].name)
    }
    return new_arr;
}