const getTime = (argv) => {
    const action = argv._[0];
    const {year, month, date} = argv;

    if (!action) throw new Error('Действие не определено');

    const toString = num => {
        return num < 10 ? `0${num}` : num;
    }
    
    const today = new Date();
    const yearT =  today.getFullYear();
    const monthT = today.getMonth() + 1;
    const dateT = today.getDate();
    const hoursT = today.getHours();
    const minutesT = today.getMinutes()

    const newDate = new Date(today);

    switch (action) {
        case 'current':
            if (year !== undefined || month !== undefined || date !== undefined) {
                if (year) {
                    return yearT;
                } else if (month) {
                    return toString(monthT);
                } else if (date) {
                    return toString(dateT);
                }
            } else {
                return `${yearT}-${toString(monthT)}-${toString(dateT)} ${toString(hoursT)}:${toString(minutesT)}`;
            }
            break;
        case 'add': 
            if (year === undefined && month === undefined && date == undefined) throw new Error ('Параметры не переданы')
            if (year) {
                newDate.setFullYear(yearT + year)
                return newDate.getFullYear();
            } else if (month) {
                newDate.setMonth(monthT + month)
                return toString(newDate.getMonth());
            } else if (date) {
                newDate.setDate(dateT + date);
                return toString(newDate.getDate());
            }
            break;
        case 'sub':
            if (year === undefined && month === undefined && date == undefined) throw new Error ('Параметры не переданы')
            if (year) {
                newDate.setFullYear(yearT - year)
                return newDate.getFullYear();
            } else if (month) {
                newDate.setMonth(monthT - month)
                return toString(newDate.getMonth());
            } else if (date) {
                newDate.setDate(dateT - date);
                return toString(newDate.getDate());
            }
            break;
    }
}

module.exports = getTime;
