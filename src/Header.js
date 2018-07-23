import React, { Component } from 'react'
import Headroom from 'react-headroom'

//Hide header until it's needed with react-headroom node module.
class Header extends Component {
    render () {
        return (
          <Headroom>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          </Headroom>
        )
    }
}

export default Header
