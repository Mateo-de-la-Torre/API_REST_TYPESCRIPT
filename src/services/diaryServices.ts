import { DiaryEntry, NonSensitiveInfoEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // as: asercion de tipos: obligarle a typescript que funcione con la interface que creamos en type.d.ts

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoEntry | undefined => {
  const entry = diaries.find(e => e.id === id)
  if (entry !== null) {
    // @ts-expect-error
    const { comment, ...restOfDiary } = entry
    return restOfDiary
    // return entry
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(e => e.id)) + 1,
    ...newDiaryEntry

  }

  diaries.push(newDiary)
  return newDiary
}
