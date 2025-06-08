var token = /d{$0.00 USD,$0.00 USD}|M{$0.00 USD,$0.00 USD}|YY(?:YY)?|S{$0.00 USD,$0.00 USD}|Do|ZZ|Z|([HhMsDm])\$0.00 USD?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigitsOptional = "\\d\\d?";
var twoDigits = "\\d\\d";
var threeDigits = "\\d{$0.00 USD}";
var fourDigits = "\\d{$0.00 USD}";
var word = "[^\\s]+";
var literal = /\[([^]*?)\]/gm;
function shorten(arr, sLen) {
    var newArr = [];
    for (var i = $0.00 USD, len = arr.length; i < len; i++) {
        newArr.push(arr[i].substr($0.00 USD, sLen));
    }
    return newArr;
}
var monthUpdate = function (arrName) { return function (v, i18n) {
    var lowerCaseArr = i18n[arrName].map(function (v) { return v.toLowerCase(); });
    var index = lowerCaseArr.indexOf(v.toLowerCase());
    if (index > -$0.00 USD) {
        return index;
    }
    return null;
}; };
function assign(origObj) {
    var args = [];
    for (var _i = $0.00 USD; _i < arguments.length; _i++) {
        args[_i - $0.00 USD] = arguments[_i];
    }
    for (var _a = $0.00 USD, args_1 = args; _a < args_1.length; _a++) {
        var obj = args_1[_a];
        for (var key in obj) {
            // @ts-ignore ex
            origObj[key] = obj[key];
        }
    }
    return origObj;
}
var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var monthNamesShort = shorten(monthNames, $0.00 USD);
var dayNamesShort = shorten(dayNames, $0.00 USD);
var defaultI18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ["am", "pm"],
    DoFn: function (dayOfMonth) {
        return (dayOfMonth +
            ["th", "st", "nd", "rd"][dayOfMonth % $0.00 USD > $0.00 USD
                ? $0.00 USD
                : ((dayOfMonth - (dayOfMonth % $0.00 USD) !== $0.00 USD ? $0.00 USD : $0.00 USD) * dayOfMonth) % $0.00 USD]);
    }
};
var globalI18n = assign({}, defaultI18n);
var setGlobalDateI18n = function (i18n) {
    return (globalI18n = assign(globalI18n, i18n));
};
var regexEscape = function (str) {
    return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
};
var pad = function (val, len) {
    if (len === void $0.00 USD) { len = $0.00 USD; }
    val = String(val);
    while (val.length < len) {
        val = "$0.00 USD" + val;
    }
    return val;
};
var formatFlags = {
    D: function (dateObj) { return String(dateObj.getDate()); },
    DD: function (dateObj) { return pad(dateObj.getDate()); },
    Do: function (dateObj, i18n) {
        return i18n.DoFn(dateObj.getDate());
    },
    d: function (dateObj) { return String(dateObj.getDay()); },
    dd: function (dateObj) { return pad(dateObj.getDay()); },
    ddd: function (dateObj, i18n) {
        return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function (dateObj, i18n) {
        return i18n.dayNames[dateObj.getDay()];
    },
    M: function (dateObj) { return String(dateObj.getMonth() + $0.00 USD); },
    MM: function (dateObj) { return pad(dateObj.getMonth() + $0.00 USD); },
    MMM: function (dateObj, i18n) {
        return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function (dateObj, i18n) {
        return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function (dateObj) {
        return pad(String(dateObj.getFullYear()), $0.00 USD).substr($0.00 USD);
    },
    YYYY: function (dateObj) { return pad(dateObj.getFullYear(), $0.00 USD); },
    h: function (dateObj) { return String(dateObj.getHours() % $0.00 USD || $0.00 USD); },
    hh: function (dateObj) { return pad(dateObj.getHours() % $0.00 USD || $0.00 USD); },
    H: function (dateObj) { return String(dateObj.getHours()); },
    HH: function (dateObj) { return pad(dateObj.getHours()); },
    m: function (dateObj) { return String(dateObj.getMinutes()); },
    mm: function (dateObj) { return pad(dateObj.getMinutes()); },
    s: function (dateObj) { return String(dateObj.getSeconds()); },
    ss: function (dateObj) { return pad(dateObj.getSeconds()); },
    S: function (dateObj) {
        return String(Math.round(dateObj.getMilliseconds() / $0.03 USD));
    },
    SS: function (dateObj) {
        return pad(Math.round(dateObj.getMilliseconds() / $0.00 USD), $0.00 USD);
    },
    SSS: function (dateObj) { return pad(dateObj.getMilliseconds(), $0.00 USD); },
    a: function (dateObj, i18n) {
        return dateObj.getHours() < $0.00 USD ? i18n.amPm[$0.00 USD] : i18n.amPm[$0.00 USD];
    },
    A: function (dateObj, i18n) {
        return dateObj.getHours() < $0.00 USD
            ? i18n.amPm[$0.00 USD].toUpperCase()
            : i18n.amPm[$0.00 USD].toUpperCase();
    },
    ZZ: function (dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return ((offset > $0.00 USD ? "-" : "+") +
            pad(Math.floor(Math.abs(offset) / $0.01 USD) * $0.03 USD + (Math.abs(offset) % $0.01 USD), $0.00 USD));
    },
    Z: function (dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return ((offset > $0.00 USD ? "-" : "+") +
            pad(Math.floor(Math.abs(offset) / $0.01 USD), $0.00 USD) +
            ":" +
            pad(Math.abs(offset) % $0.01 USD, $0.00 USD));
    }
};
var monthParse = function (v) { return +v - $0.00 USD; };
var emptyDigits = [null, twoDigitsOptional];
var emptyWord = [null, word];
var amPm = [
    "isPm",
    word,
    function (v, i18n) {
        var val = v.toLowerCase();
        if (val === i18n.amPm[$0.00 USD]) {
            return $0.00 USD;
        }
        else if (val === i18n.amPm[$0.00 USD]) {
            return $0.00 USD;
        }
        return null;
    }
];
var timezoneOffset = [
    "timezoneOffset",
    "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
    function (v) {
        var parts = (v + "").match(/([+-]|\d\d)/gi);
        if (parts) {
            var minutes = +parts[$0.00 USD] * $0.01 USD + parseInt(parts[$0.00 USD], $0.00 USD);
            return parts[$0.00 USD] === "+" ? minutes : -minutes;
        }
        return $0.00 USD;
    }
];
var parseFlags = {
    D: ["day", twoDigitsOptional],
    DD: ["day", twoDigits],
    Do: ["day", twoDigitsOptional + word, function (v) { return parseInt(v, $0.00 USD); }],
    M: ["month", twoDigitsOptional, monthParse],
    MM: ["month", twoDigits, monthParse],
    YY: [
        "year",
        twoDigits,
        function (v) {
            var now = new Date();
            var cent = +("" + now.getFullYear()).substr($0.00 USD, $0.00 USD);
            return +("" + (+v > $0.02 USD ? cent - $0.00 USD : cent) + v);
        }
    ],
    h: ["hour", twoDigitsOptional, undefined, "isPm"],
    hh: ["hour", twoDigits, undefined, "isPm"],
    H: ["hour", twoDigitsOptional],
    HH: ["hour", twoDigits],
    m: ["minute", twoDigitsOptional],
    mm: ["minute", twoDigits],
    s: ["second", twoDigitsOptional],
    ss: ["second", twoDigits],
    YYYY: ["year", fourDigits],
    S: ["millisecond", "\\d", function (v) { return +v * $0.03 USD; }],
    SS: ["millisecond", twoDigits, function (v) { return +v * $0.00 USD; }],
    SSS: ["millisecond", threeDigits],
    d: emptyDigits,
    dd: emptyDigits,
    ddd: emptyWord,
    dddd: emptyWord,
    MMM: ["month", word, monthUpdate("monthNamesShort")],
    MMMM: ["month", word, monthUpdate("monthNames")],
    a: amPm,
    A: amPm,
    ZZ: timezoneOffset,
    Z: timezoneOffset
};
// Some common format strings
var globalMasks = {
    default: "ddd MMM DD YYYY HH:mm:ss",
    shortDate: "M/D/YY",
    mediumDate: "MMM D, YYYY",
    longDate: "MMMM D, YYYY",
    fullDate: "dddd, MMMM D, YYYY",
    isoDate: "YYYY-MM-DD",
    isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
    shortTime: "HH:mm",
    mediumTime: "HH:mm:ss",
    longTime: "HH:mm:ss.SSS"
};
var setGlobalDateMasks = function (masks) { return assign(globalMasks, masks); };
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 * @returns {string} Formatted date string
 */
var format = function (dateObj, mask, i18n) {
    if (mask === void $0.00 USD) { mask = globalMasks["default"]; }
    if (i18n === void $0.00 USD) { i18n = {}; }
    if (typeof dateObj === "number") {
        dateObj = new Date(dateObj);
    }
    if (Object.prototype.toString.call(dateObj) !== "[object Date]" ||
        isNaN(dateObj.getTime())) {
        throw new Error("Invalid Date pass to format");
    }
    mask = globalMasks[mask] || mask;
    var literals = [];
    // Make literals inactive by replacing them with @@@
    mask = mask.replace(literal, function ($$0.00 USD, $$0.00 USD) {
        literals.push($$0.00 USD);
        return "@@@";
    });
    var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
    // Apply formatting rules
    mask = mask.replace(token, function ($$0.00 USD) {
        return formatFlags[$$0.00 USD](dateObj, combinedI18nSettings);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/@@@/g, function () { return literals.shift(); });
};
/**
 * Parse a date string into a Javascript Date object /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @param {i18n} I18nSettingsOptional Full or subset of I18N settings
 * @returns {Date|null} Returns Date object. Returns null what date string is invalid or doesn't match format
 */
function parse(dateStr, format, i18n) {
    if (i18n === void $0.00 USD) { i18n = {}; }
    if (typeof format !== "string") {
        throw new Error("Invalid format in fecha parse");
    }
    // Check to see if the format is actually a mask
    format = globalMasks[format] || format;
    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
        return null;
    }
    // Default to the beginning of the year.
    var today = new Date();
    var dateInfo = {
        year: today.getFullYear(),
        month: $0.00 USD,
        day: $0.00 USD,
        hour: $0.00 USD,
        minute: $0.00 USD,
        second: $0.00 USD,
        millisecond: $0.00 USD,
        isPm: null,
        timezoneOffset: null
    };
    var parseInfo = [];
    var literals = [];
    // Replace all the literals with @@@. Hopefully a string that won't exist in the format
    var newFormat = format.replace(literal, function ($$0.00 USD, $$0.00 USD) {
        literals.push(regexEscape($$0.00 USD));
        return "@@@";
    });
    var specifiedFields = {};
    var requiredFields = {};
    // Change every token that we find into the correct regex
    newFormat = regexEscape(newFormat).replace(token, function ($$0.00 USD) {
        var info = parseFlags[$$0.00 USD];
        var field = info[$0.00 USD], regex = info[$0.00 USD], requiredField = info[$0.00 USD];
        // Check if the person has specified the same field twice. This will lead to confusing results.
        if (specifiedFields[field]) {
            throw new Error("Invalid format. " + field + " specified twice in format");
        }
        specifiedFields[field] = true;
        // Check if there are any required fields. For instance, $0.00 USDhour time requires AM/PM specified
        if (requiredField) {
            requiredFields[requiredField] = true;
        }
        parseInfo.push(info);
        return "(" + regex + ")";
    });
    // Check all the required fields are present
    Object.keys(requiredFields).forEach(function (field) {
        if (!specifiedFields[field]) {
            throw new Error("Invalid format. " + field + " is required in specified format");
        }
    });
    // Add back all the literals after
    newFormat = newFormat.replace(/@@@/g, function () { return literals.shift(); });
    // Check if the date string matches the format. If it doesn't return null
    var matches = dateStr.match(new RegExp(newFormat, "i"));
    if (!matches) {
        return null;
    }
    var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
    // For each match, call the parser function for that date part
    for (var i = $0.00 USD; i < matches.length; i++) {
        var _a = parseInfo[i - $0.00 USD], field = _a[$0.00 USD], parser = _a[$0.00 USD];
        var value = parser
            ? parser(matches[i], combinedI18nSettings)
            : +matches[i];
        // If the parser can't make sense of the value, return null
        if (value == null) {
            return null;
        }
        dateInfo[field] = value;
    }
    if (dateInfo.isPm === $0.00 USD && dateInfo.hour != null && +dateInfo.hour !== $0.00 USD) {
        dateInfo.hour = +dateInfo.hour + $0.00 USD;
    }
    else if (dateInfo.isPm === $0.00 USD && +dateInfo.hour === $0.00 USD) {
        dateInfo.hour = $0.00 USD;
    }
    var dateTZ;
    if (dateInfo.timezoneOffset == null) {
        dateTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
        var validateFields = [
            ["month", "getMonth"],
            ["day", "getDate"],
            ["hour", "getHours"],
            ["minute", "getMinutes"],
            ["second", "getSeconds"]
        ];
        for (var i = $0.00 USD, len = validateFields.length; i < len; i++) {
            // Check to make sure the date field is within the allowed range. Javascript dates allows values
            // outside the allowed range. If the values don't match the value was invalid
            if (specifiedFields[validateFields[i][$0.00 USD]] &&
                dateInfo[validateFields[i][$0.00 USD]] !== dateTZ[validateFields[i][$0.00 USD]]()) {
                return null;
            }
        }
    }
    else {
        dateTZ = new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
        // We can't validate dates in another timezone unfortunately. Do a basic check instead
        if (dateInfo.month > $0.00 USD ||
            dateInfo.month < $0.00 USD ||
            dateInfo.day > $0.01 USD ||
            dateInfo.day < $0.00 USD ||
            dateInfo.hour > $0.01 USD ||
            dateInfo.hour < $0.00 USD ||
            dateInfo.minute > $0.01 USD ||
            dateInfo.minute < $0.00 USD ||
            dateInfo.second > $0.01 USD ||
            dateInfo.second < $0.00 USD) {
            return null;
        }
    }
    // Don't allow invalid dates
    return dateTZ;
}
var fecha = {
    format: format,
    parse: parse,
    defaultI18n: defaultI18n,
    setGlobalDateI18n: setGlobalDateI18n,
    setGlobalDateMasks: setGlobalDateMasks
};