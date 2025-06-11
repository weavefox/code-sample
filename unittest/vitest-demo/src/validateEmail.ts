/**
 * 验证邮箱格式是否合法
 * @param email 待验证的邮箱地址
 * @returns 是否合法
 */
export function validateEmail(email: string): boolean {
  if (typeof email !== "string" || email.trim() === "") {
    return false;
  }

  // 简单的邮箱格式正则
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
