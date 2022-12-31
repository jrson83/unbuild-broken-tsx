import React, { ComponentType } from 'react'
import { createRoot } from 'react-dom/client'

export const createStory = <P extends object>(
  Component: ComponentType<P>,
  props: P
) => {
  return (rootElement: HTMLElement) => {
    const root = createRoot(rootElement)
    root.render(<Component {...props} />)
  }
}
