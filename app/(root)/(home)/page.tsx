"use client";


import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";
import { useGetCalls } from "@/hooks/useGetCalls";



const HOME = () => {
  const {  upcomingCalls } =  useGetCalls();
  const nextCallTime = upcomingCalls?.[0]?.state.startsAt
    ? new Date(upcomingCalls[0].state.startsAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
    : "No upcoming meeting";
  const nextCallDate = upcomingCalls?.[0]?.state.startsAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        weekday: "long",
      }).format(new Date(upcomingCalls[0].state.startsAt))
    : "No upcoming meeting";
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    weekday: "long",
  }).format(now);
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-[url(/images/hero-background.png)] bg-cover p-10 relative">
        <div className="flex h-full flex-col justify-between max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal  m-2">
            {nextCallTime !== "No upcoming meeting" ? `Upcoming Call on ${nextCallDate} at ${nextCallTime}` : "No Upcoming Meetings"}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl m-2">{time}</h1>
            <p className="text-lg font-medium text-[#c9ddff] lg:text-2xl m-2">{date}</p>

          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default HOME;
