import { useState, useEffect } from 'react';
import { Call } from '@stream-io/video-client';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';



export const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call>();
    const [isCallLoading, setIsCallLoading] = useState(true);

    const client = useStreamVideoClient();

    useEffect(() => {
        if(!client || !id) {
            return;
        }
        const loadCall = async () => {
            const {calls} = await client.queryCalls({
                filter_conditions:{
                    id
                }
            });
            if(calls.length > 0) {
                setCall(calls[0]);
            } else {
                setCall(undefined);
            }
            setIsCallLoading(false);
        }
        loadCall();
    }, [client, id]);

  return {call, isCallLoading};
}