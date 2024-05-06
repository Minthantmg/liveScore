'use client'
import React from 'react';
import {useScore} from "../../../hooks/useScore";
import Image from "next/image";

const Page = () => {

    const {useGetFeed} = useScore()
    const {data: feed, isSuccess, isLoading, isError} = useGetFeed()
    console.log(feed)
    return (
        <div className="mx-10 bg-gray-200">
            {isLoading && (<>Loading...</>)}
            {isError && (<>Error...</>)}
            {isSuccess && (
                <div className="grid grid-cols-4 gap-4 gap-y-4">
                    {feed.slice(0,12).map((item: any) => (
                        <div className="rounded-lg bg-white">
                            <img src={item.thumbnail} alt="image"/>
                            <div className="px-1 py-2">
                                {item.date}
                            </div>
                            <div className="px-1">
                                {item.title}
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;