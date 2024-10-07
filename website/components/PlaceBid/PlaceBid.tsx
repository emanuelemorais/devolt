import Image from "next/image";
import ChargerDevolt from "@/public/charger.svg";
import { HandCoins } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"

export default function PlaceBid() {

    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handlePlaceBid = () => {
        console.log("Place bid");
    }

    return (
        <div className="bg-[#080908] rounded-md border-2 border-[#161d15] px-6 pt-10">
            <div className="flex gap-2">
                <HandCoins className="text-[#7FEA52]" size={24} />
                <p className="text-xl pb-6">Place a bid</p>
            </div>

            <div className="flex">
                <div className="w-[80%]">
                    <div>
                        <p className="text-sm text-[#7FEA52] mb-2">VOLT Quantity</p>
                        <input min={1} onChange={(e)=> setQuantity(Number(e.target.value))} className="w-[80%] bg-black rounded-sm border-2 border-[#161d15] h-10 text-white focus:outline-none px-2" type="number"/>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-[#7FEA52] mb-2">Price Per VOLT</p>
                        <input min={1} onChange={(e)=> setPrice(Number(e.target.value))} className="w-[80%] bg-black rounded-sm border-2 border-[#161d15] h-10 text-white focus:outline-none px-2" type="number"/>
                    </div>

                    <Dialog>
                        {price > 0 && quantity > 0 ? (
                            <DialogTrigger>
                                <Button className="mt-8">
                                    Place bid
                                </Button>
                            </DialogTrigger>
                        ) : (
                            <Button className="mt-8" disabled>
                                Place bid
                            </Button>
                        )}
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Bid Details</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="sm:justify-start">
                                <div className="flex justify-between w-[100%]">
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button onClick={handlePlaceBid} className="bg-[#7FEA52]">
                                        Confirm
                                    </Button>
                                </div>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>


                </div>
                <Image width={170} src={ChargerDevolt} alt="charger" />
            </div>
        </div>
    );
}