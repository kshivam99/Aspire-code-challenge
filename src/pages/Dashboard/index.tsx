import React from 'react'
import Card from '../../components/Card/Card'
import Header from '../../components/Header'

function Dashboard(): JSX.Element {
  return (
    <div style={{ background: "#0C365A", padding: '24px', zIndex: -2 }}>
        <Header balance={3000} />
        <div>
        <Card />
        </div>
    </div>
  )
}

export default Dashboard