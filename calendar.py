from datetime import datetime
import caldav
from caldav.elements import dav, cdav

# Caldav url
url = "https://user:pass@hostname/caldav.php/"

vcal = """BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Example Corp.//CalDAV Client//EN
BEGIN:VEVENT
UID:1234567890
DTSTAMP:20100510T182145Z
DTSTART:20100512T170000Z
DTEND:20100512T180000Z
SUMMARY:This is an event
END:VEVENT
END:VCALENDAR
"""

client = caldav.DAVClient(url)
principal = client.principal()
calendars = principal.calendars()
if len(calendars) > 0:
    calendar = calendars[0]
    print "Using calendar", calendar

    print "Renaming"
    calendar.set_properties([dav.DisplayName("Test calendar"),])
    print calendar.get_properties([dav.DisplayName(),])

    event = calendar.add_event(vcal)
    print "Event", event, "created"

    print "Looking for events in 2010-05"
    results = calendar.date_search(
        datetime(2010, 5, 1), datetime(2010, 6, 1))

    for event in results:
        print "Found", event