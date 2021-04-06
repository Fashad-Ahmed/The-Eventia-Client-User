import React from 'react'
import SmoothScroll from 'smooth-scroll'
import Navigation from '../components/Navigation'
import Services from '../components/Services'
import Welcome from '../components/Welcome'
import Gallary from '../components/Gallary'
import Topbtn from '../components/Topbtn'

export const scroll = new SmoothScroll('a[href*="# "]', {
    speed: 1000,
    speedAsDuration: true,
})
export default function Home() {
    return (
        <div>
            <Navigation />
            <Welcome/>
            <Services/>
            <Gallary/>
            <Topbtn/>
        </div>
    )
}