function isTelegramInAppBrowser() {
    if (navigator.userAgent.includes("Android") && typeof window.TelegramWebview !== "undefined") {
        return true;
    }
    if (navigator.userAgent.includes("iPhone") && typeof window.TelegramWebviewProxy !== "undefined" && typeof window.TelegramWebviewProxyProto !== "undefined") {
        return true;
    }
    return false;
}

function formatICSDate(dateStr) {
    console.log(dateStr);
    const date = dateStr.split("T")[0];
    const time = dateStr.split("T")[1].split("+")[0];
    const hours = time.split(":")[0];
    const minutes = time.split(":")[1];
    console.log("date: " + date);
    console.log("time: " + time);
    console.log("hours: " + hours);
    console.log("minutes: " + minutes);
    console.log(date.replaceAll("-", "") + "T" + hours + minutes + "00");
    return date.replaceAll("-", "") + "T" + hours + minutes + "00";
}

function formatICSLocation(location) {
    console.log(location);
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
        end: formatICSDate(params.get("end")),
        url: params.get("url"),
        timestamp: formatICSDate(now.toISOString()),
    };

    return `
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:-//Apple Inc.//macOS 15.5//RU

BEGIN:VTIMEZONE
TZID:Asia/Yekaterinburg
X-LIC-LOCATION:Asia/Yekaterinburg
BEGIN:STANDARD
TZOFFSETFROM:+0500
TZOFFSETTO:+0500
TZNAME:+05
DTSTART:19700101T000000
END:STANDARD
END:VTIMEZONE

BEGIN:VEVENT
UID:${event.uuid}
DTSTART;TZID=Asia/Yekaterinburg:${event.start}
DTEND;TZID=Asia/Yekaterinburg:${event.end}
DTSTAMP:${event.timestamp}
SUMMARY:${event.summary}
LOCATION:${event.location}
URL;VALUE=URI:${event.url}
END:VEVENT

END:VCALENDAR`.trim();
}

function downloadICS(content) {
    const blob = new Blob([content], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "event.ics";
    a.click();

    URL.revokeObjectURL(url);
}

window.addEventListener("DOMContentLoaded", () => {
    // if (isTelegramInAppBrowser()) {
        document.getElementById("telegram-message").style.display = "block";
    // } else {
    //     const content = generateICS();
    //     downloadICS(content);
    // }
});