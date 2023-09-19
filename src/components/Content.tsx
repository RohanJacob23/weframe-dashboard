"use client";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Progress,
} from "@nextui-org/react";
import React from "react";
import NextImage from "next/image";

export default function Content() {
  const boardList = [
    {
      title: "To-Do List (24)",
      id: 1,
      tasks: [
        {
          id: 1,
          badge: "Important",
          title: "Create sign up sheet for holiday student/parent conferences.",
          color: "#FFAB2D",
          colorName: "figYellow",
        },
        {
          id: 2,
          badge: "Instructor Meeting",
          title: "Plan holiday demonstration program. Create outline.",
          color: "#E328AF",
          colorName: "accent02",
        },
        {
          id: 3,
          badge: "Databse",
          title:
            "Determine how many boards need to be ordered for testing and demo.",
          color: "#38E25D",
          colorName: "figGreen",
        },
      ],
    },
    {
      title: "In Progress (2)",
      id: 1,
      tasks: [
        {
          id: 1,
          badge: "Video",
          title: "Create sparring tutorial video for the weekly class.",
          color: "#5ECFFF",
          colorName: "accent01",
        },
        {
          id: 2,
          badge: "BUGS FIXING",
          title: "Payment gateway needs reauthorization.",
          color: "#FF4A55",
          colorName: "figRed",
        },
      ],
    },
    {
      title: "Done (3)",
      id: 1,
      tasks: [
        {
          id: 1,
          badge: "BUGS FIXING",
          title: "Action Button needed for Google Maps visits.",
          color: "#FF4A55",
          colorName: "figRed",
        },
        {
          id: 2,
          badge: "Database",
          title: "Update new instructor photos.",
          color: "#38E25D",
          colorName: "figGreen",
        },
        {
          id: 3,
          badge: "Instructor Meeting",
          title: "Review/correct yellow belt techniques.",
          color: "#E328AF",
          colorName: "accent02",
        },
        {
          id: 4,
          badge: "Instructor Meeting",
          title: "Review/correct yellow belt techniques.",
          color: "#E328AF",
          colorName: "accent02",
        },
      ],
    },
  ];
  return (
    <section className="flex space-x-6 mt-7 overflow-auto pb-4">
      {boardList.map(({ id, tasks, title }) => (
        // columns
        <div key={id} className="flex flex-col min-w-[16rem] md:min-w-[20rem]">
          <div className="flex items-center justify-between">
            <h1>{title}</h1>
            <Button isIconOnly className="bg-figmaPrimary">
              <Image
                as={NextImage}
                src="/Icons/plus.png"
                width={100}
                height={100}
                alt="add"
                className="w-5 h-5"
              />
            </Button>
          </div>

          {/* card rows */}
          <div className="flex flex-col mt-4 gap-5">
            {tasks.map(({ id, badge, title, color, colorName }) => (
              <Card key={id} className="bg-[#211A75] w-full max-w-xs">
                <CardHeader className="flex items-center justify-between pb-0 px-5">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full`}
                      style={{ background: color }}
                    ></span>
                    <p className={`font-semibold text-sm`} style={{ color }}>
                      {badge}
                    </p>
                  </div>
                  <Image
                    src="/Icons/vertIcon.svg"
                    alt="verticon"
                    width={100}
                    height={100}
                    className="h-5 w-5 rotate-90"
                  />
                </CardHeader>
                <CardBody className="pt-3 space-y-2.5">
                  <p className="font-semibold text-base md:text-lg">{title}</p>
                  <Progress
                    value={30}
                    aria-label={badge}
                    className="h-[0.4375rem]"
                    classNames={{ indicator: `bg-${colorName}` }}
                  />
                </CardBody>
                <CardFooter className="justify-between items-center pb-7">
                  <AvatarGroup
                    isBordered
                    max={2}
                    total={1}
                    color="primary"
                    size="sm"
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
                  </AvatarGroup>

                  <div className="flex space-x-2 items-center">
                    <Image
                      src="/Icons/clock1.svg"
                      alt="clock1"
                      width={100}
                      height={100}
                      className="h-5 w-5"
                    />
                    <p className="text-[#A5A5A5] font-semibold text-xs md:text-sm">
                      Due in 4 Days
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
