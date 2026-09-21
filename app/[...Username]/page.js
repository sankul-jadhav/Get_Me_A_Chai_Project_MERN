import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import { notFound } from "next/navigation"
import User from '@/models/User'
import connectDB from '@/db/connectDb'

const Username = async ({ params }) => {
  const checkuser = async () => {
    await connectDB()
    let u = await User.findOne({ userName: (await params).Username[0] })
    if (!u) {
      return notFound()
    }
  }

  await checkuser()
  return (
    <>
      <PaymentPage username={(await params).Username[0]} />
    </>
  )
}

export default Username

export async function generateMetadata({ params }) {
  return {
    title: ` Support ${(await params).Username[0]} - Get Me A Chai`,
  }
}
