
 /**
  * 当输入框在页面底部, 或者底部有Logo, 呗唤醒的键盘顶起事件
 */
 function fixedKeyboard(this,callBack) {
  let that = this;
  var client_h = document.documentElement.clientHeight;
  window.addEventListener("resize", function() {
    if (/iphone|ipad/i.test(navigator.userAgent.toLowerCase())) {
      //ios这块什么都不用做
    } else {
      //安卓触发window.resize
      var body_h = document.documentElement.clientHeight;
      console.log(body_h, client_h);
      if (client_h > body_h) {
        console.log("ad小了");
        // that.addressRef.style.height = client_h +'px'
        callBack()
        // that.keyBord_flag = false

      } else {
        // that.keyBord_flag = true

        console.log("ad正常");
      }
    }
  });
}
