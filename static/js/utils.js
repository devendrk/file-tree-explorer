/**
 *
 * @param {date} mtime
 * @param {function} cb  // callbacak function isSameDay()
 * @returns Date or Time // if < 24 hrs returns last modifiedTime  else returns modified Date
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
