import React from 'react'
import Stripe from '../components/Stripe'

const PlanStandard = () => {
    const d = new Date()
    const _date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    return (
        <div style={{flexGrow: 1}}>
            <Stripe name="Standard" amount={150} desc="BMS Breeze Standard Plan" date={_date} />
        </div>
    )
}

export default PlanStandard
