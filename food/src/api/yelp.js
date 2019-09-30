import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer bk7Bxv9V1jKtbTsbvuwn6bLNp13p0BEVKxEznwNgyhtIK4zlZN5ij_1Ts3QePURVmLiDK6PsDoCFIeadvs0OVlXwnkV1bNMgqSceVtm0cispsT4QKOOpY3R8Ry2CXXYx"
  }
});
