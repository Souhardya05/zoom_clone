'use client'




import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetUp = ({setIsSetUpComplete}:{setIsSetUpComplete : (value:boolean)=>void}) => {
    const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);
    const call = useCall();
    if (!call) {
        throw new Error('useCall must be used within StreamCall component');
    }

    useEffect(() => {
        if (!isMicCamToggleOn) {
            call?.camera?.enable();
            call?.microphone?.enable();
        } else {
            call?.camera?.disable();
            call?.microphone?.disable();
        }
    }, [isMicCamToggleOn, call?.camera, call?.microphone]);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full gap-3 text-white">
            <h1 className='text-2xl font-bold mb-4'>Set up</h1>
            <div className=" w-full max-w-[640px] aspect-video rounded-lg flex items-center justify-center mb-4">
                <VideoPreview className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col h-16 items-center justify-center gap-3 m-8'>
                <label className='flex items-center justify-center gap-2 font-medium'>
                    <input type="checkbox" 
                    checked={isMicCamToggleOn}
                    onChange={(e) => setIsMicCamToggleOn(e.target.checked)}
                    />
                    Join with mic and video off
                </label>
                
                <DeviceSettings/>
                

                <Button className="rounded-md bg-green-500 px-4 py-2.5'"
                onClick={()=>{
                    call?.join();
                    setIsSetUpComplete(true);
                }}
                >Join meeting</Button>
                
                
            </div>
            
        </div>
    );
}

export default MeetingSetUp
