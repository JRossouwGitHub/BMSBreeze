import React from 'react'
import Stripe from '../components/Stripe'

const PlanBasic = () => {
    const d = new Date()
    const _date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    return (
        <div style={{flexGrow: 1}}>
            <Stripe name="Basic" amount={75} desc="BMS Breeze Basic Plan" date={_date} />
        </div>
    )
}

export default PlanBasic
