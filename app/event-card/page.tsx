import EventCard from "../components/EventCard";
import eventImage from '../../public/eventImage.svg'

export default function Page() {
    return <div className="flex min-h-screen items-center justify-center p-4">
        <EventCard
            title="Crypto Conference 2025"
            time="10:30 AM UTC+1"
            date="2023-08-15"
            location="NewYork"
            platform="Zoom"
            price="50"
            currency="WRLD"
            imageUrl={eventImage}
        />
    </div>
}