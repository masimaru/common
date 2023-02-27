type TObj = Record<string, unknown>

/**
 * 객체와 객체의 속성명을 인자로 받아 해당하는 값을 반환하는 함수
 * @param obj 객체
 * @param key 객체의 속성명
 * @returns 속성명에 해당하는 값 반환 | null
 */
export function findProperty<T extends TObj>(obj: T, key: string): unknown {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key]
  }

  if (typeof obj === 'object') {
    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        const result = findProperty(obj[prop] as TObj, key)
        if (result) {
          return result
        }
      }
    }
  }
  return null
}
