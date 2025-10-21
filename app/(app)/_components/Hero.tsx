'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import riley from '@/public/rileyshoutouts-cropped.png';
import shoutout from '@/public/shoutouts-cropped.png';

export default function Hero() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const rileyRef = useRef<HTMLDivElement>(null);
  const shoutoutRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      rileyRef.current?.classList.remove('opacity-0', 'translate-x-20');
      shoutoutRef.current?.classList.remove('opacity-0', 'translate-x-10', 'scale-[0.3]');

      gsap.set(rileyRef.current, { opacity: 0, x: 80 });
      gsap.set(shoutoutRef.current, { opacity: 0, x: 40, scale: 0.3 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(rileyRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        onComplete: () => {
          gsap.set(rileyRef.current, { clearProps: 'transform,opacity' });
        },
      })
        .to(
          shoutoutRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1.2,
            duration: 0.6,
            ease: 'back.out(2)',
          },
          '-=0.2',
        )
        .to(shoutoutRef.current, {
          scale: 1,
          duration: 0.2,
          ease: 'power1.out',
          onComplete: () => {
            gsap.set(shoutoutRef.current, { clearProps: 'transform,opacity' });
          },
        });
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="w-full h-[90svh] relative overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,.24)_0%,rgba(0,0,0,.24)_100%),linear-gradient(135deg,#6ee7f9_0%,#60a5fa_40%,#b388ff_100%)]"
    >
      <div
        ref={rileyRef}
        className="w-[60%] absolute bottom-0 right-[-10%] opacity-0 translate-x-20"
      >
        <Image
          src={riley}
          alt="Riley Shoutouts"
          priority
          className="w-full h-auto"
        />
      </div>

      <div
        ref={shoutoutRef}
        className="w-[50%] absolute top-1/2 -translate-y-1/2 left-0 opacity-0 translate-x-10 scale-[0.3]"
      >
        <Image src={shoutout} alt="Shoutouts" className="w-full h-auto" />
      </div>
    </section>
  );
}
