import geolocation from 'react-native-geolocation-service';

export default async function getGeoLocation() {
  const promiseWrapper = new Promise<geolocation.GeoCoordinates>((resolve, reject) => {
    geolocation.getCurrentPosition(
      (location) => {
        resolve(location.coords);
      },
      (error) => {
        reject({ latitude: 0, longitude: 0 });
      },
    );
  });
  try {
    const coords = await promiseWrapper;
    return { ...coords };
  } catch {
    return { latitude: 0, longitude: 0 };
  }
}
