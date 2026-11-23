import React from 'react'
import { Badge } from '../ui/badge'
import CardFeatures from '../common/CardFeatures'

function FeaturesSection() {
  return (
    <>
    <div className="flex flex-col items-center justify-center text-center gap-2" id="features">
       <Badge className="w-fit p-3 text-center bg-blue-100 text-blue-800 mt-5"> Features</Badge>
       <h1 className="text-3xl font-bold text-foreground">
         Everything You Need <br />in One <span className="text-blue-600">Platform</span>
       </h1>
       <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    
    <div className="">
        <CardFeatures></CardFeatures>
    </div>
    </>
  )
}

export default FeaturesSection
