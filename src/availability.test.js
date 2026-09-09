import { describe, expect, it } from 'vitest'
import { formatAvailability } from './availability.js'

describe('formatAvailability', () => {
  const today = new Date('2026-10-14T12:00:00')

  it('空席数を表示する', () => {
    expect(formatAvailability(20, 12)).toBe('残り 8 席')
  })

  it('イベントの日付が昨日なら終了と表示する', () => {
    expect(formatAvailability(20, 12, '2026-10-13', today)).toBe('終了')
  })

  it('イベントの日付が明日なら空席数を表示する', () => {
    expect(formatAvailability(20, 12, '2026-10-15', today)).toBe('残り 8 席')
  })

  it('残席が3席の場合は残席わずかと表示する', () => {
    expect(formatAvailability(10, 7)).toBe('残席わずか（残り 3 席）')
  })

  it('残席が4席の場合は通常の空席数を表示する', () => {
    expect(formatAvailability(10, 6)).toBe('残り 4 席')
  })

  it('定員に達している場合は満席と表示する', () => {
    expect(formatAvailability(10, 10)).toBe('満席')
  })

  it('参加者数が定員を超えても負の空席数を表示しない', () => {
    expect(formatAvailability(10, 12)).toBe('満席')
  })
})
