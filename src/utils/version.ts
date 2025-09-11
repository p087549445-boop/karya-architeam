// Automatic versioning system with incremental updates
// This file tracks version changes and daily edit counts

import versionData from '../version.json';

const updateVersionFile = async () => {
  try {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    const buildTime = new Date();
    
    let newVersionData = { ...versionData };
    
    // Check if it's a new day
    if (newVersionData.lastUpdate !== today) {
      // Reset daily count for new day
      newVersionData.dailyCount = 1;
      newVersionData.lastUpdate = today;
    } else {
      // Increment daily count
      newVersionData.dailyCount += 1;
    }
    
    // Increment total edits
    newVersionData.totalEdits += 1;
    
    // Generate new version number: major.month.day.dailyCount
    const year = buildTime.getFullYear();
    const month = (buildTime.getMonth() + 1).toString().padStart(2, '0');
    const day = buildTime.getDate().toString().padStart(2, '0');
    
    newVersionData.version = `2.${month}.${day}.${newVersionData.dailyCount}`;
    
    // In a real deployment, you would write this back to the file
    // For now, we'll just use the current values
    return newVersionData;
  } catch (error) {
    console.warn('Could not update version file:', error);
    return versionData;
  }
};

const getBuildInfo = () => {
  const buildTime = new Date();
  const currentVersionData = versionData;
  
  return {
    version: `v${currentVersionData.version}`,
    buildDate: buildTime.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    buildTime: buildTime.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    }),
    timestamp: buildTime.getTime(),
    dailyEdits: currentVersionData.dailyCount,
    totalEdits: currentVersionData.totalEdits
  };
};

export const { version, buildDate, buildTime, timestamp, dailyEdits, totalEdits } = getBuildInfo();
export { updateVersionFile };