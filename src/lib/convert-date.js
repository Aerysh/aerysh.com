import React from "react";

export const convertDate = (date) => {
  const intlDateFormat = new Date(date).toISOString().substring(0, 10);

  return intlDateFormat;
};
