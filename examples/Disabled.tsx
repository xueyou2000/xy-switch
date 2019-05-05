import React from "react";
import Switch from "../src";

export default function() {
    return (
        <div>
            <Switch disabled={true} />
            <br />
            <Switch disabled={true} defaultChecked={true} />
        </div>
    );
}
