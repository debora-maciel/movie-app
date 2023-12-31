
function returnMonthComplete(month: string) {
    switch (month) {
        case '1':
            return 'Jan';
        case '2':
            return 'Fev';
        case '3':
            return 'Mar';
        case '4':
            return 'Apr';
        case '5':
            return 'May';
        case '6':
            return 'Jun';
        case '7':
            return 'Jul';
        case '8':
            return 'Aug';
        case '9':
            return 'Sep';
        case '10':
            return 'Ouc';
        case '11':
            return 'Nov';
        case '12':
            return 'Dec';
        default:
            return month;
    }
}

function returnRoundedPercentage(num: string | number) {
    return Math.round(Number(num) * 100 / 10);
}

function returnTimeConvert(minutes: number) {
    var num = minutes;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var mins = (hours - rhours) * 60;
    var rminutes = Math.round(mins);
    return rhours + "h " + rminutes + " m";
}

const MoviesUtils = {
    returnTimeConvert,
    returnMonthComplete,
    returnRoundedPercentage,
}

export default MoviesUtils;