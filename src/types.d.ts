import { Visibility, Weather } from './enums'
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// la interface se usa cuando sabemos q tenemos que extender
// ejemplo:
// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber: number
// }

// un tipo para sacar una prop de la interfaz DiaryEntry
export type NonSensitiveInfoEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

// lo mismo de otra forma, omitimos uno en concreto
// export type nonSensitiveInfoEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
