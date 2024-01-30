import axios from "axios"
import { CONNECTOR_SPR60REGRE_SECRET } from "react-native-dotenv"
const sprregre = axios.create({
  baseURL: "https://api.sampletestreg.com",
  params: { private_key: CONNECTOR_SPR60REGRE_SECRET },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function spr60regre_get_sample_run_test_read(payload) {
  return sprregre.get(`/sample/run/test/`)
}
export const apiService = { spr60regre_get_sample_run_test_read }
