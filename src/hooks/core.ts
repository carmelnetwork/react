"use client"

import { useEffect, useState } from 'react'
import { session, config } from '@carmel/core/lib/index.browser.mjs'

export function useNode() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    (async () => {      
      if (started) return 
      
      setStarted(true)

      await session.start(config)
    })()
  }, [])

  return {
    session, started
  }
}
