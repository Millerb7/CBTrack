module.exports = (
  timestamp,
  { monthLength = 'long'} = {}
) => {
  const months = {
    0: monthLength === 'short' ? 'Jan' : 'January',
    1: monthLength === 'short' ? 'Feb' : 'February',
    2: monthLength === 'short' ? 'Mar' : 'March',
    3: monthLength === 'short' ? 'Apr' : 'April',
    4: monthLength === 'short' ? 'May' : 'May',
    5: monthLength === 'short' ? 'Jun' : 'June',
    6: monthLength === 'short' ? 'Jul' : 'July',
    7: monthLength === 'short' ? 'Aug' : 'August',
    8: monthLength === 'short' ? 'Sep' : 'September',
    9: monthLength === 'short' ? 'Oct' : 'October',
    10: monthLength === 'short' ? 'Nov' : 'November',
    11: monthLength === 'short' ? 'Dec' : 'December',
  };

  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  const dayOfMonth = dateObj.getDate();

  const year = dateObj.getFullYear();

  const formattedTimeStamp = new Date(`${formattedMonth} ${dayOfMonth}, ${year}`);

  return formattedTimeStamp.toLocaleDateString();
}; 
