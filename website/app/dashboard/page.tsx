"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import type { NextPage } from "next";
import "../globals.css";
import SideBar from "@/components/SideBar/SideBar";
import TeslaCar from "@/public/tesla-car.svg";
import Car from "@/types/car";
import cars from "@/data/cars";
import DashboardStation from "@/components/DashboardStations/DashboardStation";
import DashboardAuction from "@/components/DashboardAuction/DashboardAuction";

const Dashboard: NextPage = () => {

    const [selectedCar, setSelectedCar] = useState<Car>({
        name: "Tesla",
        model: "Model X",
        image: TeslaCar,
        battery: 89,
        range: 230,
        capacity: 80,
    });
    
    const [dashboradPage, setDashboardPage] = useState("stations");
    const pageName = dashboradPage === "stations" ? "Stations" : "Auction";

    return (
        <>
            <div className="flex justify-center">
                <div className="flex w-[1800px] h-screen overflow-hidden">
                    <div className="w-[15%]">
                        <SideBar selectedCar={selectedCar} onSelectCar={setSelectedCar} cars={cars} dashboradPage={dashboradPage} setDashboardPage={setDashboardPage} /> 
                    </div>
                    <div className="w-[80%] m-8">
                        <div className="w-[100%] flex justify-between pb-6">
                            <p className="text-2xl font-semibold">{pageName}</p>
                            <w3m-button />
                        </div>
                        {dashboradPage === "stations" && (
                            <DashboardStation selectedCar={selectedCar}/> 
                        )}
                        {dashboradPage === "auction" && (
                            <DashboardAuction/> 
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

