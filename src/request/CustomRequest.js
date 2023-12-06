import axios from "axios";

const CustomRequest = async ({ method, body, uri }) => {
  try {
    const fullUrl = `http://localhost:5000${
      uri.startsWith("/") ? uri : "/" + uri
    }`;
    let res = null;
    switch (method.trim().toLowerCase()) {
      case "get":
        res = await axios.get(fullUrl);
        return res.data;
      case "delete":
        res = await axios.delete(fullUrl);
        return res.data;
      case "put":
        res = await axios.put(fullUrl, body);
        return res.data;
      case "post":
        res = await axios.post(fullUrl, body);
        return res.data;
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
