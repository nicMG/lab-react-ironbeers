import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap"
import Nav from "./Nav"

function BeerRandom() {

    const { id } = useParams()
    const [details, setDetails] = useState(null)

    useEffect(() => {

        // axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        //     .then((response) => {
        //         setDetails(response.data)
        //     }).catch((err) => {

        //     });

        const getData = async () => {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            setDetails(response.data)
        }
        getData()
    }, [])
    


    if(!details){
        return <Spinner animation="grow" variant="danger" />
    }

    return (
        <div>
            <Nav/>
            <img src={details.image_url}/>
            <h1>{details.name}</h1>
            <h2>{details.tagline}</h2>
            <p>{details.description}</p>
            <h6>{details.contributed_by}</h6>
        </div>
    )
}
export default BeerRandom
