"use client";

import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Avatar,
  Divider,
  NavbarBrand,
} from "@nextui-org/react";
import NextLink from "next/link";
import NextImage from "next/image";
import { Input } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SheetItems from "./SheetItems";

export default function Nav() {
  return (
    <Navbar
      position="static"
      className="bg-dark02"
      classNames={{ wrapper: "p-2.5 md:px-4 md:py-0" }}
    >
      <NavbarBrand>
        <Sheet>
          <SheetTrigger asChild>
            <HamburgerMenuIcon className="h-4 w-4" />
          </SheetTrigger>

          {/* sheet items */}
          <SheetItems />
        </Sheet>
        <h1 className="font-semibold text-base ml-2.5">weframetech</h1>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-0 sm:gap-4 flex-grow"
        justify="center"
      >
        <NavbarItem>
          <Input
            type="text"
            classNames={{
              inputWrapper: ["bg-[#211A75]", "data-[hover=true]:bg-[#211A75]"],
            }}
            placeholder="Search..."
            radius="full"
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
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link
            as={NextLink}
            href="#"
            underline="always"
            size="sm"
            className="text-sm text-figmaPrimary font-bold lg:ml-4 uppercase"
          >
            Other Items
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex items-center justify-center gap-2.5 lg:gap-6">
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
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                radius="full"
                className="bg-[#211A75] border-none"
                startContent={
                  <Image
                    src="/Icons/united-states1.svg"
                    width={100}
                    height={100}
                    className="min-h-[1rem] min-w-[1rem] w-5 h-5 rounded-full"
                    alt="unitedStatesFlag"
                  />
                }
                endContent={
                  <Image
                    src="/Icons/arrow.svg"
                    width={100}
                    height={100}
                    className="min-h-[0.5rem] min-w-[0.5rem] w-2.5 h-2.5 rounded-full"
                    alt="arrowDown"
                  />
                }
              >
                English
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-0 sm:gap-4">
        <NavbarItem className="h-full py-3">
          <Divider
            orientation="vertical"
            className="hidden md:block bg-dark04 w-[0.0625rem]"
          />
        </NavbarItem>
        <NavbarItem className="flex items-center gap-2">
          <Avatar
            showFallback
            size="sm"
            src="https://images.unsplash.com/broken"
            radius="md"
          />
          <div className="flex flex-col font-bold">
            <h1 className="text-sm sm:text-base">Instructor Day</h1>
            <p className="text-xs sm:text-sm font-normal text-[#7879F1]">
              Super Admin
            </p>
          </div>
          <Image
            src="/Icons/arrow.svg"
            width={100}
            height={100}
            className="min-h-[0.5rem] min-w-[0.5rem] w-4 h-4 md:w-5 md:h-5 rounded-full"
            alt="arrow"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
