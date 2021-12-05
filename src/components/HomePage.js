import React from 'react'
import { Link } from 'react-router-dom'


function HomePage() {

    return (
        <div>
        <Link to={"/beers"}>
            <div>
                <img src="../public/beers.png"/>
                <h1>All Beers</h1>
                <p>Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
            </div>
        </Link>
         <Link to={"/random"}>
            <div>
                <img src="../public/random-beer.png"/>    
                <h1>Random Beer</h1>
                <p>Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
            </div>
        </Link>
         <Link to={"/create"}>
            <div>
                <img src="../public/new-beer.png"/>
                <h1>New Beer</h1>
                <p>Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
            </div>
        </Link>



        </div>
    )
}

export default HomePage
