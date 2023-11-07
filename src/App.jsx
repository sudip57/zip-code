import AddressDisplay from './components/AddressDisplay'
import UserInput from './components/UserInput'

const App = () => {
  return (
    <>
      <div className="zip-header">
        <span className="zip-code-info">Zip Code Information</span>
      </div>
      <h1 className="main-heading">Discover, Explore, Locate</h1>
      <p className="para-text">
        Welcome to Zip Code Information, the ultimate app that takes an ordinary
        zip code and reveals its extraordinary secrets. Tired of tedious zip
        hunting? Adventure awaits!
      </p>
      <UserInput />
      <AddressDisplay />
    </>
  )
}

export default App
