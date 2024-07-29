// src/axiosConfig.js
import axios from 'axios';

// Tạo instance Axios với cấu hình cơ bản
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3003', // URL cơ bản cho API
  timeout: 3000, // Thời gian chờ (10 giây)

});

// Bạn có thể thêm các interceptor để xử lý request và response nếu cần
axiosInstance.interceptors.request.use(
  config => {
    // Thực hiện các thao tác trước khi gửi request (như thêm token vào headers)
    return config;
  },
  error => {
    // Xử lý lỗi request
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    // Xử lý dữ liệu từ response
    return response;
  },
  error => {
    // Xử lý lỗi response
    return Promise.reject(error);
  }
);

export default axiosInstance;