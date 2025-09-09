// Automatic versioning system
// This file generates version info based on build timestamp

const getBuildInfo = () => {
  const buildTime = new Date();
  const buildYear = buildTime.getFullYear();
  const buildMonth = (buildTime.getMonth() + 1).toString().padStart(2, '0');
  const buildDay = buildTime.getDate().toString().padStart(2, '0');
  const buildHour = buildTime.getHours().toString().padStart(2, '0');
  const buildMinute = buildTime.getMinutes().toString().padStart(2, '0');
  
  // Auto-increment version based on date and time
  const majorVersion = 2;
  const minorVersion = buildMonth;
  const patchVersion = buildDay;
  
  return {
    version: `v${majorVersion}.${minorVersion}.${patchVersion}`,
    buildDate: buildTime.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    buildTime: `${buildHour}:${buildMinute}`,
    timestamp: buildTime.getTime()
  };
};

export const { version, buildDate, buildTime, timestamp } = getBuildInfo();