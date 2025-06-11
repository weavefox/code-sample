import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import TodoInput from "../src/todoInput";
import { describe, expect, it, vi } from "vitest";

describe("TodoInput组件", () => {
  it("测试TodoInput组件渲染是否正确", () => {
    render(<TodoInput onSubmit={vi.fn()} />);
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("测试输入框的值是否正确更新", () => {
    render(<TodoInput onSubmit={vi.fn()} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "New Task" } });
    expect(input.value).toBe("New Task");
  });

  it("测试handleSubmit在输入为空时是否不调用onSubmit", () => {
    const onSubmit = vi.fn();
    render(<TodoInput onSubmit={onSubmit} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("测试handleSubmit在输入为空白字符时是否不调用onSubmit", () => {
    const onSubmit = vi.fn();
    render(<TodoInput onSubmit={onSubmit} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(button);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("测试handleSubmit在输入有效时是否调用onSubmit并清空输入框", () => {
    const onSubmit = vi.fn();
    render(<TodoInput onSubmit={onSubmit} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalled();
    expect(input.value).toBe("");
  });

  it("测试handleSubmit在输入有效时是否传递正确的文本给onSubmit", () => {
    const onSubmit = vi.fn();
    render(<TodoInput onSubmit={onSubmit} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledWith("New Task");
  });
});
