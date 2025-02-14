import { DateTime } from "luxon";



export function randomDate(minusYear: number)
{
    const result = DateTime.now().setZone("America/New_York").minus({ years: minusYear }); //.endOf("day")
    return result
}

export function randomJsDate(minusYear: number)
{
    return randomDate(minusYear).toJSDate();
}

