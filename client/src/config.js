// export const URL = 'http://localhost:4040'

export const URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:3030"
    : "https://frightened-pear-shorts.cyclic.app";