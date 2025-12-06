import VehicleImage from "./VehicleImage";
import VehicleDetails from "./VehicleDetails";
import "./VehicleCard.scss";

export default function VehicleCard({ vehicle, index }) {
    return (
        <article
            id={vehicle.id}
            className="vehicle-card"
            data-testid="vehicle-card"
            aria-label={`View details for ${vehicle.id} vehicle`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <VehicleImage vehicle={vehicle} />
            <VehicleDetails vehicle={vehicle} />
        </article>
    );
}
