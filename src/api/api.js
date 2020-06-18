import axios from "axios";
import qs from "qs";
import { Base64 } from "js-base64";
import { config } from "../common/config";

const postDataTS = function(url, data, callback) {
  axios({
    method: "POST",
    url: config.TSUrl + url,
    data: data,
    headers: {
      AUTHORIZATION: "Basic " + Base64.encode(config.TSBasic),
    },
  })
    .then(function(res) {
      callback(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};

const postDataCNA = function(url, data, callback) {
  let basic = config.CNABasic + ":" + new Date().getTime();
  axios({
    method: "POST",
    url: config.CNAUrl + url,
    data: data,
    headers: {
      AUTHORIZATION: "Basic " + Base64.encode(basic),
    },
  })
    .then(function(res) {
      callback(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};

const getDataCommon = function(url, params, callback) {
  axios({
    method: "GET",
    url: config.javaSelfUrl + url,
    params: params,
    headers: {
      authorization: "Basic c21zX3R5cmVwbHVzX2ludGVyZmFjZTpzbXNfYmx1ZW1vYmk=",
      "Ocp-Apim-Subscription-Key": config.javaCodeKey,
      "Ocp-Apim-Trace": "true",
    },
  })
    .then(function(res) {
      callback(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};

const postDataCommon = function(url, data, callback) {
  axios({
    method: "POST",
    url: config.javaSelfUrl + url,
    data: qs.stringify(data),
    headers: {
      authorization: "Basic c21zX3R5cmVwbHVzX2ludGVyZmFjZTpzbXNfYmx1ZW1vYmk=",
      "Ocp-Apim-Subscription-Key": config.javaCodeKey,
      "Ocp-Apim-Trace": "true",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
    .then(function(res) {
      callback(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};

//S1 领取状态列表
// {
//   "employeeDrawCode": "2020SUME",
//   "releaseEmployeeNo": "HP12266"
// }
export const getDrawList = (data, callback) => {
  postDataCNA("/public/query_employee_draw_info", data, callback);
};

//S2 用户信息
// var _data = {
//   openId: data.openId,
//   type: data.type
// };
export const getUserInfo = (data, callback) => {
  getDataCommon("/wechat/weixin/getWeixinInfo", data, callback);
};

//S3  生成短链
export const getQRUrl = (data, callback) => {
  getDataCommon("/wechat/weixin/getShortUrl", data, callback);
};

//S4 判断用户是否是新用户
// {unionid: unionId, openid: openId, type: ''}
export const getUser = (data, callback) => {
  postDataTS("/public/user", data, callback);
};

//S5发送验证码
// var _data = {
//   mobile: data.mobile,
//   imageCode:data.imageCode,
//   message: data.message,
//   isValidateImageCode:data.isValidateImageCode,
//   isNotValidateCode:data.isNotValidateCode
// };
export const sendCode = (data, callback) => {
  postDataCommon("/wechat/sms/sendSms", data, callback);
};

//S6 注册
// var dataInfo = {
//   mobile: '16621011546',
//   name: 'name',
//   plate: 'plateVal',
//   openid1: 'openId',
//   openid2: '',
//   unionid:'unionId',
//   channelId:'E2C',//渠道ID
//   releaseDealerNo:'',//分享的门店编号，如果是从门店分享的海报进来的
//   fromUnionId:"",// 分享者unionid，如果是从客户分享的海报进来的
//   releaseEmployeeNo: 'HP12266'// 员工号
//   drawCode:'2020SUM'
// };
export const register = (data, callback) => {
  postDataTS("/public/user-register", data, callback);
};

//S7 老用户领券
// {
//   "dealerDrawCode":"(String)必填，门店抽奖活动code",
//   "unionid":"(String)必填，unionid",
//   "releaseEmployeeNo":"(String)必填，发券的员工编号",
//  "checkModel":"(String)非必填，当前接口是否为检查模式"
// }
export const getCoupon = (data, callback) => {
  postDataCNA("/public/employee_draw_get_coupon", data, callback);
};
