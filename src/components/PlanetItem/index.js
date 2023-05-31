// Write your code here
import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data
  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
