import {DateTimeFormatter, LocalDateTime} from "@js-joda/core";

export const r = []

// Форматирование даты, используемое для отправки на бек
export const dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS");

export const formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

const m = {
    0: 'ЯНВ',
    1: 'ФЕВ',
    2: 'МАР',
    3: 'АПР',
    4: 'МАЙ',
}

const getMonth = (n: number) => Object.values(m)[n]


const LONG_MONTHS = {
    0: 'Января',
    1: 'Февраля',
    2: 'Марта',
    3: 'Апреля',
    4: 'Мая',
    5: 'Июня',
    6: 'Июля',
    7: 'Августа',
    8: 'Сентября',
    9: 'Октября',
    10: 'Ноября',
    11: 'Декабря',
}
const getLongMonth = (number: number) => Object.values(LONG_MONTHS)[number]

export const convertToMeetDatetime = (datetime?: string): string => {
    if (!datetime) return '';

    const localDateTime = LocalDateTime.parse(datetime, formatter)
    return localDateTime.format(DateTimeFormatter.ofPattern('d'))
        + ' '
        + getLongMonth(Number(localDateTime.format(DateTimeFormatter.ofPattern('M'))))
        + ', '
        + localDateTime.format(DateTimeFormatter.ofPattern('HH:mm'))
}