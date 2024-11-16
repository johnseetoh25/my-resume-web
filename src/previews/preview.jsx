import React from 'react'
import ProfileSection from './profile-section'
import NameCardLayout from '../components/name-card'
import ServiceSection from './service-section'
import ResumeSection from './resume-section'
import PortfolioSection from './portfolio-section'
import ContactSection from './contact-section'

export default function PreviewLayout() {
  return (
    <div className='resume-preview-layout'>
      <NameCardLayout/>
      <ProfileSection/>
      <ServiceSection/>
      <ResumeSection/>
      <PortfolioSection/>
      <ContactSection/>
    </div>
  )
}
