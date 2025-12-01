import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
  try {
    const vehicles = await request('/api/vehicles.json');

    if (!vehicles || vehicles.length === 0) {
      return [];
    }

    // Fetch all vehicle details in parallel...
    const vehicleDetailsPromises = vehicles.map(async (vehicle) => {
      try {
        const details = await request(
          `/api/vehicle_${vehicle.id}.json`
        );
        return { ...vehicle, ...details };
      } catch (err) {
        console.error(
          `Failed to fetch details for ${vehicle.id}:`,
          err
        );
        return null;
      }
    });

    const vehiclesWithDetails = await Promise.all(vehicleDetailsPromises);

    // Filter out failed requests and vehicles without prices...
    return vehiclesWithDetails.filter(
      (vehicle) => vehicle && vehicle.price && vehicle.price.trim() !== ''
    );
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
    throw error;
  }
}
