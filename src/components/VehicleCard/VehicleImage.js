import './VehicleCard.scss';

export default function VehicleImage({ vehicle }) {
  return (
    <picture className="vehicle-card__img-wrapper">
      <source media="(max-width: 767px)" srcSet={vehicle.media[1].url} />
      <img
        className="vehicle-card__img"
        src={vehicle.media[0].url}
        alt={`${vehicle.id} ${vehicle.description}`}
      />
    </picture>
  );
}
