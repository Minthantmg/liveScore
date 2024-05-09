import React from 'react';
import loading from "../../../public/loadingPage.gif"
import Image from "next/image";

const _Loading = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="flex justify-center items-center">
                <div className="sm:pt-72">
                    <Image src={loading} alt="loading_img" />
                </div>
            </div>
        </div>
    );
};

export default _Loading;