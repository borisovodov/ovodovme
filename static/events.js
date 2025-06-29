function isIOSTelegramInAppBrowser() {
    if (navigator.userAgent.includes("iPhone") && typeof window.TelegramWebviewProxy !== "undefined" && typeof window.TelegramWebviewProxyProto !== "undefined") {
        return true;
    }
    return false;
}

function isAndroidTelegramInAppBrowser() {
    if (navigator.userAgent.includes("Android") && typeof window.TelegramWebview !== "undefined") {
        return true;
    }
    return false;
}

function getTimeZone(dateStr) {
    const isoTzMatch = dateStr.match(/([+-]\d{2}:?\d{2}|Z)$/);
    let tzid = null;
    let date;
    if (isoTzMatch) {
        if (isoTzMatch[1] === "Z") {
            tzid = "UTC";
            date = new Date(dateStr);
        } else {
            // Convert "+03:00" or "+0300" to "+03:00"
            let offset = isoTzMatch[1].replace(/(\d{2})(\d{2})$/, "$1:$2");
            tzid = `UTC${offset}`;
            // Date constructor parses ISO 8601 with offset correctly
            date = new Date(dateStr);
        }
    } else {
        // No timezone info, use UTC
        tzid = "UTC";
        date = new Date(dateStr + "Z");
    }
}

function formatICSDate(dateStr, isEndDate = false) {
    const isDateWithTime = dateStr.includes("T");
    const date = new Date(dateStr);
    date.setSeconds(0);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    if (isDateWithTime) {
        return `TZID=${tzid}:${year}${month}${day}T${hours}${minutes}${seconds}`;
    } else {
        if (isEndDate) {
            const nextDate = new Date(date);
            nextDate.setDate(date.getDate() + 1);
            const nextYear = nextDate.getFullYear();
            const nextMonth = String(nextDate.getMonth() + 1).padStart(2, "0");
            const nextDay = String(nextDate.getDate()).padStart(2, "0");
            return `VALUE=DATE:${nextYear}${nextMonth}${nextDay}`;
        } else {
            return `VALUE=DATE:${year}${month}${day}`;
        }
    }
}

function formatICSLocation(location) {
    return location.replaceAll(",", "\\,");
}

function generateICS() {
    const params = new URLSearchParams(window.location.search);
    const now = new Date();
    const event = {
        uuid: crypto.randomUUID(),
        summary: params.get("summary"),
        location: formatICSLocation(params.get("location")),
        start: formatICSDate(params.get("start")),
        end: formatICSDate(params.get("end"), true),
        url: params.get("url"),
        timestamp: formatICSDate(now.toISOString()),
    };

    // Определяем TZID из DTSTART
    let tzid = null;
    const tzidMatch = event.start.match(/TZID=([^:]+):/);
    if (tzidMatch) {
        tzid = tzidMatch[1];
    }

    let vtimezone = "";
    if (tzid && tzid !== "UTC") {
        // Ожидается формат UTC+03:00 или UTC-05:00
        const offsetMatch = tzid.match(/^UTC([+-])(\d{2}):(\d{2})$/);
        if (offsetMatch) {
            const sign = offsetMatch[1];
            const hours = offsetMatch[2];
            const minutes = offsetMatch[3];
            const offset = `${sign}${hours}${minutes}`;
            vtimezone = `\nBEGIN:VTIMEZONE\nTZID:${tzid}\nBEGIN:STANDARD\nTZOFFSETFROM:${offset}\nTZOFFSETTO:${offset}\nTZNAME:${tzid}\nDTSTART:19700101T000000\nEND:STANDARD\nEND:VTIMEZONE`;
        }
    }

    return `\nBEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\nPRODID:-//Apple Inc.//macOS 15.5//RU${vtimezone}\n\nBEGIN:VEVENT\nUID:${event.uuid}\nDTSTART;${event.start}\nDTEND;${event.end}\nDTSTAMP:${event.timestamp}\nSUMMARY:${event.summary}\nLOCATION:${event.location}\nURL;VALUE=URI:${event.url}\nEND:VEVENT\n\nEND:VCALENDAR`.trim();
}

function downloadICS() {
    const content = generateICS()
    const blob = new Blob([content], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "event.ics";
    a.click();

    URL.revokeObjectURL(url);
}

window.addEventListener("DOMContentLoaded", () => {
    // if (isIOSTelegramInAppBrowser()) {
    //     document.getElementById("telegram-message-ios").style.display = "block";
    // } else if (isAndroidTelegramInAppBrowser()) {
    //     document.getElementById("telegram-message-android").style.display = "block";
    // } else {
        downloadICS();
    //     document.getElementById("download-message").style.display = "block";
    // }
});