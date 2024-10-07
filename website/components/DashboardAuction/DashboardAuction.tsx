import AuctionDetails from "../AuctionDetails/AuctionDetails";
import PlaceBid from "../PlaceBid/PlaceBid";
import ActivityAuction from "../ActivityAuction/ActivityAuction";

export default function DashboardStation() {
    return (
        <div className="w-[100%]">
            <div className="flex w-[100%] gap-6">
                <div className="w-[35%] gap-6 flex flex-col">
                    <AuctionDetails isAuctionOpen={true} timeInSecods={120} />
                    <PlaceBid />
                </div>
                <ActivityAuction />
            </div>
        </div>
    )
}