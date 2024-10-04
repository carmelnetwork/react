"use client"

import { useEffect, useState } from 'react'
import { session } from '@carmel/core'

export default function useNode() {
  const [started, setStarted] = useState(false)
  
  useEffect(() => {
    (async () => {      
      if (started) return 
      
      setStarted(true)

      await session.start()
    })()
  }, [])

  return {
    session, started
  }
}
