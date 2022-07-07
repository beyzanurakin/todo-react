import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Header from './components/Header'
import Content from './components/Content'

function App({ tasks }) {
  return (
    <section className='todoapp'>
      <Header />
      <Content />
    </section>
  )
}

export default App
