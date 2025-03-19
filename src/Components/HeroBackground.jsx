import React from 'react'
import Services from './Services'

const HeroBackground = () => {
    return (
        <div className="relative md:h-[450px] w-full">
            {/* Background Image */}
            <img
                className="h-full w-full object-cover"
                src="/src/assets/corporate-management-strategy-solution-branding-concept.jpg"
                alt="Corporate Strategy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-xs md:text-lg">
                <Services />
            </div>
        </div>

    )
}

export default HeroBackground