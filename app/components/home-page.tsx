"use client";

import Link from "next/link"
import { useState } from 'react'
import Image from "next/image";
import {  Menu } from 'lucide-react'


interface LinkItem {
    href: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  }
  
  interface NavLink {
    href: string;
    text: string;
  }
  
  const LinkItem: LinkItem[] = [
    {
      href: "https://discord.gg",
      src: "/images/Discord.png",
      alt: "Discord",
      width: 25,
      height: 25,
      className: "",
    },
    {
      href: "https://t.me",
      src: "/images/Telegram.png",
      alt: "Telegram",
      width: 25,
      height: 25,
      className: "",
    },
    {
      href: "#",
      src: "/images/logoWithText.png",
      alt: "Logo",
      width: 90,
      height: 90,
      className: "h-5 w-16",
    },
  ];
  
  const navLinks: NavLink[] = [
    { href: "/", text: "Home" },
    { href: "/product", text: "Product" },
    { href: "/blog", text: "Blog" },
  ];


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (


<main className="min-h-screen bg-white text-[#000000] ">
      {/* Navigation */}
   <header className="fixed left-0 right-0 top-0 z-50 text-[#000000] bg-white">
    <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <Link href="/" className="text-2xl xl:text-3xl font-semibold text-[#000000]">
         ZeroCheck
        </Link>
    
    <div className="hidden md:flex gap-9">
    {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className="text-[#000000] text-lg font-medium hover:text-[#000000]">
          {link.text}
        </Link>
      ))}
    </div>

    <div className="flex items-center gap-4">
      <div className=" items-center gap-6 flex">
      {LinkItem.map((link, index) => (
        <Link key={index} href={link.href} className="text-[#000000]">
          <Image
            src={link.src}
            alt={link.alt}
            width={link.width}
            height={link.height}
            className={link.className}
          />
        </Link>
      ))}
      </div>

      <button  className="bg-[#000000] py-3 px-2 md:py-5 md:px-7 md:ml-9 text-xs tracking-wide rounded-md font-medium text-white">
        Get Started
      </button>
      <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </button>
    </div>
  </nav>

  {/* Mobile menu */}
  {mobileMenuOpen && (
    <div className="md:hidden">
      <div className="text-[#000000] space-y-1 px-2 flex flex-col pb-3 pt-2">
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className="text-[#000000] text-lg font-medium">
          {link.text}
        </Link>
      ))}
      </div>
    </div>
  )}
</header>

      {/* Hero Section */}
      <div className="">
      <div className=" heroBg container relative mx-auto px-4 pt-20 pb-28 lg:pt-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="relative text-[#000000]">
              <h1 className="text-3xl mb-4 font-bold sm:text-5xl lg:text-5xl">
                Redefining Event {" "}
              </h1>
                <h1 className="text-[#000000] text-3xl mb-4 font-bold sm:text-5xl lg:text-5xl">Participation with{" "}</h1>
                <h1 className="text-[#000000] text-3xl font-bold sm:text-5xl lg:text-5xl ">Blockchain Security</h1>
            </div>
            <p className="mt-4 text-md text-[#000000]">
              Shaping the Future of De-Fi Together.
            </p>
            <div className="mt-8">
              <button  className="text-sm bg-[#000000] font-semibold rounded-2xl text-white px-8 py-4 shadow-sm">
                Get Started
              </button>
            </div>

            {/* Stats Section */}
            <div className=" mt-10 flex gap-2 text-center">
              <div className="border-r-2 border-[#000000] pr-4 ">
                <div className="text-2xl text-[#000000] font-bold">10M</div>
                <div className="text-xs text-[#000000] mt-3 text-center">Transactions</div>
              </div>
              <div className="border-r-2 border-[#000000] px-4">
                <div className="text-[#000000] text-2xl font-bold">100K</div>
                <div className="text-xs text-[#000000] mt-3">Active Users</div>
              </div>
              <div className="px-4">
                <div className="text-[#000000] text-2xl font-bold">40+</div>
                <div className="text-xs text-[#000000] mt-3 text-center">Finance Integrations</div>
              </div>
            </div>
          </div>


          {/* Gear Img */}
          <div className="relative flex items-center justify-center lg:justify-end">
          <Image
                  src="/images/engineering.png"
                  alt="User"
                  width={790}
                  height={790}
                  className="h-[400px] w-[400px] text-[#000000] lg:h-[600px] lg:w-[600px]"
                  /> 

          </div>
        </div>
      </div>
      </div>
    </main>
  )
}

