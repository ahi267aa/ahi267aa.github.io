import React from 'react'
import "./MyInfo.css"
import InfoItem from './MyInfoItem'

const MyInfo = () => {
  return (
    <main className='MyInfo'>
        <InfoItem itemTitle="Chinese Name" itemName="葉昕語" />
        <InfoItem itemTitle="English Name" itemName="Johnny" />
        <InfoItem itemTitle="Gmail" itemName="xxszcvfh@gmail.com" />
        <InfoItem itemTitle="Master's Degree" itemName="National Taipei University, Department of Electrical Engineering" />
        <InfoItem itemTitle="Bachelor's Degree" itemName="Ming Chuan University, Department of Information and Telecommunications Engineering" />

    </main>
  )
}

export default MyInfo