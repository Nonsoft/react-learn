/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type RootTag = 0 | 1 | 2;

// ReactDOM.render
export const LegacyRoot = 0;
// ReactDOM.createBlockingRoot
// 提供了 concurrent 模式的一小部分功能，更接近 React 目前的工作方式，作为迁移的一个步骤
export const BlockingRoot = 1;
// ReactDOM.createRoot
export const ConcurrentRoot = 2;
