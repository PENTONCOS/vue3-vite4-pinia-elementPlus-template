
import fetch from "@/utils/fetch";

export default {
  verificationCode() {
    // 验证码获取
    return fetch({
      url: "/hc-accesscontrol/platform/security/captcha?base64=true",
      method: "POST"
    });
  },
  doLogin(params) {
    // 登陆接口
    return fetch({
      url: "/hc-accesscontrol/platform/login",
      method: "POST",
      params: params
    });
  },
  doLogOut(params) {
    // 退出登陆接口
    return fetch({
      url: "/hc-accesscontrol/platform/security/logout",
      method: "POST",
      params: params
    });
  },
}