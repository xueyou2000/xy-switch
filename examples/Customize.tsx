import React from "react";
import Switch from "../src";
import "../src/assets/index";

export default function() {
    return (
        <div>
            <Switch checkedChildren="开" unCheckedChildren="关" />
        </div>
    );
}
