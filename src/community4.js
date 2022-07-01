import React from 'react'
import CommunityDetails from './communitydetails'
import community from './justsmarthome.json';

export default function community4() {
    const community4Details =community.JustSmartCustomHomes[3];
  return (
    <div><CommunityDetails community={community4Details}/></div>
  )
}
