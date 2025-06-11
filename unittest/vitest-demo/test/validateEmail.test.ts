import { validateEmail } from "../src/validateEmail";
import { describe, expect, it } from "vitest";

describe("validateEmail", () => {
  it("测试validateEmail传入空字符串返回false", () => {
    expect(validateEmail("")).toBe(false);
  });

  it("测试validateEmail传入非字符串类型返回false", () => {
    expect(validateEmail(123)).toBe(false);
    expect(validateEmail(null)).toBe(false);
    expect(validateEmail(undefined)).toBe(false);
    expect(validateEmail({})).toBe(false);
  });

  it("测试validateEmail传入合法邮箱格式返回true", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  it("测试validateEmail传入缺少@符号的邮箱返回false", () => {
    expect(validateEmail("testexample.com")).toBe(false);
  });

  it("测试validateEmail传入缺少域名的邮箱返回false", () => {
    expect(validateEmail("test@")).toBe(false);
  });

  it("测试validateEmail传入包含空格的邮箱返回false", () => {
    expect(validateEmail("test @example.com")).toBe(false);
  });

  it("测试validateEmail传入包含多个@符号的邮箱返回false", () => {
    expect(validateEmail("test@@example.com")).toBe(false);
  });
});
