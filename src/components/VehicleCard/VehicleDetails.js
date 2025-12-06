import VehicleDetailsButton from './VehicleDetailsButton';

export default function VehicleDetails({ vehicle }) {
  return (
    <div className="vehicle-card__details">
      <div className="vehicle-card__details-id">{vehicle.id}</div>
      <p className="vehicle-card__details-price">
        <span aria-label={`Starting price ${vehicle.price}`}>
          From
          {' '}
          {vehicle.price}
        </span>
      </p>
      <p className="vehicle-card__details-description">
        {vehicle.description}
      </p>
      <VehicleDetailsButton vehicle={vehicle} />
    </div>
  );
}
