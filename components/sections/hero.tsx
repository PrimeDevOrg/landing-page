'use client';
import { Button } from '../ui/button';

import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import FadeContent from '../ui/FadeContent/FadeContent';
import Silk from '../ui/Silk/Silk';
import { TextGenerateEffect } from '../ui/text-generate-effect';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export function Hero() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const end = '+=600';
      tl.to('.box-zap', {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top top',
          end,
        },
        ease: 'sine.out',
        motionPath: {
          path: '.mp-zap',
          align: '.mp-zap',
          alignOrigin: [0.5, 0.5],
        },
      });

      tl.to('.box-gear', {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top top',
          end,
        },
        ease: 'sine.out',
        motionPath: {
          path: '.mp-gear',
          align: '.mp-gear',
          alignOrigin: [0.5, 0.5],
        },
      });
      tl.to('.box-light', {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top top',
          end,
        },
        ease: 'sine.out',
        motionPath: {
          path: '.mp-light',
          align: '.mp-light',
          alignOrigin: [0.5, 0.5],
        },
      });
      tl.to('.box-code', {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top top',
          end,
        },
        ease: 'sine.out',
        motionPath: {
          path: '.mp-code',
          align: '.mp-code',
          alignOrigin: [0.5, 0.5],
        },
      });
      tl.to('.box-security', {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top top',
          end,
        },
        ease: 'sine.out',
        motionPath: {
          path: '.mp-security',
          align: '.mp-security',
          alignOrigin: [0.5, 0.5],
        },
      });
      tl.to('.box-server', {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top top',
          end,
        },
        ease: 'sine.out',
        motionPath: {
          path: '.mp-server',
          align: '.mp-server',
          alignOrigin: [0.5, 0.5],
        },
      });
    },
    { scope: container },
  );
  return (
    <section
      id="home"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden border-b border-slate-300 bg-white"
      ref={container}
    >
      <Silk
        speed={5}
        scale={1}
        color="#ea580c"
        noiseIntensity={0.5}
        rotation={0}
      />

      <div className="absolute z-40 flex max-w-[1026px] flex-col items-center justify-center gap-3 p-8">
        <h1 className="max-w-[960px] text-center">
          <TextGenerateEffect
            words="Criamos softwares que transformam negócios"
            className="text-white"
          />
        </h1>

        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <p className="text-center text-sm font-medium text-white md:text-base lg:text-lg">
            Na PrimeDev, desenvolvemos websites, apps móveis e APIs com{' '}
            <span className="text-nowrap rounded bg-brand px-3 text-white">
              qualidade excepcional
            </span>{' '}
            e desempenho incomparável. Transforme suas ideias em realidade com{' '}
            <span className="text-nowrap rounded bg-brand px-3 text-white">
              tecnologia de ponta
            </span>
            .
          </p>
        </FadeContent>

        <a
          href="https://wa.me/+5562982559125?text=Ol%C3%A1%2C+estou+interessado+em+um+dos+servi%C3%A7os+da+PrimeDev%2C+pode+me+falar+mais+sobre+isso%3F"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg">Entrar em contato</Button>
        </a>
      </div>
    </section>
  );
}
