/**
 * 手机号
 *
 * @param val 当前值字符串
 */
export function verifyPhone(val: string): boolean {
  if (!/^((12[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0|1,5-9]))\d{8}$/.test(val)) {
    return false;
  } else {
    return true;
  }
}

/**
 * 国内电话号
 *
 * @param val 当前值字符串
 */
export function verifyTelPhone(val: string): boolean {
  if (!/\d{3}-\d{8}|\d{4}-\d{7}/.test(val)) {
    return false;
  } else {
    return true;
  }
}
