import {DateTimeFormatter} from "@js-joda/core";

export const r = []

// Форматирование даты, используемое для отправки на бек
export const dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS");
