import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { TimelineElement } from '@/components/TimelineElement'
import GSoC from '@/images/logo.svg'


export default function About() {
  return (
    <>
      <Head>
        <title>
          Resume
        </title>
        <meta
          name="description"
          content="my resume"
        />
      </Head>
      <Container className="mt-20 mb-28">
        <div className="mt-5">
          <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7'>As a creative professional, I have explored the dynamic and transformative nature of lines, using them as a fundamental element to convey emotion, structure, and meaning. Within this portfolio, you will discover a diverse range of projects that showcase my dedication to precision, balance, and innovation in line-based compositions.</p>
        </div>
        <Container.Inner className='mt-16'>
          <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
            <TimelineElement
              title="Mayank Vashisht"
              description="Enthusiastic learner mastering DSA, web dev, and AI-ML, with strong man management skills. Passionate about space and sci-fi tech, ready to contribute to innovative projects.. "
              button="Contact Me"
              link='https://www.linkedin.com/in/mayank-vashisht-910830171/'
            />
            
          </ol>

          

        </Container.Inner>
      </Container>
    </>
    )
}
