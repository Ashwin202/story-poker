import Image from 'next/image'
import SignInPage from '@/components/SignIn'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      <SignInPage />
    </main>
  )
}
