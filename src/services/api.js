import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 30000,
});

/**
 * Upload image for PPE inspection
 */
export const inspectImage = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    "/detect",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export default api;