import React from 'react'
import './brand.css'
import brand1 from "../../"
import brand2 from "../.."
import brand3 from "../.."
import brand4 from "../.."
import Image from '../../'

const brand = () => {
  return (
    <section id="brand">
      <div className="container">
        <div className="brand_wrapper">
          <div className="brand_item">
            <Image source={brand1} alt={"brand"} />
          </div>
          <div className="brand_item">
            <Image source={brand2} alt={"brand"} />
          </div>
          <div className="brand_item">
            <Image source={brand3} alt={"brand"} />
          </div>
          <div className="brand_item">
            <Image source={brand4} alt={"brand"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default brand