import React from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Cocok untuk penggunaan pribadi dan proyek kecil.',
    price: 'Rp 99.000',
    period: '/bulan',
    features: [
      'Hingga 5 proyek aktif',
      'Penyimpanan cloud 10 GB',
      'Dukungan email standar',
      'Analitik dasar',
    ],
    buttonText: 'Mulai Gratis',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Pilihan terbaik untuk profesional dan tim berkembang.',
    price: 'Rp 249.000',
    period: '/bulan',
    features: [
      'Proyek aktif tanpa batas',
      'Penyimpanan cloud 100 GB',
      'Dukungan prioritas 24/7',
      'Analitik & laporan lanjutan',
      'Kolaborasi tim hingga 10 anggota',
    ],
    buttonText: 'Pilih Paket Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Solusi khusus dengan keamanan dan skala penuh.',
    price: 'Rp 799.000',
    period: '/bulan',
    features: [
      'Semua fitur paket Pro',
      'Penyimpanan tanpa batas',
      'Dedicated Account Manager',
      'Custom domain & SSO',
      'SLA uptime 99.9%',
    ],
    buttonText: 'Hubungi Sales',
    popular: false,
  },
]

function CardPricing() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 max-w-6xl mx-auto items-center">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col justify-between relative transition-all duration-300 ease-in-out cursor-pointer ${
              plan.popular
                ? 'bg-blue-100 border-2 border-blue-600 shadow-lg md:scale-105 z-10 hover:-translate-y-3 hover:shadow-2xl'
                : 'bg-card border border-border hover:-translate-y-2 hover:border-blue-400 hover:bg-slate-50/80 hover:shadow-xl'
            }`}
          >
            {plan.popular && (
              <span className="absolute top-1 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3.5 py-0.5 text-xs font-semibold text-white shadow-sm">
                Paling Populer
              </span>
            )}

            <div>
              <CardHeader>
                <CardTitle
                  className={`text-2xl ${
                    plan.popular ? 'text-blue-950' : ''
                  }`}
                >
                  {plan.name}
                </CardTitle>
                <CardDescription
                  className={plan.popular ? 'text-blue-800/80' : ''}
                >
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-6 flex items-baseline">
                  <span
                    className={`text-3xl font-extrabold tracking-tight ${
                      plan.popular ? 'text-blue-950' : ''
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`ml-1 text-sm ${
                      plan.popular ? 'text-blue-800/80' : 'text-muted-foreground'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-2 ${
                        plan.popular ? 'text-blue-950' : ''
                      }`}
                    >
                      <Check
                        className={`h-4 w-4 shrink-0 ${
                          plan.popular ? 'text-blue-600' : 'text-primary'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>

            <CardFooter>
              <Button
                className={`w-full transition-transform duration-200 active:scale-95 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    : 'hover:border-blue-600 hover:text-blue-600'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CardPricing
