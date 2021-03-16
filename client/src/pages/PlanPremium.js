import React from 'react'
import Stripe from '../components/Stripe'

const PlanPremium = () => {
    const d = new Date()
    const _date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    return (
        <div style={{flexGrow: 1}}>
            <Stripe name="Premium" amount={400} desc="BMS Breeze Premium Plan" date={_date} />
        </div>
    )
}

export default PlanPremium
