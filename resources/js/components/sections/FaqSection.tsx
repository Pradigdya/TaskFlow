import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { HelpCircle, MessageCircle } from 'lucide-react'

interface FaqItem {
  id: string
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    id: 'item-1',
    question: 'Apa itu layanan ini dan bagaimana cara kerjanya?',
    answer:
      'Layanan kami membantu Anda mengelola alur kerja harian dengan lebih cepat dan terstruktur. Cukup buat akun, pilih paket yang sesuai, dan Anda bisa langsung mulai menggunakan semua fitur utama.',
  },
  {
    id: 'item-2',
    question: 'Apakah tersedia masa uji coba gratis?',
    answer:
      'Ya, kami menyediakan masa uji coba gratis selama 14 hari tanpa memerlukan kartu kredit. Anda dapat mencoba seluruh fitur premium sebelum memutuskan untuk berlangganan.',
  },
  {
    id: 'item-3',
    question: 'Bisakah saya membatalkan langganan kapan saja?',
    answer:
      'Tentu saja. Anda dapat membatalkan atau mengubah paket langganan kapan saja melalui halaman pengaturan akun tanpa dikenakan biaya tambahan.',
  },
  {
    id: 'item-4',
    question: 'Bagaimana cara menghubungi tim dukungan pelanggan?',
    answer:
      'Tim dukungan kami siap membantu 24/7 melalui fitur live chat di dashboard atau melalui email ke support@domainanda.com.',
  },
]

function FaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      {/* Dekorasi Cahaya Halus di Background */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center">
          <Badge
            variant="secondary"
            className="mb-4 gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-300"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ & Bantuan
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Temukan jawaban cepat untuk pertanyaan umum seputar fitur, akses, dan layanan kami.
          </p>
        </div>

        {/* Accordion FAQ dalam bentuk Card */}
        <Accordion className="w-full space-y-3">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-xl border bg-card px-5 shadow-xs transition-all duration-200 hover:border-blue-300/80 hover:shadow-md dark:hover:border-blue-800"
            >
              <AccordionTrigger className="py-4 text-left text-base font-medium hover:no-underline">
                <div className="flex items-center gap-3.5 pr-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    0{index + 1}
                  </span>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-10.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA Box */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border bg-card/60 p-6 text-center backdrop-blur-xs sm:flex-row sm:text-left">
          <div>
            <h3 className="font-semibold text-foreground">
              Masih punya pertanyaan lain?
            </h3>
            <p className="text-sm text-muted-foreground">
              Tim kami siap membantu menjawab kebutuhan Anda dengan cepat.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-xs transition hover:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
