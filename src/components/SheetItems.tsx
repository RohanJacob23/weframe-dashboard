"use client";

import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge, Image, Input } from "@nextui-org/react";
import NextImage from "next/image";

export default function SheetItems() {
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
    <>
      {/* @ts-ignore */}
      <SheetContent className="bg-dark02 w-full overflow-auto" side="left">
        <SheetHeader className="items-center">
          <SheetTitle className="text-lg lg:text-2xl">Weframetech</SheetTitle>
        </SheetHeader>
        <div>
          <Input
            type="text"
            classNames={{
              inputWrapper: ["bg-[#211A75]", "data-[hover=true]:bg-[#211A75]"],
            }}
            placeholder="Search..."
            radius="full"
            className="mt-4"
            autoFocus={false}
            startContent={
              <Image
                src="/Icons/search2.svg"
                as={NextImage}
                width={100}
                height={100}
                className="min-h-[1rem] min-w-[1rem] w-5 h-5"
                alt="search"
              />
            }
          />
          <div className="flex items-center justify-between gap-2.5 lg:gap-6 my-6">
            <Badge
              size="sm"
              className="bg-accent01 text-black font-semibold"
              content={12}
            >
              <Image
                src="/Icons/bell1.svg"
                priority={true}
                as={NextImage}
                width={100}
                height={100}
                className="w-5 h-5"
                alt="bell"
              />
            </Badge>

            <Badge
              size="sm"
              className="bg-accent01 text-black font-semibold"
              content={5}
            >
              <Image
                src="/Icons/VideoLesson2.svg"
                as={NextImage}
                width={100}
                height={100}
                className="w-5 h-5"
                alt="search"
              />
            </Badge>
            <Badge
              size="sm"
              className="bg-accent01 text-black font-semibold"
              content={2}
            >
              <Image
                src="/Icons/checkbox1.svg"
                as={NextImage}
                width={100}
                height={100}
                className="w-5 h-5"
                alt="search"
              />
            </Badge>
            <Badge
              size="sm"
              className="bg-accent02 text-black font-semibold"
              content="!"
            >
              <Image
                src="/Icons/office1.svg"
                as={NextImage}
                width={100}
                height={100}
                className="w-5 h-5"
                alt="search"
              />
            </Badge>
          </div>
        </div>
        <h1 className="text-xl font-bold text-[#C7C7C7] mt-4">Main Menu</h1>
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
      </SheetContent>
    </>
  );
}
