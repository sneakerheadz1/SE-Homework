import React from 'react'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

function FloorPlan() {
    return (
        <div>
            <h3>Floor Plan</h3>
            <Kitchen />
            <LivingRoom />
            <Bedroom />
            <Bath />
        </div>
    )
}

export default FloorPlan
