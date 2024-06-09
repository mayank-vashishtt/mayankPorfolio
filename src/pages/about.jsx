import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'
import BlackLogo from '@/images/logo_black.png'

export default function About() {
  return (
    <>
      <Head>
        <title>About me </title>
        <meta
          name="description"
          content="about me"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={BlackLogo}
                alt="photo 2"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-black object-cover dark:bg-zinc-800 shadow-xl drop-shadow-xl shadow-zinc-900/30 dark:shadow-zinc-400/10"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-black font-mono tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              About
            </h1>
            <div className="mt-6 space-y-7 text-base font-mono text-zinc-600 dark:text-zinc-400">
              <p>
              I am a passionate learner and builder, dedicated to constantly expanding my knowledge and honing my skills. With a diverse background that includes playing at the national level in sports, I have developed a strong sense of discipline, teamwork, and perseverance. My experience in sports has also taught me the importance of strategic thinking and adaptability, qualities that I bring to every aspect of my life.
              </p>
              <p>
              In the field of computer science, I have a solid foundation in data structures and algorithms (DSA), which I am currently refining to stay at the cutting edge of technology. My commitment to excellence drives me to continuously improve and innovate, aiming to become one of the most influential figures in the tech industry.
              </p>
              <p>
              I thrive on challenges and am excited about the opportunity to contribute my skills and enthusiasm to a dynamic team. Whether it&apos;s through developing robust software solutions or optimizing complex algorithms, I am eager to make a significant impact and grow alongside like-minded professionals.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
          </div>
        </div>
      </Container>
    </>
  )
}
