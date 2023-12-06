
const axios = require("axios").default;

const CustomRequest = async ({ method = null, body = null, uri = null }) => {
  try {
    const fullUrl = `http://localhost:5000${uri.startsWith("/") ? uri : '/' + uri }`;

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
