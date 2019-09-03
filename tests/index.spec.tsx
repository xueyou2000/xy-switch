import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Switch from "../src";

describe("Switch", () => {
    test("render", () => {
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Switch id="theme" />
                    开启
                </label>
            </div>,
        );

        const input = wrapper.getByLabelText("开启", { selector: "input" }) as HTMLInputElement;

        // Assert: 默认checked状态为false
        expect(input.checked).toBeFalsy();

        // Act: 模拟input点击选中事件
        fireEvent.change(input, { target: { checked: true } });
        // Assert: 断言此时checked状态为true
        expect(input.checked).toBeTruthy();

        // Act: 模拟input点击取消选中事件
        fireEvent.change(input, { target: { checked: false } });
        // Assert: 断言此时checked状态为false
        expect(input.checked).toBeFalsy();
    });

    test("passes value props to input", () => {
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Switch id="theme" value={6} />
                    开启
                </label>
            </div>,
        );
        const input = wrapper.getByLabelText("开启", { selector: "input" }) as HTMLInputElement;
        expect(input.value).toBe("6");
    });

    test("autoFocus", () => {
        const handleFocus = jest.fn();
        render(<Switch autoFocus={true} onFocus={handleFocus} />);
        expect(handleFocus).toBeCalled();
    });

    test("disabled", () => {
        const handleChange = jest.fn();
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Switch id="theme" disabled={true} onChange={handleChange} />
                    useTheme
                </label>
            </div>,
        );
        const input = wrapper.getByLabelText("useTheme", { selector: "input" }) as HTMLInputElement;
        const span = wrapper.container.querySelector(".xy-switch");
        expect(span.classList.contains("xy-switch-disabled")).toBeTruthy();
        expect(input.hasAttribute("disabled")).toBeTruthy();
        expect(input.checked).toBeFalsy();

        // 禁用状态下无法切换选中状态
        fireEvent.change(input, { target: { checked: true } });
        expect(input.checked).toBeTruthy();
        // 禁用状态下不会触发onChange回调
        expect(handleChange.mock.calls.length).toBe(0);
    });
});
