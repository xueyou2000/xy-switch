import React from "react";
import classNames from "classnames";
import { useControll } from "utils-hooks";
import { SwitchProps } from "./interface";

export function Switch(props: SwitchProps) {
    const { prefixCls = "xy-switch", className, style, defaultChecked, checkedChildren, unCheckedChildren, checked, value, onChange, ...rest } = props;
    const [checkd, setChecked, isControll] = useControll<boolean>(props, "checked", "defaultChecked");
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-checked`]: checkd,
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-readonly`]: props.readOnly
    });
    const inputProps = {
        ...rest,
        type: "checkbox",
        role: "switch",
        "aria-checked": checkd,
        "aria-disabled": props.disabled || props.readOnly,
        className: `${prefixCls}-input`,
        onChange: handleCheckChange
    };
    if (isControll) {
        inputProps["checked"] = checkd || false;
    } else {
        inputProps["defaultChecked"] = defaultChecked;
    }

    function doSetChecked(ck: boolean) {
        if (props.disabled || props.readOnly) {
            return;
        }
        if (!isControll) {
            // 非受控组件将当前checked作为唯一数据源
            setChecked(ck);
        }
        if (props.onChange) {
            props.onChange(ck);
        }
    }

    function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
        doSetChecked(e.target.checked);
    }

    return (
        <span className={classString} style={style}>
            <span className={`${prefixCls}-inner`}>{checkd ? checkedChildren : unCheckedChildren}</span>
            <input {...inputProps} value={value || ""} />
        </span>
    );
}

export default React.memo(Switch);
