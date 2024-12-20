import { Box, Pagination, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import '../components/portfolio-tabs.css'
import PropTypes from 'prop-types'
import PortfolioCard from './portfolio-card';

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <div
    role='tabpanel'
      id={`tab-panel-layout-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ paddingX: '5%', paddingY: 2}}>{children}</Box>}
    </div>
  );


}

TabPanel.propTypes ={
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function tabPanelProps(index) {
  return {
    id: `tab-${index}`
  }
}

export default function PortfolioTabs() {
  const [tabValue, setTabValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 
  const totalItems = 18; 
  const portfolioItems = Array.from({ length: totalItems });

  const handleTabsChange = (event, newValueTab) => {
    setTabValue(newValueTab)
  }
  
  // Calculate the items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = portfolioItems.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleTabsChange} centered>
          <Tab label="All" {...tabPanelProps(0)} sx={{textTransform: 'none'}}/>
          <Tab label="Web Design" {...tabPanelProps(1)} sx={{textTransform: 'none'}}/>
          <Tab label="HarmonyOS App" {...tabPanelProps(2)} sx={{textTransform: 'none'}}/>
          <Tab label="Mobile App" {...tabPanelProps(3)} sx={{textTransform: 'none'}}/>
          <Tab label="Robotics" {...tabPanelProps(4)} sx={{textTransform: 'none'}}/>
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <div className="portfolio-card-listing-layout">
          {currentItems.map((_, index) => (
            <PortfolioCard key={startIndex + index}/>
          ))}
        </div>
        <Pagination 
          count={Math.ceil(totalItems / itemsPerPage)} // Total pages
          page={currentPage}
          onChange={handlePageChange} // Update page on change
          className='portfolio-card-listing-pagination'
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <div className="portfolio-card-listing-layout">
          {Array.from({length: 8}).map((_, index) => (
            <PortfolioCard key={index}/>
          ))}
        </div>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>3</TabPanel>
      <TabPanel value={tabValue} index={3}>4</TabPanel>
      <TabPanel value={tabValue} index={4}>5</TabPanel>
    </div>
  )
}
