import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Check, ArrowRight } from 'lucide-react'

function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl p-4 sm:p-6 mt-20 scroll-mt-30" id="about">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Kolom Kiri (7/12 ≈ 58%) */}
        <div className="rounded-xl p-6 lg:col-span-7">
          <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative rounded-2xl backdrop-blur-sm shadow-xl">
                    <img
                    src="/images/aboutus.jpg"
                    alt="heroimage"
                    className="w-full h-100 rounded-xl object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1"
                    />
                </div>
           </div>

        </div>

        {/* Kolom Kanan (5/12 ≈ 42%) */}
        <div className="rounded-xl p-6 lg:col-span-5 my-auto">
          <div className="flex flex-col gap-6">
            <Badge className="w-fit p-3 text-center bg-blue-100 text-blue-800">
              About Us
            </Badge>
            <h1 className="text-4xl">
              Built for Productivity, <br /> Designed for{' '}
              <span className="text-blue-600 font-bold">You</span>
            </h1>
            <p className="text-muted-foreground">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod.
            </p>
            <ul className="font-sm flex flex-col">
              <li>
                <Check className="mr-1 inline-block w-5 h-5 text-blue-600" />
                Simple and Interactive
              </li>
              <li>
                <Check className="mr-1 inline-block w-5 h-5 text-blue-600" />
                Real-time collaboration
              </li>
              <li>
                <Check className="mr-1 inline-block w-5 h-5 text-blue-600" />
                Flexible for any teams
              </li>
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
              Learn More <ArrowRight className="inline-block w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
