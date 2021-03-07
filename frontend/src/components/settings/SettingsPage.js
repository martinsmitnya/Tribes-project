import React from 'react';
import './SettingsPage.css';
import Header from './Header';
import SettingsBlock from './SettingsBlock';

const SettingsPage = () => {
  return ( 
    <div className="settings">
      <Header/>
      <SettingsBlock/>
    </div>
   );
}
 
export default SettingsPage;