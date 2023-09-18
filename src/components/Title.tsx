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
    <section className="flex bg-dark02 rounded-[0.875rem] h-48 p-7">
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

            <h1 className="text-2xl font-bold">School November Tasks</h1>
          </div>
          <p className="text-[#A5A5A5] text-sm">
            Created by Instructor Day on November 31, 2022
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <AvatarGroup isBordered max={4} total={6} color="primary" size="sm">
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
                className="h-5 w-5"
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
                className="h-5 w-5"
                alt="backButton"
              />
            }
          >
            45 Comments
          </Button>
        </div>
      </div>

      {/* third part */}
      <div className="flex flex-col justify-evenly grow">
        <div className="flex items-center justify-end gap-4">
          <div className="text-end space-y-1">
            <h1 className="text-lg font-bold">Centered Martial Arts</h1>
            <p className="text-sm text-[#A5A5A5]">Sunnyvale, Ca</p>
          </div>
          <div className="w-11 h-11 bg-white rounded-[0.875rem] p-1">
            <Image
              as={NextImage}
              src="/Icons/logo1.svg"
              width={100}
              height={100}
              alt="chartIcon"
              className="w-full h-full"
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

        <div className="flex items-center justify-end space-x-7">
          <h1 className="text-base font-semibold">Total Progress 60%</h1>
          <Progress
            aria-label="Loading..."
            value={60}
            size="sm"
            className="max-w-[16.125rem] h-3.5 mt-3"
            classNames={{
              indicator: "bg-[#6418C3]",
            }}
          />
        </div>
      </div>
    </section>
  );
}
