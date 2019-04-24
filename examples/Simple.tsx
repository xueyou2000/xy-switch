import React from "react";
import Switch from "../src";

export default function() {
    return (
        <div>
            <h1>简单演示</h1>
            <Switch defaultChecked={true} />

            <Switch disabled={true} defaultChecked={true} />
            <Switch readOnly={true} />

            <Switch checkedChildren="开" unCheckedChildren="关" />

            <h1>测试null</h1>
            <Switch value={null} />
        </div>
    );
}
