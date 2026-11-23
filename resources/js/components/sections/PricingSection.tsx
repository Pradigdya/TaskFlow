import React from 'react'
import { Badge } from '../ui/badge'
import CardPricing from '../common/CardPricing'

function PricingSection() {
  return (
    <div>
        <div className="flex flex-col gap-4 text-center justify-center items-center mb-10">
            <Badge className="w-fit p-3 text-center bg-blue-100 text-blue-800 mt-5">Pricing</Badge>
            <h1 className="text-4xl  text-foreground">Simple, Transparent Pricing</h1>
            <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <CardPricing></CardPricing>
    </div>
  )
}

export default PricingSection
