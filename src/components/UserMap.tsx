import { useLocalization } from '../context/LocalizationContext';
import { Map, Marker } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export const UserMap = () => {
  const { viewState } = useLocalization()
  const { longitude, latitude } = viewState || { lng: -100, lat: 40 }
  const makerPosition = [longitude, latitude]

  return (

    <Map
      {...viewState}
      style={{ width: '100%', height: '100vh' }}
      center={makerPosition}
      mapStyle="https://api.maptiler.com/maps/openstreetmap/style.json?key=wJKHJ3gFfc6kGIplKLcm">
      <Marker longitude={makerPosition[0]} latitude={makerPosition[1]} />
    </Map>
  )
}