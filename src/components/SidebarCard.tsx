import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function SidebarCard() {
  return (
    <Card className="blueCard w-60 mt-12">
      <CardHeader>
        <Image
          alt="nextui logo"
          height={100}
          width={100}
          radius="none"
          src="/Icons/Vector.svg"
          className="w-5 h-5"
        />
      </CardHeader>
      <CardBody>
        <p className="font-bold text-2xl">Increase your work with kanban</p>
        <Image
          alt="nextui logo"
          height={100}
          width={100}
          radius="none"
          src="/Icons/arrowVector.svg"
          className="w-5 h-5"
        />
      </CardBody>
      <NextImage
        alt="nextui logo"
        height={200}
        width={200}
        src="/Icons/MaskGroup.svg"
        className="absolute bottom-0 left-0 w-full h-full"
      />
    </Card>
  );
}
