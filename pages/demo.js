import React from 'react'
import Link from 'next/link';


export default function demo() {
  return (
    <div>
      <h1>Đây là trang demo</h1>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>

    </div>
  )
}
