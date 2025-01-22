'use client';
import { Button } from '../ui/button';

import blurSlate from '@/public/blur-slate.svg';
import codeIcon from '@/public/code-icon.svg';
import gearIcon from '@/public/gear-icon.svg';
import lightBulbIcon from '@/public/light-bulb-icon.svg';
import networkIcon from '@/public/network-icon.svg';
import shieldCheckIcon from '@/public/shield-check-icon.svg';
import zapIcon from '@/public/zap-icon.svg';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
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
      <Image src={blurSlate} className="absolute -left-1/2 -top-1/2" alt="" />
      <Image
        src={blurSlate}
        className="absolute -bottom-1/2 -right-1/2"
        alt=""
      />
      <div className="z-40 flex max-w-[1026px] flex-col items-center justify-center gap-3 p-8">
        <h1 className="max-w-[960px] text-center text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-6xl">
          Criamos Soluções Digitais que{' '}
          <span className="text-brand">Transformam Negócios</span>
        </h1>
        <p className="text-center text-xl font-medium md:text-2xl lg:text-4xl">
          Na PrimeDev, desenvolvemos websites, apps móveis e APIs com{' '}
          <span className="text-nowrap rounded bg-brand px-3 text-white">
            qualidade excepcional
          </span>{' '}
          e desempenho incomparável. Transforme suas ideias em realidade com{' '}
          <strong className="text-brand">tecnologia de ponta.</strong>
        </p>
        <Button size="lg">Entrar em contato</Button>
      </div>

      <div className="absolute inset-0 flex items-end justify-between gap-4">
        <svg
          width="675"
          height="900"
          viewBox="0 0 675 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-mb-4 h-min w-[240px] md:w-[350px]"
        >
          <path
            className="mp-zap"
            d="M0 1H323C327.418 1 331 4.58172 331 9V382C331 386.418 334.582 390 339 390H666.5C670.918 390 674.5 393.582 674.5 398V899.5"
            stroke="#A1A1AA"
          />
          <path
            className="mp-gear"
            d="M-120 121H203C207.418 121 211 124.582 211 129V502C211 506.418 214.582 510 219 510H546.5C550.918 510 554.5 513.582 554.5 518V896.5"
            stroke="#A1A1AA"
          />
          <path
            className="mp-light"
            d="M-240 241H83C87.4183 241 91 244.582 91 249V622C91 626.418 94.5817 630 99 630H426.5C430.918 630 434.5 633.582 434.5 638V894.5"
            stroke="#A1A1AA"
          />
        </svg>

        <svg
          width="675"
          height="900"
          viewBox="0 0 675 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-mb-4 h-min w-[240px] md:w-[350px]"
        >
          <path
            className="mp-code"
            d="M677.713 1H353.627C349.209 1 345.627 4.58172 345.627 9V382C345.627 386.418 342.045 390 337.627 390H9.00001C4.58173 390 1.00002 393.582 1.00002 398V899.5"
            stroke="#A1A1AA"
          />
          <path
            className="mp-security"
            d="M798.106 121H474.021C469.602 121 466.021 124.582 466.021 129V502C466.021 506.418 462.439 510 458.021 510H129.394C124.975 510 121.394 513.582 121.394 518V896.5"
            stroke="#A1A1AA"
          />
          <path
            className="mp-server"
            d="M918.5 241H594.414C589.996 241 586.414 244.582 586.414 249V622C586.414 626.418 582.832 630 578.414 630H249.787C245.369 630 241.787 633.582 241.787 638V894.5"
            stroke="#A1A1AA"
          />
        </svg>
        <div className="box-zap absolute flex h-16 w-16 scale-50 items-center justify-center rounded-full border bg-white shadow md:scale-100">
          <Image width={42} src={zapIcon} alt="" />
        </div>
        <div className="box-gear absolute flex h-16 w-16 scale-50 items-center justify-center rounded-full border bg-white shadow md:scale-100">
          <Image width={42} src={gearIcon} alt="" />
        </div>
        <div className="box-light absolute flex h-16 w-16 scale-50 items-center justify-center rounded-full border bg-white shadow md:scale-100">
          <Image width={42} src={lightBulbIcon} alt="" />
        </div>
        <div className="box-code absolute flex h-16 w-16 scale-50 items-center justify-center rounded-full border bg-white shadow md:scale-100">
          <Image width={42} src={codeIcon} alt="" />
        </div>
        <div className="box-security absolute flex h-16 w-16 scale-50 items-center justify-center rounded-full border bg-white shadow md:scale-100">
          <Image width={42} src={shieldCheckIcon} alt="" />
        </div>
        <div className="box-server absolute flex h-16 w-16 scale-50 items-center justify-center rounded-full border bg-white shadow md:scale-100">
          <Image width={42} src={networkIcon} alt="" />
        </div>
      </div>
    </section>
  );
}
