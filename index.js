// Code your solution here:
function driversWithRevenueOver(driverArray, revenueNum) {
    let my_arr = [];
    for (const driver of driverArray){
        if (driver.revenue > revenueNum) {
            my_arr.push(driver)
        }
    }
    return my_arr
}

function driverNamesWithRevenueOver(driverArray, revenueNum) {
    let my_arr = [];
    for (const driver of driverArray) {
        if (driver.revenue > revenueNum) {
            my_arr.push(driver.name);
        }
    }
    return my_arr;
}

//function exactMatch(driverArray, attributeObject) {
//    const driver = driverArray.map(driver => )
//    const d = driverArray.filter(driver => driver[attributeObject]keys() === attributeObject[value])
//}
function exactMatch (drivers, matcher) {
    return drivers.filter(function (driver) {
      let matches = false;
  
      for (const key in matcher) {
        matches = driver[key] === matcher[key];
      }
  
      return matches;
    });
  }

function exactMatchToList(driverArray, attributeObject) {
    return exactMatch(driverArray, attributeObject).map(driver => driver.name)
}
