/** ********************* util ************************/
import {VERSION as version} from './util/const'
import getClass from './util/getClass'
import extend from './util/extend'
import clone from './util/clone'

/** ********************* date ************************/
import formatDate from './date/formatDate'
import dayCountOfMonth from './date/dayCountOfMonth'
import isValidDate from './date/isValidDate'

/** ********************* array ***********************/
import arrayEqual from './array/arrayEqual'

export {
  version,
  getClass,
  extend,
  clone,

  formatDate,
  dayCountOfMonth,
  isValidDate,

  arrayEqual
}
