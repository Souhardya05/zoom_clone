"use client";



import { tokenProvider } from "@/actions/stream.actions";
import { useUser } from "@clerk/clerk-react";
import Loading from "@/components/Loading";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY || "";



const StreamClientProvider = ({children}:{children:ReactNode}) => {



    const [videoClient, setVideoClient] = useState<StreamVideoClient>();

    const {user, isLoaded}= useUser();

    useEffect(() => {
        if(!isLoaded || !user) return;
        if(!apiKey) {
            throw new Error("Stream API key is not set");
        }
        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl || "",
            },
            tokenProvider,
        });

        setVideoClient(client);


        
    }, [user, isLoaded]);


    if (!videoClient) {
        return <Loading/>;
    }
  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamClientProvider;