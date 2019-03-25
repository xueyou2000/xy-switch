import React from "react";
import Switch from "../src";

export default function() {
    return (
        <div>
            <p>简单演示</p>
            <Switch defaultChecked={true} />

            <Switch disabled={true} defaultChecked={true} />
            <Switch readOnly={true} />

            <Switch checkedChildren="开" unCheckedChildren="关" />
        </div>
    );
}
