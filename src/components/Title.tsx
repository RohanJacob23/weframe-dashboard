"use client";

import React from "react";
import {
  Avatar,
  AvatarGroup,
  Button,
  Image,
  Progress,
} from "@nextui-org/react";
import NextImage from "next/image";

export default function Title() {
  return (
    <section className="flex flex-col gap-4 xl:gap-0 lg:flex-row justify-between bg-dark02 rounded-[0.875rem] min-h-[12rem] p-4 sm:p-7">
      {/* first part */}
      <div className="flex flex-col justify-evenly">
        <div>
          <div className="flex items-center mb-2 space-x-2">
            <Image
              as={NextImage}
              src="/Icons/btnback.svg"
              width={100}
              height={100}
              className="h-5 w-5"
              alt="backButton"
            />

            <h1 className="text-lg lg:text-xl xl:text-2xl font-bold">
              School November Tasks
            </h1>
          </div>
          <p className="text-[#A5A5A5] text-xs xl:text-sm">
            Created by Instructor Day on November 31, 2022
          </p>
        </div>
        <div className="flex flex-wrap mt-2 gap-5 xl:mt-0 xl:flex-row xl:items-center">
          <AvatarGroup
            isBordered
            max={4}
            total={6}
            color="primary"
            size="sm"
            className="col-span-2"
          >
            <Avatar
              size="sm"
              showFallback
              color="default"
              src="https://images.unsplash.com/broken"
            />
            <Avatar
              size="sm"
              showFallback
              color="default"
              src="https://images.unsplash.com/broken"
            />
            <Avatar
              size="sm"
              showFallback
              color="default"
              src="https://images.unsplash.com/broken"
            />
            <Avatar
              size="sm"
              showFallback
              color="default"
              src="https://images.unsplash.com/broken"
            />
            <Avatar
              size="sm"
              showFallback
              color="default"
              src="https://images.unsplash.com/broken"
            />
            <Avatar
              size="sm"
              showFallback
              color="default"
              src="https://images.unsplash.com/broken"
            />
          </AvatarGroup>

          <Button
            className="bg-figmaPrimary"
            startContent={
              <Image
                as={NextImage}
                src="/Icons/add-friend1.svg"
                width={100}
                height={100}
                className="min-h-[1rem] min-w-[1rem] h-5 w-5"
                alt="backButton"
              />
            }
          >
            Invite People
          </Button>
          <Button variant="bordered" className="border-Iris/80">
            Private
          </Button>
          <Button className="bg-Iris/80">Edit</Button>
          <Button
            variant="bordered"
            className="border-Iris/80"
            startContent={
              <Image
                as={NextImage}
                src="/Icons/chat1.svg"
                width={100}
                height={100}
                className="min-h-[1rem] min-w-[1rem] h-5 w-5"
                alt="backButton"
              />
            }
          >
            45 Comments
          </Button>
        </div>
      </div>

      {/* third part */}
      <div className="flex flex-col justify-evenly xl:grow">
        <div className="hidden lg:flex items-center justify-end gap-4">
          <div className="text-end space-y-1">
            <h1 className="text-base sm:text-lg font-bold">
              Centered Martial Arts
            </h1>
            <p className="text-xs sm:text-sm text-[#A5A5A5]">Sunnyvale, Ca</p>
          </div>
          <div className="flex items-center justify-center w-11 h-11 bg-white rounded-[0.875rem] p-1">
            <Image
              as={NextImage}
              src="/Icons/logo1.svg"
              width={100}
              height={100}
              alt="chartIcon"
              className="min-h-[1rem] min-w-[1rem] w-full h-full"
            />
          </div>
          <Image
            as={NextImage}
            src="/Icons/vertIcon.svg"
            width={100}
            height={100}
            alt="chartIcon"
            className="w-5 h-5"
          />
        </div>

        <div className="flex items-center justify-start w-full lg:justify-end space-x-2.5 lg:space-x-7">
          <h1 className="text-xs sm:text-base font-semibold w-32 md:w-auto">
            Total Progress 60%
          </h1>
          <Progress
            aria-label="Loading..."
            value={60}
            size="sm"
            className="max-w-[16.125rem] h-3.5 mt-3"
            classNames={{
              indicator: "bg-[#6418c3]",
            }}
          />
        </div>
      </div>
    </section>
  );
}
