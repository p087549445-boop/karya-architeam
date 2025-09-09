// Auto-increment version system
const getVersionInfo = () => {
  // Use build-time variables from Vite
  const buildTimestamp = typeof __BUILD_TIMESTAMP__ !== 'undefined' ? __BUILD_TIMESTAMP__ : new Date().toISOString();
  const buildVersion = typeof __BUILD_VERSION__ !== 'undefined' ? __BUILD_VERSION__ : `2.1.${Date.now() % 10000}`;
  
  // Format update date from timestamp
  const updateDate = new Date(buildTimestamp).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return {
    version: buildVersion,
    updateDate,
    buildTimestamp
  };
};

export const versionInfo = getVersionInfo();