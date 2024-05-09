'use client'
import React from 'react';
import {useScore} from "../../../hooks/useScore";
import Loading from "../../app/components/_loading"
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import Link from "next/link";

const Page = () => {
    const router = useRouter()
    const {useGetFeed} = useScore()
    const {data: feed, isSuccess, isLoading, isError} = useGetFeed()

    const gotoLink = (url : string) => {
        router.push(url)
    }
    return (
        <div className="px-10 py-10">
            {isLoading && <Loading />}
            {isError && (<>Error...</>)}
            {isSuccess && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10">
                    {feed.map((item: any) => (
                        <div className="rounded-lg bg-white shadow-xl" key={item.title}>
                            <img src={item.thumbnail} alt="image" className="rounded-t-lg"/>
                            <div className="px-1 pt-4 text-xl font-bold">
                                {item.title}
                            </div>
                            <div className="px-1 pt-1">
                                <span className="font-bold">League</span>:  {item.competition}
                            </div>
                            <div className="px-1 pt-2 text-sm">
                                {item.date ? item.date.slice(0, 10) : null}
                            </div>
                            <div className="flex justify-end items-center">
                                <div className="pr-4 py-4">
                                    <Button variant="outline">
                                        <Link href={item.matchviewUrl}>
                                            View
                                        </Link>
                                        </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;