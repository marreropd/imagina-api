import { DateTime } from 'luxon'

class DateService {
  public defautFormat = 'MM dd yyyy'

  constructor(defaultFormat: string | null = null) {
    this.defautFormat = defaultFormat ?? this.defautFormat
  }

  public toDateTime(date: DateTime | null = null, time: DateTime | null = null) {
    let dateTime = DateTime.now()

    if (date) {
      dateTime = dateTime.set({ year: date.year, month: date.month, day: date.day })
    }

    if (time) {
      dateTime = dateTime.set({ hour: time.hour, minute: time.minute, second: time.second })
    }

    return dateTime
  }

  public toDate(dateTime: DateTime = DateTime.now(), format: string = this.defautFormat) {
    return dateTime.toFormat(format)
  }
}

export default new DateService()
