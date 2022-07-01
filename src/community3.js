import React from 'react'
import CommunityDetails from './communitydetails'
import community from './justsmarthome.json';

export default function community3() {
    const community3Details =community.JustSmartCustomHomes[2];
  return (
    <div><CommunityDetails community={community3Details}/></div>
  )
}
