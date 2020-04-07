/**
 * 当输入框在页面底部, 或者底部有Logo, 呗唤醒的键盘顶起事件
 */
function fixedKeyboard(this, callBack) {
  let that = this;
  var client_h = document.documentElement.clientHeight;
  window.addEventListener("resize", function () {
    if (/iphone|ipad/i.test(navigator.userAgent.toLowerCase())) {
      //ios这块什么都不用做
    } else {
      //安卓触发window.resize
      var body_h = document.documentElement.clientHeight;
      console.log(body_h, client_h);
      if (client_h > body_h) {
        console.log("ad小了");
        // that.addressRef.style.height = client_h +'px'
        callBack();
        // that.keyBord_flag = false
      } else {
        // that.keyBord_flag = true
        console.log("ad正常");
      }
    }
  });
}

/**
 * 如果数字为不存在则自动返回'--'
 * 10000 => "10,000"
 * @param {number} num
 * @returns {number} num
 */
function toThousandFilter(num) {
  if (num === null || typeof num === "undefined") {
    return "--";
  }
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

module.exports = {
  fixedKeyboard:fixedKeyboard,
  toThousandFilter:toThousandFilter,
  merge:merge,
  forEach:forEach,

};
