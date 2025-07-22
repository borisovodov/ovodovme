export function downloadICS() {
    const content = generateICS()
    const blob = new Blob([content], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "event.ics";
    a.click();

    URL.revokeObjectURL(url);
}

function generateICS() {
    const params = new URLSearchParams(window.location.search);
    const now = new Date();
    const event = {
        uuid: crypto.randomUUID(),
        summary: params.get("summary"),
        location: formatICSLocation(params.get("location") || ""),
        start: formatICSDate(params.get("start") || now.toISOString()),
        end: formatICSDate(params.get("end") || now.toISOString(), true),
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
DTSTART;${event.start}
DTEND;${event.end}
DTSTAMP:${event.timestamp}
SUMMARY:${event.summary}
LOCATION:${event.location}
URL;VALUE=URI:${event.url}
END:VEVENT

END:VCALENDAR`.trim();
}

function formatICSLocation(location: string) {
    return location.replaceAll(",", "\\,");
}

function formatICSDate(str: string, isEndDate: boolean = false) {
    const dateStr = str.replaceAll(" ", "+");
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
        return `TZID=Asia/Yekaterinburg:${year}${month}${day}T${hours}${minutes}${seconds}`;
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
