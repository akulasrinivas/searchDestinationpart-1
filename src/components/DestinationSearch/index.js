// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props

    return (
      <div className="bg-conatiner">
        <div className="app-item-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="search"
              onChange={this.onChangeSearchInput}
            />
            <img
              alt="search icon"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="destinations-list">
            {destinationsList.map(eachDestination => (
              <DestinationItem
                destinationDetails={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
