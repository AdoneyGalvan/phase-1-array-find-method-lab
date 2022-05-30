// code your solution here
const superbowlWin = (record) => {

    let item = record.find((item) => { 
        return item.result == "W";
    });

    if (item != undefined)
    {
        return item.year;
    }
    else{
        return item;
    }
}


