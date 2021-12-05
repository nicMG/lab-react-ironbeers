import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav"
import { Link } from 'react-router-dom';

function AllBeers() {

    const [beers, setBeers] = useState([])

    useEffect(() => {

        async function getData(){
            let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            console.log(response.data)
            setBeers(response.data)
            
        }

        getData()

    }, [])



    return (
        <div>
        <Nav/>
            {
                beers.map((elem) => {
                    return(
                        <Link to={`/beers/${elem._id}`}>
                            <div>
                            <img src={elem.image_url}/>
                            <h1>{elem.name}</h1>
                            <h2>{elem.tagline}</h2>
                            <p>Created by: {elem.contributed_by}</p>
                        </div>
                        </Link>
                        
                    )
                })
            }
        </div>
    )
}

export default AllBeers
