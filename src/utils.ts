// se ouede hacer con express-validator

import { NewDiaryEntry } from './types'
import { Visibility, Weather } from './enums'

const parseComment = (commentRequest: any): string => {
  if (!isString(commentRequest)) { // si no es string que arroje el error
    throw new Error('Incorrect or missing comment')
  }

  return commentRequest
}

const parseDate = (dateRequest: any): string => {
  if (!isString(dateRequest) || !isDate(dateRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateRequest
}

const parseWeather = (weatherRequest: any): Weather => {
  if (!isString(weatherRequest) || !isWeather(weatherRequest)) {
    throw new Error('Incorrect or missing weather')
  }

  return weatherRequest
}

const parseVisibility = (visibilityRequest: any): Visibility => {
  if (!isString(visibilityRequest) || !isVisibility(visibilityRequest)) {
    throw new Error('Incorrect or missing visibility')
  }

  return visibilityRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param) // que incluya uno de los parametros de Weather
}

// verifica si una variable es de tipo cadena de texto. Devuelve true si es una cadena de texto y false en caso contrario.
const isString = (string: string): boolean => {
  return typeof string === 'string'
}

// verifica si una cadena de texto se puede analizar como una fecha válida utilizando Date.parse. Devuelve true si se puede analizar como una fecha válida y false en caso contrario.
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => { // a la funcion le llega un obj q puede ser cualquier cosa pero siempre va a devolver con la estructura de un NewDiaryEntry
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }

  return newEntry
}

export default toNewDiaryEntry
