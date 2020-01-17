/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {Fiber} from 'react-reconciler/src/ReactFiber';

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
const ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  // read: react/ReactElement.js
  // Fiber: react-reconciler/ReactFiberBeginWork.js
  //   func finishClassComponent -> ReactCurrentOwner.current = workInProgress;
  // null: react-reconciler/ReactFiberWorkLoop.js
  //   func performUnitOfWork & func commitRootImpl -> ReactCurrentOwner.current = null
  current: (null: null | Fiber),
};

export default ReactCurrentOwner;
