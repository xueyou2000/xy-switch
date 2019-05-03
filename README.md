| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-switch.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-switch.svg?style=flat-square)

[![xy-switch](https://nodei.co/npm/xy-switch.png)](https://npmjs.org/package/xy-switch)

# xy-switch

开关组件

## 安装

```bash
# yarn
yarn add xy-switch utils-hooks classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Switch from "xy-switch";
ReactDOM.render(<Switch />, container);
```

## API

| 属性              | 说明                               | 类型                                                        | 默认值 |
| ----------------- | ---------------------------------- | ----------------------------------------------------------- | ------ |
| checked           | 复选框是否选中                     | boolean                                                     | 无     |
| defaultChecked    | 默认是否选中                       | boolean                                                     | 无     |
| disabled          | 是否禁用                           | boolean                                                     | 无     |
| autoFocus         | 是否自动聚集焦点                   | boolean                                                     | 无     |
| value             | 同原生 input checkbox 一样的 value | string                                                      | 无     |
| checkedChildren   | 选中时得内容                       | React.ReactNode                                             | 无     |
| unCheckedChildren | 非选中时得内容                     | React.ReactNode                                             | 无     |
| onChange          | Switch 值更改事件                  | (chcked: boolean) => void                                   | 无     |
| onFocus           | Checkbox 聚集焦点事件              | (e: React.FocusEvent<HTMLInputElement>) => void             | 无     |
| onBlur            | Checkbox 失去焦点事件              | (e: React.FocusEvent<HTMLInputElement>) => void             | 无     |
| onClick           | Checkbox 点击事件                  | (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void | 无     |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-switch is released under the MIT license.
