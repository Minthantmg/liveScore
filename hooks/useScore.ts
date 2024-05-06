import {useQuery} from "@tanstack/react-query";
import {getFeed} from "../api/score";

const useGetFeed = () => {
    return useQuery({
        queryKey: ['get', 'feed'],
        queryFn: getFeed
    })
}

export const useScore = () => {
    return {
        useGetFeed,
    }
}