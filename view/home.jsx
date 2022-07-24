const React = require('react')
const Def = require('../default')



function home () {
    return (
      <Def>
          <main>
              <h1 className='largeNam'>Wish List App</h1>
              <div>
                <img className='mainBanner' src='/images/group-eating.jpg' alt='Group Eating Pizza'></img>
              </div>
              <div>
                Photo by <a href='https://unsplash.com/@norevisions>'>No Revisions</a> on <a href='https://unsplash.com/photos/jCvbQdgHxFo'>Unsplash</a>
              </div>
              <a href="/places">
              <button className="btn-primary">Favorites</button>
              </a>            
          </main>
      </Def>
    )
  }
  

module.exports = home