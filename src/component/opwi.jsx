import React from 'react'
import "../../src/App.css"
import "../../src/index.css"

import Section1 from '../../src/component/section1'
import Section2 from '../../src/component/section2'
import Section3 from '../../src/component/section3'
import Section4 from '../../src/component/section4'
import Section5 from '../../src/component/section5'
export default function Navbar() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5/>
        </>
    )
}