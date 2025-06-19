"use client";

import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetUp from "@/components/MeetingSetUp";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loading from "@/components/Loading";

const Meeting = ({ params }: { params: Promise<{ id: string }> }) => {
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;

  const { isLoaded } = useUser();
  const [isSetUpComplete,setIsSetUpComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) {
    return <Loading />;
  }

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetUpComplete ?
           <MeetingSetUp 
            setIsSetUpComplete={setIsSetUpComplete}
          
          /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
