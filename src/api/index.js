import request from "../utils/request";

//****动态路由***************************************************** */
//动态路由getMenusApi
export const getMenusApi = () => {
  return request({
    url: "auth/menu.jsp",
    method: "get",
  });
};
//****orders**************************************************** */

export const getOrdersApi = (params) => {
  return request({
    url: "/orders/index.jsp",
    method: "get",
    params,
  });
};

export const getOrdersTotalApi = (params) => {
  return request({
    url: "/orders/total.jsp",
    method: "get",
    params,
  });
};
//****stores**************************************************** */
export const getStoresApi = (params) => {
  return request({
    url: "/stores/index.jsp",
    method: "get",
    params,
  });
};

export const postStoresApi = (data) => {
  return request({
    url: "/stores/create.jsp",
    method: "post",
    data,
  });
};

export const deleteStoresApi = (params) => {
  return request({
    url: "/stores/delete.jsp",
    method: "delete",
    params,
  });
};

//****角色创建* roles**************************************************** */
//角色创建 列表
export const getRolesApi = () => {
  return request({
    url: `roles/index.jsp`,
    method: "get",
  });
};

export const postRolesApi = (data) => {
  return request({
    url: `roles/create.jsp`,
    method: "post",
    data,
  });
};

export const deleteRolesApi = (params) => {
  return request({
    url: `roles/delete.jsp`,
    method: "delete",
    params,
  });
};

export const putRolesApi = (data) => {
  return request({
    url: `roles/update.jsp`,
    method: "put",
    data,
  });
};

export const putAssignAuthsApi = (data) => {
  return request({
    url: "/roles/assign.jsp",
    method: "put",
    data,
  });
};

//****登录接口***************************************************** */
//短信验证码
export const postSmsSendApi = (data) => {
  return request({
    url: `sms/send.jsp`,
    method: "post",
    data,
  });
};
//短信登录
export const postSmsLoginApi = (data) => {
  return request({
    url: `sms/login.jsp`,
    method: "post",
    data,
  });
};
//token登录
export const postLoginTokenApi = (data) => {
  return request({
    url: `token/login.jsp`,
    method: "post",
    data,
  });
};
//正常登录 密保
export const loginApi = (data) =>
  request({
    url: "users/login.jsp",
    method: "post",
    data,
  });
//********************************************************/
//用户历史访问
export const getUsersHistoryApi = (params) => {
  return request({
    url: "users/history.jsp",
    method: "get",
    params,
  });
};
//用户列表
export const usersindexapi = (params) => {
  return request({
    url: `users/index.jsp`,
    method: "get",
    params,
  });
};

export const postrolesApi = (data) => {
  return request({
    url: `roles/create.jsp`,
    method: "post",
    data,
  });
};
//****cate*************************************************** */
export const getCatesApi = (params) => {
  return request({
    url: `cate/index.jsp`,
    method: "get",
    params,
  });
};

export const postCatesApi = (data) => {
  return request({
    url: "cate/create.jsp",
    method: "post",
    data,
  });
};

export const deleteCatesApi = (params) => {
  return request({
    url: "cate/delete.jsp",
    method: "delete",
    params,
  });
};

export const putCatesApi = (data) => {
  return request({
    url: "cate/update.jsp",
    method: "put",
    data,
  });
};

//****用户列表users*************************************************** */
//kg.zhaodashen.cn/mt/admin/users/state.jsp
//用户状态改变
export const stateUsersApi = (data) => {
  return request({
    url: "users/state.jsp",
    method: "put",
    data,
  });
};

export const getUsersApi = (params) => {
  return request({
    url: "users/index.jsp",
    method: "get",
    params,
  });
};

export const postUsersApi = (data) => {
  return request({
    url: "users/create.jsp",
    method: "post",
    data,
  });
};

export const deleteUsersApi = (params) => {
  return request({
    url: "users/delete.jsp",
    method: "delete",
    params,
  });
};

export const putUsersApi = (data) => {
  return request({
    url: "users/update.jsp",
    method: "put",
    data,
  });
};

export const putAssignRoleApi = (data) => {
  return request({
    url: "/users/assign.jsp",
    method: "put",
    data,
  });
};

//****auth*************************************************** */
//kg.zhaodashen.cn/mt/admin/auth/index.jsp

export const getAuthApi = () => {
  return request({
    url: "auth/index.jsp",
    method: "get",
  });
};

export const postAuthsApi = (data) => {
  return request({
    url: "/auth/create.jsp",
    method: "post",
    data,
  });
};

export const deleteAuthsApi = (params) => {
  return request({
    url: "/auth/delete.jsp",
    method: "delete",
    params,
  });
};

export const putAuthsApi = (data) => {
  return request({
    url: "/auth/update.jsp",
    method: "put",
    data,
  });
};

//****areas*************************************************** */
export const getAreasApi = (params) => {
  return request({
    url: "areas/index.jsp",
    method: "get",
    params,
  });
};

//****areas*************************************************** */
export const getGoodsApi = (params) => {
  return request({
    url: "/goods/index.jsp",
    method: "get",
    params,
  });
};

export const deleteGoodsApi = (params) => {
  return request({
    url: "/goods/delete.jsp",
    method: "delete",
    params,
  });
};

export const postGoodsApi = (data) => {
  return request({
    url: "/goods/create.jsp",
    method: "post",
    data,
  });
};

export const putUsersStateApi = (data) => {
  return request({
    url: "/users/state.jsp",
    method: "put",
    data,
  });
};

export const postLoginApi = (data) => {
  return request({
    url: "/users/login.jsp",
    method: "post",
    data,
  });
};
