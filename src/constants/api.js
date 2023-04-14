import md5 from "md5";

export const apiKey = "2014db88991539ad5fe113d6ba4b49ab";
export const privateKey = "f8651f9e58eb5babbb2ec6b99c0b0729c05afe69";
export const ts = Date.now();
export const hash = md5(ts + privateKey + apiKey);
export const invalidImg =
  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
