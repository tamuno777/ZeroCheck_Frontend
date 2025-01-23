import { EVENTS, REWARD_DATA, CERTIFICATIONS } from "@/constants/constants"
import NFTDashboard from "../components/nft_events_rewards/NftEventsRewards"

export default function Page() {
  return (
    <NFTDashboard
      events={EVENTS}
      rewards={REWARD_DATA}
      certifications={CERTIFICATIONS}
    />
  )
}
