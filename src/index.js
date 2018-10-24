/** ********************* util ************************/
import {version} from '../package.json'
import getClass from './util/getClass'
import extend from './util/extend'
import clone from './util/clone'

/** ********************* date ************************/
import formatDate from './date/formatDate'
import dayCountOfMonth from './date/dayCountOfMonth'
import isValidDate from './date/isValidDate'

/** ********************* array ***********************/
import arrayEqual from './array/arrayEqual'

/** ********************* dom ********************* **/
import hasFocus from './dom/hasFocus'
import isParent from './dom/isParent'
import removeNode from './dom/removeNode'

export {
  version,
  getClass,
  extend,
  clone,

  formatDate,
  dayCountOfMonth,
  isValidDate,

  arrayEqual,

  hasFocus,
  isParent,
  removeNode
}
