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

    const results = await Promise.allSettled(vehicleDetailsPromises);
    const vehiclesWithDetails = results
      .filter(
        (result) => result.status === 'fulfilled'
                    && result.value
                    && result.value.price
                    && result.value.price.trim() !== ''
      )
      .map((result) => result.value);

    return vehiclesWithDetails;
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
    throw error;
  }
}
