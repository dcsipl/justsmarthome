import React from 'react'
import CommunityDetails from './communitydetails'
import community from './justsmarthome.json';

export default function community5() {
    const community5Details =community.JustSmartCustomHomes[4];
  return (
    <div><CommunityDetails community={community5Details}/></div>
  )
}
