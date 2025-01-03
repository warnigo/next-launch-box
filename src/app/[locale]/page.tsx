import { type FC } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page description',
}

const HomePage: FC = () => (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <Image
        priority
        alt="Next.js logo"
        className="dark:invert"
        height={38}
        src="/next.svg"
        width={180}
      />
    </main>
  </div>
)
export default HomePage
