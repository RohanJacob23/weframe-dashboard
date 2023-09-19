"use client";

import React from "react";
import { Badge, Image, Input } from "@nextui-org/react";
import NextImage from "next/image";

export default function SideNav() {
  const menuItem = [
    {
      title: "Dashboard",
      icon: (
        <Image
          src="/Icons/sideNav/dashboard1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: false,
    },
    {
      title: "Email",
      icon: (
        <Image
          src="/Icons/sideNav/email1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: true,
    },
    {
      title: "Chat",
      icon: (
        <Image
          src="/Icons/sideNav/comment1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: false,
    },
    {
      title: "Kanban",
      icon: (
        <Image
          src="/Icons/sideNav/thumbnail1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: true,
    },
    {
      title: "Contact",
      icon: (
        <Image
          src="/Icons/sideNav/contact1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: false,
    },
    {
      title: "Calendar",
      icon: (
        <Image
          src="/Icons/sideNav/calendar1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: false,
    },
    {
      title: "Course",
      icon: (
        <Image
          src="/Icons/sideNav/VideoLesson1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: true,
    },
    {
      title: "Shop",
      icon: (
        <Image
          src="/Icons/sideNav/online-shopping1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: false,
    },
    {
      title: "Invoice",
      icon: (
        <Image
          src="/Icons/sideNav/invoice1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: true,
    },
    {
      title: "Settings",
      icon: (
        <Image
          src="/Icons/sideNav/setting1.svg"
          as={NextImage}
          alt="dashboard"
          className="w-5 h-5"
          width={100}
          height={100}
        />
      ),
      submenu: false,
    },
  ];
  return (
    <section className="hidden xl:flex fixed top-0 left-0 h-full w-80 z-50">
      <div className="bg-dark02 w-full overflow-auto pt-4 px-10">
        <div className="items-center">
          <h1 className="text-lg lg:text-2xl text-center">Weframetech</h1>
        </div>

        <h1 className="text-xl font-bold text-[#C7C7C7] mt-12">Main Menu</h1>
        <div className="grid gap-4 py-4 space-y-2">
          {menuItem.map(({ icon, submenu, title }, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {icon}
                <h1
                  className={`text-base font-semibold ${
                    title === "Dashboard" || title === "Email"
                      ? "text-[#464366]"
                      : "text-Iris/80"
                  }`}
                >
                  {title}
                </h1>
              </div>
              {submenu && (
                <Image
                  as={NextImage}
                  src="/Icons/arrow.svg"
                  alt="arrow"
                  width={100}
                  height={100}
                  className="w-4 h-4"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
