// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// formatDate(date, "yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// formatDate(date, "yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
function formatDate(date, pattern) {
    if (!date || Object.prototype.toString.call(date) !== '[object Date]') return date
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "w": date.getDay(), //星期
        "S": date.getMilliseconds() //毫秒 
    }
    var weeks_zh = ['日', '一', '二', '三', '四', '五', '六']
    if (/(y+)/.test(pattern)) pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(pattern)) {
            if (k === 'w') {
                pattern = pattern.replace(RegExp.$1, weeks_zh[o[k]])
            } else {
                pattern = pattern.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
            }
        }
    }
    return pattern
}

// 返回间隔天数
function diffDate(past, now) {
    return (Math.abs(new Date(now) - new Date(past))) / 1000 / 60 / 60 / 24
}

// 判断年龄
// 1988-07-24, >=18 ?
function isAboveAge(dob, age) {
    const n = new Date()
    const b = new Date(dob)
    let t = new Date().setFullYear(n.getFullYear() - age)
    t = new Date(t)
    return b <= t;
}

// 获取两个日期之前的所有日期
function getAllDatesBetween(begin, end) {
    let dates = []
    var unixDb = begin.getTime()
    var unixDe = end.getTime()
    for (var k = unixDb; k <= unixDe;) {
        dates.push(new Date(parseInt(k)))
        k = k + 24 * 60 * 60 * 1000
    }
    return dates
}

// 计算离日期多少年前的某个日期
function getDateFromDateByYears(date, years) {
    return formatDate(new Date(new Date(date).setFullYear(date.getFullYear() - years)), 'yyyy-MM-dd')
}

function obj2Array(obj) {
    let arr = []
    for (let key in obj) {
        obj[key]['__id__'] = key
        arr.push(obj[key])
    }
    return arr
}

// 随机整数
function rnd(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}

// 获取距离某日前或后n日内的所有日期
// n > 0: after; n < 0: before
// 2018-09-12, 3 => [2018-09-13, 2018-09-14, 2018-09-15]
function getIntervalDays(date, n) {
    let d = new Date(date)
    let days = []
    if (n >= 0) {
        for (let i = 1; i <= n; i++) {
            days.push(formatDate(new Date(d.getTime() + i * 3600 * 24 * 1000), 'yyyy-MM-dd'))
        }
    } else {
        for (let i = n; i < 0; i++) {
            days.push(formatDate(new Date(d.getTime() + i * 3600 * 24 * 1000), 'yyyy-MM-dd'))
        }
    }
    return days
}

// Like Number.toFixed() in JS
// Fixed js bug
// 末位补零
function toFixed(m, n) {
    let s = (parseInt(m * 1.0 * Math.pow(10, n) + 0.5) / Math.pow(10, n)).toString()
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + n) {
        s += '0';
    }
    return s
}

// 判断是否时微信中访问
function isWechat() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}

// 显示utc时间，还原微信自动转换中国时区
function utc(date) {
    return isWechat() ? new Date(date.getTime() + date.getTimezoneOffset() * 60000) : date
}

// 截取日期
function sliceDate(date) {
    // 2018-12-19T05:45:00
    let pos = date.indexOf('T')
    let pos2 = date.lastIndexOf(':')
    return {
        date: date.slice(0, pos),
        time: date.slice(pos+1, pos2)
    }
}

function GUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}

export {
    formatDate,
    diffDate,
    getAllDatesBetween,
    obj2Array,
    rnd,
    isAboveAge,
    getIntervalDays,
    toFixed,
    isWechat,
    utc,
    sliceDate,
    GUID,
    getDateFromDateByYears
}