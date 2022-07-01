import React from 'react'
import CommunityDetails from './communitydetails'
import community from './justsmarthome.json';

export default function community2() {
    const community2Details =community.JustSmartCustomHomes[1];
  return (
    <div><CommunityDetails community={community2Details}/></div>
  )
}
