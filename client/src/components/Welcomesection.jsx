import React from 'react'
import welcome from '../img/welcome.png'
export default function Welcomesection() {
    return (
        <div className="">
            <div className="container">
                <div className="md:flex items-center">
                    <div className="md:w-1/2 ">
                        <img src={welcome} alt="" />
                    </div>
                    <div className="md:w-1/2 lg:p-20 p-5">
                        <h2>The Best Medical And General Practice Care!</h2>
                        <h2 className="text-3xl font-bold pt-4 text-[#52ded1]">
                            Improving The Quality Of Your Life Through Better
                            Health.
                        </h2>
                        <p className="tracking-tight text-lg">
                            Snakes are sometimes perceived as evil, but they are
                            also perceived as medicine. If you look at an
                            ambulance, there's the two snakes on the side of the
                            ambulance. The caduceus, or the staff of Hermes,
                            there's the two snakes going up it, which means that
                            the venom can also be healing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}