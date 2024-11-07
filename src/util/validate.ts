/**
 * 校验电话号码，格式：
 * - "xxx-xxxxxxx"
 * - "xxxx-xxxxxxxx"
 * - "xxx-xxxxxxx"
 * - "xxx-xxxxxxxx"
 * - "xxxxxxx"
 * - "xxxxxxxx"
 *
 * @param val 当前值字符串。
 */
export function isPhoneNum(val: string): boolean {
  const reg = /^((12[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0|1,5-9]))\d{8}$/;
  return reg.test(val);
}

/**
 * 校验手机号码。
 *
 * @param val 当前值字符串。
 */
export function isMobileNum(val: string): boolean {
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  return reg.test(val);
}

/**
 * 校验邮箱。
 *
 * @param val 当前值字符串。
 */
export function isEmail(val: string): boolean {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(val);
}

/**
 * 校验域名。
 *
 * @param val 当前值字符串。
 */
export function isDomain(val: string): boolean {
  const reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
  return reg.test(val);
}

/**
 * 校验身份证。
 *
 * @param val 当前值字符串。
 */
export function isIdCard(val: string): boolean {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(val);
}

/**
 * 校验 QQ 号。
 *
 * @param val 当前值字符串。
 */
export function isQQ(val: string): boolean {
  const reg = /[1-9][0-9]{4,}/;
  return reg.test(val);
}

/**
 * 校验中国邮政编码。
 *
 * @param val 当前值字符串。
 */
export function isChinaPostalCode(val: string): boolean {
  const reg = /[1-9]\d{5}(?!\d)/;
  return reg.test(val);
}
