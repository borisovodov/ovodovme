export enum Mode {
    MAIN,
    IOS_TELEGRAM_PREVIEW,
    ANDROID_TELEGRAM_PREVIEW,
    DOWNLOAD,
    EMPTY,
}

export function isMainPage() {
    const params = new URLSearchParams(window.location.search);
    return !(params.has("summary") || params.has("start") || params.has("end"));
}

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
        start: formatICSDate(params.get("start") || now.toISOString()), // тут нужно добавить проверку на наличие и в случае чего прокидывать ошибку
        end: formatICSDate(params.get("end") || now.toISOString(), true), // тут нужно добавить проверку на наличие и в случае чего прокидывать ошибку
        tz: getTZ(params.get("start") || now.toISOString()), // тут нужно добавить проверку на наличие и в случае чего прокидывать ошибку
        location: formatICSLocation(params.get("location") || ""),
        url: params.get("url"),
        timestamp: formatICSDate(now.toISOString()),
    };

    return `
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:-//Apple Inc.//macOS 15.5//RU

BEGIN:VTIMEZONE
TZID:${event.tz.id}
BEGIN:STANDARD
TZOFFSETFROM:${event.tz.offset}
TZOFFSETTO:${event.tz.offset}
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
    // Иногда символ `+` может заменяться на пробел. Эта строка решает эту проблему.
    const dateStr = str.replaceAll(" ", "+");
    const isDateWithTime = dateStr.includes("T");
    const date = new Date(dateStr);
    date.setSeconds(0);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    if (isDateWithTime) {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        const tz = getTZ(dateStr);

        return `TZID=${tz.id}:${year}${month}${day}T${hours}${minutes}${seconds}`;
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

function getTZ(str: string): TZ {
    const tzRegex = /(Z|[+-]\d{2}:?\d{2})$/;
    const tzMatch = str.match(tzRegex);
    if (tzMatch) {
        const tz = tzMatch[1];
        return timeZones.find(zone => zone.offset === tz) || defaultTimeZone;
    }
    return defaultTimeZone;
}

interface TZ {
    id: string;
    offset: string;
}

const timeZones: TZ[] = [
    { "id": "Pacific/Kwajalein", "offset": "-12:00" },
    { "id": "Pacific/Pago_Pago", "offset": "-11:00" },
    { "id": "Pacific/Honolulu", "offset": "-10:00" },
    { "id": "America/Anchorage", "offset": "-09:00" },
    { "id": "America/Los_Angeles", "offset": "-08:00" },
    { "id": "America/Denver", "offset": "-07:00" },
    { "id": "America/Mexico_City", "offset": "-06:00" },
    { "id": "America/New_York", "offset": "-05:00" },
    { "id": "America/Santiago", "offset": "-04:00" },
    { "id": "America/Argentina/Buenos_Aires", "offset": "-03:00" },
    { "id": "America/Noronha", "offset": "-02:00" },
    { "id": "Atlantic/Azores", "offset": "-01:00" },
    { "id": "UTC", "offset": "+00:00" },
    { "id": "Europe/Paris", "offset": "+01:00" },
    { "id": "Europe/Bucharest", "offset": "+02:00" },
    { "id": "Europe/Moscow", "offset": "+03:00" },
    { "id": "Asia/Dubai", "offset": "+04:00" },
    { "id": "Asia/Yekaterinburg", "offset": "+05:00" },
    { "id": "Asia/Almaty", "offset": "+06:00" },
    { "id": "Asia/Bangkok", "offset": "+07:00" },
    { "id": "Asia/Shanghai", "offset": "+08:00" },
    { "id": "Asia/Tokyo", "offset": "+09:00" },
    { "id": "Australia/Sydney", "offset": "+10:00" },
    { "id": "Pacific/Guadalcanal", "offset": "+11:00" },
    { "id": "Pacific/Auckland", "offset": "+12:00" }
];

const defaultTimeZone: TZ = { id: "UTC", offset: "+00:00" };
