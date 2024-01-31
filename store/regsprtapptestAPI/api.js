import axios from "axios"
const regsprtapptestAPI = axios.create({
  baseURL: "https://reg60sprtapptest1-118.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return regsprtapptestAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return regsprtapptestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_sdjbdsj_list(payload) {
  return regsprtapptestAPI.get(`/api/v1/sdjbdsj/`)
}
function api_v1_sdjbdsj_create(payload) {
  return regsprtapptestAPI.post(`/api/v1/sdjbdsj/`, payload)
}
function api_v1_sdjbdsj_retrieve(payload) {
  return regsprtapptestAPI.get(`/api/v1/sdjbdsj/${payload.id}/`)
}
function api_v1_sdjbdsj_update(payload) {
  return regsprtapptestAPI.put(`/api/v1/sdjbdsj/${payload.id}/`, payload)
}
function api_v1_sdjbdsj_partial_update(payload) {
  return regsprtapptestAPI.patch(`/api/v1/sdjbdsj/${payload.id}/`, payload)
}
function api_v1_sdjbdsj_destroy(payload) {
  return regsprtapptestAPI.delete(`/api/v1/sdjbdsj/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return regsprtapptestAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_smala_list(payload) {
  return regsprtapptestAPI.get(`/api/v1/smala/`)
}
function api_v1_smala_create(payload) {
  return regsprtapptestAPI.post(`/api/v1/smala/`, payload)
}
function api_v1_smala_retrieve(payload) {
  return regsprtapptestAPI.get(`/api/v1/smala/${payload.id}/`)
}
function api_v1_smala_update(payload) {
  return regsprtapptestAPI.put(`/api/v1/smala/${payload.id}/`, payload)
}
function api_v1_smala_partial_update(payload) {
  return regsprtapptestAPI.patch(`/api/v1/smala/${payload.id}/`, payload)
}
function api_v1_smala_destroy(payload) {
  return regsprtapptestAPI.delete(`/api/v1/smala/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return regsprtapptestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return regsprtapptestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return regsprtapptestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return regsprtapptestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return regsprtapptestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return regsprtapptestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return regsprtapptestAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return regsprtapptestAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return regsprtapptestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return regsprtapptestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return regsprtapptestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_sdjbdsj_list,
  api_v1_sdjbdsj_create,
  api_v1_sdjbdsj_retrieve,
  api_v1_sdjbdsj_update,
  api_v1_sdjbdsj_partial_update,
  api_v1_sdjbdsj_destroy,
  api_v1_signup_create,
  api_v1_smala_list,
  api_v1_smala_create,
  api_v1_smala_retrieve,
  api_v1_smala_update,
  api_v1_smala_partial_update,
  api_v1_smala_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
