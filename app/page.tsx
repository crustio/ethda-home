'use client'
import { Footer } from '@/components/Footer'
import ABanner from '@/components/Home/ABanner'
import AConnectEthDA from '@/components/Home/AConnectEthDA'
import Aaggregated from '@/components/Home/Aaggregated'
import AIntroduce from '@/components/Home/AIntroduce'
import ANewAgg from '@/components/Home/ANewAgg'

export default function Home() {
  return (
    <>
      <ABanner />
      <ANewAgg />
      <AConnectEthDA />
      <Aaggregated />
      <AIntroduce />
      <Footer />
    </>
  )
}
