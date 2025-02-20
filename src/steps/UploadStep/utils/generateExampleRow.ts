import type { Field, Fields } from "../../../types"

const titleMap: Record<Field<any>["fieldType"]["type"], string> = {
  checkbox: "Boolean",
  select: "Options",
  input: "Text",
}

export const generateExampleRow = <T extends string>(fields: Fields<T>) => [
  fields.reduce((acc, field) => {
    acc[field.key as T] = field.example || titleMap[field.fieldType.type]
    return acc
  }, {} as Record<T, string>),
]
