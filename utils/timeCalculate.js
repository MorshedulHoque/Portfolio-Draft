export const calculateTimeDifference = (start, end) => {
  const startDate = new Date(start);
  const endDate = end === "Now" ? new Date() : new Date(end);
  const diffTime = Math.abs(endDate - startDate);
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const diffMonths = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  return `${
    diffYears > 0 ? `${diffYears} year${diffYears > 1 ? "s" : ""}` : ""
  } ${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
};
