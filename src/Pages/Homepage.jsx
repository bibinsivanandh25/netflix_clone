import React from 'react'
import { Fragment} from 'react'
import ListofMovies from '../Component/Movies/ListofMovies'
import PreloadedVideoBlock from '../Component/Slider/PreloadedVideoBlock'

const Homepage = () => {
    return (
        <Fragment>
            <PreloadedVideoBlock/>
            <ListofMovies/>

        </Fragment>
    )
}

export default Homepage
