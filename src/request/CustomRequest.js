require("dotenv").config();
const PORT = process.env.SERVER_PORT || 5000;
const SERVER_DOMAIN_URI = process.env.SERVER_DOMAIN_URI;
const axios = require("axios").default;

const CustomRequest = async ({ method = null, body = null, uri = null }) => {
  try {
    const baseUrl = SERVER_DOMAIN_URI.endsWith("/")
      ? SERVER_DOMAIN_URI
      : SERVER_DOMAIN_URI + "/";
    const fullUrl = `${baseUrl}${PORT}${uri}`;

    switch (method.trim().toLowerCase()) {
      case "get":
        const getResponse = await axios.get(fullUrl);
        return getResponse.data;
      case "delete":
        const deleteResponse = await axios.delete(fullUrl);
        return deleteResponse.data;
      case "put":
        const putResponse = await axios.put(fullUrl, body);
        return putResponse.data;
      case "post":
        const postResponse = await axios.post(fullUrl, body);
        return postResponse.data;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  } catch (error) {
    console.error(
      `Error in axios request (${method} ${uri}): ${error.message}`
    );
    throw error;
  }
};

export default CustomRequest;
