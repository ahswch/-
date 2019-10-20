/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let len1 = haystack.length,
    len2 = needle.length,
    i,
    j;
  if (len2 === 0) {
    return 0;
  }
  if (len1 === 0 || len1 < len2) {
    return -1;
  }
  i = 0;
  while (i <= len1 - len2) {
    if (haystack.substring(i, i + len2) === needle) {
      return i;
    }
    i++;
  }
  return -1;
};
