import { useSelector } from 'react-redux'
import Spinner from './Spinner'

const AddressDisplay = () => {
  const addressData = useSelector((state) => state.address.data)
  const isLoading = useSelector((state) => state.address.status === 'loading')
  const error = useSelector((state) => state.address.error)

  if (error) {
    return null
  }

  if (!addressData) {
    return (
      <p className="no-data">
        No address data available yet. Enter the zip code.
      </p>
    )
  }

  if (isLoading) {
    return (
      <p className="loading-text">
        <Spinner />
      </p>
    )
  }

  return (
    <div className="address-display">
      <ul className="addressPlaces">
        <p>Post Code: {addressData['post code']}</p>
        <p>Country: {addressData?.country}</p>
        <p>
          Country Abbreviation: {addressData['country abbreviation'] || 'N/A'}
        </p>
        {addressData.places.map((place, index) => (
          <li key={index}>
            <p>Place Name: {place['place name'] || 'N/A'}</p>
            <p>State: {place.state || 'N/A'}</p>
            <p>State Abbreviation: {place['state abbreviation'] || 'N/A'}</p>
            <p>Latitude: {place.latitude || 'N/A'}</p>
            <p>Longitude: {place.longitude || 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddressDisplay
