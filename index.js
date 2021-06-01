// need a function called superbowlWin(record)

function superbowlWin(records) {
    const foundObject = records.find(record  => record.result === "W")
    if (foundObject) {
        return foundObject.year
    }
}