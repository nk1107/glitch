"use client";

import { StudySession } from "@prisma/client";
import React from "react";
import { secondsToHms } from "@/lib/utils/utils";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import TotalTime from "./TotalTime";

export default function SessionCard({ props }: any) {
  const hms = secondsToHms(props.time);
  return (
    <div className="card min-h-fit bg-secondary text-base-100 shadow-xl">
      <div className="card-body relative m-3 px-3 py-2">
        <h2 className="card-title text-3xl font-bold">{props.title}</h2>
        <Link
          className="absolute right-4 max-w-fit rounded-full bg-primary p-2 text-xl"
          href={
            "https://twitter.com/intent/tweet?text=" +
            "Hi!! I Completed " +
            hms[1] +
            " H : " +
            hms[2] +
            " M : " +
            hms[3] +
            " S " +
            " on LLAMA"
          }
          data-size="large"
        >
          <BsTwitter />
        </Link>
        <span className="text-xl ">{props.description}</span>
        <div className="card-actions m-3 flex flex-col items-end justify-end px-3 py-2 text-lg">
          {/* @ts-ignore*/}
          <span>Efficiency: <div className="radial-progress text-success bg-base-100" style={{ "--value": props.efficiency ,"--size":"3rem"}}>{props.efficiency}</div></span>
          <span>
            {/* <TotalTime time={props.time} size="text-sm"/> */}
            Time Spent: {hms[0]}:{hms[1]}:{hms[2]}:{hms[3]}
          </span>
        </div>
      </div>
    </div>
  );
}
