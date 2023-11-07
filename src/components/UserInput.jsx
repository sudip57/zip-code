import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddress } from '../features/addressSlice'

const UserInput = () => {
  const [zipCode, setZipCode] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  //   const [errorMessage, setErrorMessage] = useState('')

  const isLoading = useSelector((state) => state.address.status === 'loading')
  const error = useSelector((state) => state.address.error)

  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    setZipCode(event.target.value)
  }

  //   useEffect(() => {
  //     if (error) {
  //       setErrorMessage(error)
  //       const timeoutId = setTimeout(() => {
  //         setErrorMessage(null)
  //       }, 3000)
  //       return () => clearTimeout(timeoutId)
  //     }
  //   }, [error])
  const handleReload = () => {
    window.location.reload()
  }

  const handleGetAddress = () => {
    if (zipCode === '' || !/^\d+$/.test(zipCode)) {
      setErrorMsg('Enter a valid zip code')
      setTimeout(() => {
        setErrorMsg('')
      }, 3000)
    } else {
      dispatch(fetchAddress(zipCode))
    }
  }

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter the zip code..."
          value={zipCode}
          onChange={handleInputChange}
        />
        <button onClick={handleGetAddress}>
          {isLoading ? 'Loading...' : 'Get Address'}
        </button>
      </div>
      {errorMsg && <div className="error-message">{errorMsg}</div>}
      {error && (
        <div className="error-message">
          <p className="error-message">{error}</p>
          <button onClick={handleReload}>Try Again</button>
        </div>
      )}
    </>
  )
}

export default UserInput
