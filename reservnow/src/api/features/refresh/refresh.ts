import config from "../../config";

export const refreshTokenRequest = async (refreshToken) => {
  try {
    // Make a POST request to your server's refresh token endpoint
    const response = await fetch(config.baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      // Handle the response error here, e.g., check for status codes
      throw new Error("Token refresh failed");
    }

    // Parse the JSON response
    const data = await response.json();

    // Assuming the response contains the new access token and refresh token
    const { access_token, refresh_token } = data;

    return data;
  } catch (error) {
    // Handle any network or request errors here
    throw error;
  }
};
