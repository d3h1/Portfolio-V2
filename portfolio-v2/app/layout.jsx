import './globals.css'

export const metadata = {
  title: 'DC | Software Engineering',
  description: 'A portfolio created by Deni Cabaravdic',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className= ''>
        <main className='h-full max-w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}