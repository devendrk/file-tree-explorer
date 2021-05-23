/**
 *
 * @param {date} mtime
 * @param {function} cb  // callbacak function isSameDay()
 * @returns Date or Time
 * Description: if < 24 hrs returns last modifiedTime  else returns modified Date
 *              TRY changing one of the directory's( ex root directory) date to todays date in filesystem.jsonto see the effect.
 */
export const renderFieModifiedStatus = (mtime, cb) => {
  const modifiedDateTime = new Date(mtime);
  const isModifiedToday = cb(modifiedDateTime);
  return isModifiedToday
    ? modifiedDateTime.toLocaleTimeString("en-GB")
    : modifiedDateTime.toLocaleDateString();
};

/**
 *
 * @param {date} modifiedDate
 * @returns boolean
 *
 * Description: compares last modified date with current date and returns true or false
 */
export const isSameDay = (modifiedDate) => {
  const today = new Date();
  return (
    today.getFullYear() === modifiedDate.getFullYear() &&
    today.getMonth() === modifiedDate.getMonth() &&
    today.getDate() === modifiedDate.getDate()
  );
};
