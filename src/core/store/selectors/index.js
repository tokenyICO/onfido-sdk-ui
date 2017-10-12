import { createSelector } from 'reselect'

const currentCaptures = (state, { method, side = null }) =>
  state.captures[method].filter(c => c.side === side)

export const currentValidCaptures = createSelector(
  currentCaptures,
  captures => captures.filter(capture => capture.valid)
)

export const unprocessedCaptures = createSelector(
  currentCaptures,
  captures => captures.filter(capture => !capture.processed)
)

export const allInvalidCaptureSelector = createSelector(
  currentCaptures,
  captures => captures.length > 0 && captures.every(c => c.processed && !c.valid)
)
