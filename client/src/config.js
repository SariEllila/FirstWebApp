// export const URL = 'http://localhost:4040'

    export const URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? `http://localhost:${process.env.PORT || 4040}`
    : "https://frightened-pear-shorts.cyclic.app";
