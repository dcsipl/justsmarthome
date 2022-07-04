import React from 'react'
import CommunityDetails from './communitydetails'
import community from './justsmarthome.json';

export default function community1() {
    const community1Details =community.JustSmartCustomHomes[0];
  return (
    <div><CommunityDetails community={community1Details}/></div>
  )
}
