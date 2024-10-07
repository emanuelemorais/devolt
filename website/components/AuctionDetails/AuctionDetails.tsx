"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Gavel } from "lucide-react";

type AuctionDetailsProps = {
    isAuctionOpen: boolean;
    timeInSecods: number;
};

export default function AuctionDetails({ isAuctionOpen, timeInSecods }: AuctionDetailsProps) {

    const status = isAuctionOpen ? "Auction Open" : "Auction Closed";

    const [timeLeft, setTimeLeft] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);
    const [second, setSecond] = useState<number>(0);

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
    };

    useEffect(() => {
        setTimeLeft(timeInSecods)
        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerRef.current!);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000); 

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        formatTime(timeLeft);
    }, [timeLeft]);


    return (
        <div className="max-w-full bg-[#080908] rounded-md border-2 border-[#161d15] h-[50%] 2xl:h-[55%] p-6">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Gavel className="text-[#7FEA52]" size={24} />
                    <p className="text-xl pb-6">Auction Details</p>
                </div>
                <div className={`text-sm border border-2 h-6 px-4 rounded-lg ${ isAuctionOpen? 'text-[#7FEA52] border-[#7FEA52]' : 'text-red-500 border-red-500'}`}>{status}</div>
            </div>

            <div className="flex my-8 justify-evenly">
                <div className="h-24 w-28 border rounded-lg border-[#36DB46] flex justify-center items-center text-3xl">
                    {hour < 10 ? `0${hour}` : hour}
                </div>
                <div className="h-24 w-12 flex justify-center items-center text-3xl">:</div>
                <div className="h-24 w-28 border rounded-lg border-[#36DB46] flex justify-center items-center text-3xl">
                    {minute < 10 ? `0${minute}` : minute}
                </div>
                <div className="h-24 w-12 flex justify-center items-center text-3xl">:</div>
                <div className="h-24 w-28 border rounded-lg border-[#36DB46] flex justify-center items-center text-3xl">
                    {second < 10 ? `0${second}` : second}
                </div>
            </div>

            <div className="w-full h-px bg-white"></div>

            <div className="my-4">
                <div className="flex justify-between py-2">
                    <p>Price limit per token:</p>
                    <p>$$ 000000000</p>
                </div>
            </div>

            <div className="w-full h-px bg-white"></div>
        </div>
    );
}
