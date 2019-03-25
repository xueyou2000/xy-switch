export interface SwitchProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * ID
     */
    id?: string;
    /**
     * 同原生input 一样的name
     */
    name?: string;
    /**
     * tabIndex
     */
    tabIndex?: number;
    /**
     * 复选框是否选中
     */
    checked?: boolean;
    /**
     * 默认是否选中
     */
    defaultChecked?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否自动聚集焦点
     */
    autoFocus?: boolean;
    /**
     * 同原生input checkbox一样的value
     */
    value?: any;
    /**
     * 是否只读
     */
    readOnly?: boolean;
    /**
     * 选中时得内容
     */
    checkedChildren?: React.ReactNode;
    /**
     * 非选中时得内容
     */
    unCheckedChildren?: React.ReactNode;
    /**
     * Switch值更改事件
     */
    onChange?: (chcked: boolean) => void;
    /**
     * Checkbox聚集焦点事件
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Checkbox失去焦点事件
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Checkbox点击事件
     */
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}
