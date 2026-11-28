import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play } from 'lucide-react';
import { StarRating } from '@/components/StarRating';

interface RatingData {
  score: number;
  totalTeams: string;
  avatars: string[];
}

interface DummyReview {
  reviewerName: string;
}

interface DummyProductResponse {
  rating: number;
  reviews?: DummyReview[];
}

export function HeroSection() {
  const [ratingData, setRatingData] = useState<RatingData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://dummyjson.com')
      .then((res) => res.json())
      .then((data: DummyProductResponse) => {
        const initials =
          data.reviews && data.reviews.length > 0
            ? data.reviews.slice(0, 4).map((rev) =>
                rev.reviewerName
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()
              )
            : ['AL', 'BK', 'CM', 'DR'];

        setRatingData({
          score: data.rating || 5,
          totalTeams: '2,400+',
          avatars: initials,
        });
        setLoading(false);
      })
      .catch(() => {
        setRatingData({
          score: 5,
          totalTeams: '2,400+',
          avatars: ['AL', 'BK', 'CM', 'DR'],
        });
        setLoading(false);
      });
  }, []);

  const avatarColors: string[] = [
    'bg-blue-700',
    'bg-blue-600',
    'bg-indigo-600',
    'bg-sky-500',
  ];

  return (
    <section className="py-20 scroll-mt-20" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20 items-center">
        {/* Kolom Kiri */}
        <div className="rounded-lg p-6 flex flex-col gap-6">
          <Badge className="w-fit p-3 text-center bg-blue-100 text-blue-800">
            &bull; Task Management System
          </Badge>

          <h1 className="text-5xl font-bold flex flex-col gap-4">
            <span>Manage Teams.</span>
            <span className="text-blue-600">Ship Faster.</span>
            <span>Stay Aligned.</span>
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            enim dolorum deleniti provident accusamus illo autem. Ad minus
            rerum eos.
          </p>

          {/* Tombol CTA */}
          <div className="flex flex-wrap gap-6">
            <Button className="bg-blue-600 hover:bg-blue-700 p-5">
              Start For Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="p-5">
              <Play className="mr-2 h-4 w-4 fill-blue-400 text-blue-400" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof & Rating */}
          <div className="pt-2">
            {loading ? (
              <div className="flex items-center gap-3 animate-pulse">
                <div className="h-8 w-24 rounded-full bg-slate-200" />
                <div className="h-6 w-36 rounded bg-slate-200" />
              </div>
            ) : ratingData ? (
              <div className="flex items-center gap-3.5">
                {/* Deretan 4 Avatar Bertumpuk */}
                <div className="flex -space-x-2.5">
                  {ratingData.avatars.map((initial, index) => (
                    <div
                      key={index}
                      className={`flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-slate-50 text-[11px] font-semibold text-white ${
                        avatarColors[index % avatarColors.length]
                      }`}
                    >
                      {initial}
                    </div>
                  ))}
                </div>

                {/* Bintang & Teks Keterangan */}
                <div className="flex flex-col gap-0.5">
                  <StarRating value={ratingData.score} />
                  <p className="text-xs text-slate-500">
                    Loved by{' '}
                    <span className="font-semibold text-slate-700">
                      {ratingData.totalTeams}
                    </span>{' '}
                    teams worldwide
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="relative p-4 group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative rounded-2xl backdrop-blur-sm shadow-xl">
            <img
              src="/images/abc.jpg"
              alt="heroimage"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
