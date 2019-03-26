---
title: Color 色彩
---

## Color 色彩
Weijuer 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

## 主色调
使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。

## 使用方法


| State        | postfix | Usage example |
| :------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

<ClientOnly>

<Panel>
<h3 slot="header">Default Buttons</h3>
<Button :type="item" v-for="(item, index) of ['primary', 'success', 'warning', 'danger', 'metal', 'brand', 'focus', 'dashed']" v-text="item"></Button>
</Panel>
</ClientOnly>
