#!/usr/bin/env node

// Script to increment version on each edit
// This should be called by Git hooks or build process

const fs = require('fs');
const path = require('path');

const versionFilePath = path.join(__dirname, '../src/version.json');

try {
  // Read current version data
  const versionData = JSON.parse(fs.readFileSync(versionFilePath, 'utf8'));
  
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  const buildTime = new Date();
  
  // Check if it's a new day
  if (versionData.lastUpdate !== today) {
    // Reset daily count for new day
    versionData.dailyCount = 1;
    versionData.lastUpdate = today;
  } else {
    // Increment daily count
    versionData.dailyCount += 1;
  }
  
  // Increment total edits
  versionData.totalEdits += 1;
  
  // Generate new version number: major.month.day.dailyCount
  const month = (buildTime.getMonth() + 1).toString().padStart(2, '0');
  const day = buildTime.getDate().toString().padStart(2, '0');
  
  versionData.version = `2.${month}.${day}.${versionData.dailyCount}`;
  
  // Write back to file
  fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));
  
  console.log(`Version updated to: v${versionData.version} (Edit #${versionData.dailyCount} today)`);
  
} catch (error) {
  console.error('Error updating version:', error);
  process.exit(1);
}