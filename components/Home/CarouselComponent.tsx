import React, { useEffect } from 'react'

const CarouselComponent = () => {
  const carouselText = [{ text: 'Zero-knowledge' }, { text: 'Proof-of-liquidity' }]

  useEffect(() => {
    const typeSentence = async (sentence: string, delay = 100) => {
      const letters = sentence.split('')
      let i = 0
      while (i < letters.length) {
        await waitForMs(delay)
        document.getElementById('bitTitle')?.append(letters[i])
        i++
      }
      return
    }

    const deleteSentence = async () => {
      const ht = document.getElementById('bitTitle') as HTMLElement

      const sentence = ht?.innerHTML
      const letters = sentence.split('')
      while (letters.length > 0) {
        await waitForMs(100)
        letters.pop()
        ht.innerHTML = letters.join('')
      }
    }

    const carousel = async (carouselList: { text: string }[]) => {
      var i = 0
      while (true) {
        await typeSentence(carouselList[i].text)
        await waitForMs(2000)
        await deleteSentence()
        await waitForMs(1000)
        i++
        if (i >= carouselList.length) {
          i = 0
        }
      }
    }

    carousel(carouselText)

    return () => {
      document.getElementById('bitTitle')?.remove()
    }
  }, [])

  const waitForMs = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  return <div id='bitTitle'></div>
}

export default CarouselComponent
