import React from 'react'

const MobilePricingBtn = ({plan, text, onClick, active,}) => {
    return (
        <div className="plans-mobile-button-inline">
            <button onClick={() => onClick(text)} className={`plans-mobile-button ${active ? "active" : ""}`}>{text}</button>
        </div>
    )
}

export default MobilePricingBtn
