"use client";

import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetUp from "@/components/MeetingSetUp";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loading from "@/components/Loading";
import Alert from "@/components/Alert";
const Meeting = ({ params }: { params: Promise<{ id: string }> }) => {
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;

  const { isLoaded, user } = useUser();
  const [isSetUpComplete,setIsSetUpComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) {
    return <Loading />;
  }
  if (!call) return (
    <p className="text-center text-3xl font-bold text-white">
      Call Not Found
    </p>
  );

  
  const notAllowed = call.type === 'invited' && (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

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
