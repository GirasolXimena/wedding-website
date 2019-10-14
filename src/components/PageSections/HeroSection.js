import React from 'react'
import Banner from '../Hero/Banner'
import RSVPButton from '../Hero/RSVPButton'
import EngagementPhoto from '../../assets/engagement_photo.jpg'

const heroStyles = 'bg-center bg-fixed bg-no-repeat bg-contain h-screen flex flex-col justify-between items-between p-20 pb-4'

const HeroSection = () => (
  <header
    className={heroStyles}
    style={{ backgroundImage: `url(${EngagementPhoto})` }}
  >
    <Banner />
    <RSVPButton />
  </header>
)

export default HeroSection
