import '../styles/globals.css'
import React from 'react'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-[rgb(20,20,21)]'>
        {children}
      </body>
    </html>
  )
}
