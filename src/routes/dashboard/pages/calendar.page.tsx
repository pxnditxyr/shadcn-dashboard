import { useState } from 'react'
import { Calendar } from '../../../components/ui/calendar'
import { Badge } from '../../../components/ui/badge'

export const CalendarPage = () => {

  const [ date, setDate ] = useState<Date | undefined>( new Date() )

  const [ multipleDates, setMultipleDates ] = useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString( "es-Es", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  } )

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Calendar
        mode="single"
        selected={ date }
        onSelect={ setDate }
        className="rounded-md border shadow"
        disabled={ ( date ) => date.getDay() === 0 || date.getDay() === 6 }
      />

      <Badge variant={ 'success' } className="min-w-20">{ smallDate }</Badge>

      <Calendar
        mode="single"
        selected={ date }
        onSelect={ setDate }
        className="rounded-md border shadow"
        disabled={ ( date ) => date > new Date() }
      />

      <Calendar
        mode="multiple"
        selected={ multipleDates }
        onSelect={ setMultipleDates }
        className="rounded-md border shadow"
      />


      <Badge variant={ 'success' } className="min-w-20">{ multipleDates?.map( date => date.toLocaleDateString( "es-Es", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
      } ) ).join( ', ' ) }</Badge>

    </div>
  )
}
