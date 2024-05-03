import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <>
      <Link href='/get-registered/user-number'></Link>
      <Link href='/get-registered/verify-user'></Link>
      <Link href='/get-registered/selfemployed'></Link>
      <Link href='/get-registered/personalDetails'></Link>
      <Link href='/get-registered/loan'></Link>
      <Link href='/get-registered/employe-type'></Link>
      <Link href='/get-registered/addressdetails'></Link>
      <Link href='/get-registered/otherdetails'></Link>
      <Link href='/get-registered/submit'></Link>
    </>
  )
}

export default page
