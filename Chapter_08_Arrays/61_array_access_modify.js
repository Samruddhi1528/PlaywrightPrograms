let statuses = ["pass", "fail", "skip", "pending", "blocked"]

console.log(statuses[0])
console.log(statuses.at(-1)) //last element
console.log(statuses.at(-6)) //udefined


//Modify
statuses[0] = "passed"
console.log(statuses)

