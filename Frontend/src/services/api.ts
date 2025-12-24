const BASE_URL = "https://axia-hackathon.onrender.com/api";

// --- Types & Interfaces ---

export interface RegisterPayload {
  name: string;
  email: string;
  country: string;
  role: string;
  skills: string;
  yearsOfExperience: string;
  tools: string;
  introduction: string;
}

export interface ProfilePayload {
  about: {
    fullName: string;
    email: string;
    country: string;
    jobTitle: string;
    yearsOfExperience: number;
    tools: string[];
    desiredSalary: string;
    availabilityHoursPerWeek: number;
    bio: string;
  };
}

// --- Helper for Headers ---

const getHeaders = (token?: string, isFormData = false): HeadersInit => {
  const headers: HeadersInit = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  if (!isFormData) headers["Content-Type"] = "application/json";
  return headers;
};

// --- API Client ---

export const api = {
  auth: {
    /**
     * Register a new user
     * POST /api/auth/register
     */
    register: async (data: RegisterPayload) => {
      // 1. Convert Data to Backend Types (Arrays/Numbers)
      const payload = {
        ...data,
        yearsOfExperience: parseInt(data.yearsOfExperience) || 0,
        skills: data.skills
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0),
        tools: data.tools
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0),
      };

      const url = `${BASE_URL}/auth/register`;
      console.group("🚀 API REQUEST: REGISTER");
      console.log("Endpoint:", url);
      console.log("Method:", "POST");
      console.log("Body:", payload);
      console.groupEnd();

      const res = await fetch(url, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify(payload),
      });
      return handleResponse(res);
    },

    /**
     * Login
     * POST /api/auth/login
     */
    login: async (email: string) => {
      const url = `${BASE_URL}/auth/login`;
      const body = { email };

      console.group("🚀 API REQUEST: LOGIN");
      console.log("Endpoint:", url);
      console.log("Method:", "POST");
      console.log("Body:", body);
      console.groupEnd();

      const res = await fetch(url, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify(body),
      });
      return handleResponse(res);
    },

    /**
     * Request Magic Link (Resend)
     * POST /api/auth/request-magic-link
     */
    requestMagicLink: async (email: string) => {
      const url = `${BASE_URL}/auth/request-magic-link`;
      const body = { email };

      console.group("🚀 API REQUEST: REQUEST MAGIC LINK");
      console.log("Endpoint:", url);
      console.log("Method:", "POST");
      console.log("Body:", body);
      console.groupEnd();

      const res = await fetch(url, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify(body),
      });
      return handleResponse(res);
    },

    /**
     * Verify Magic Link
     * GET /api/auth/verify-magic-link
     */
    verifyMagicLink: async (token: string, email: string) => {
      const params = new URLSearchParams({ token, email });
      const url = `${BASE_URL}/auth/verify-magic-link?${params}`;

      console.group("🚀 API REQUEST: VERIFY MAGIC LINK");
      console.log("Endpoint:", url);
      console.log("Method:", "GET");
      console.groupEnd();

      const res = await fetch(url, {
        method: "GET",
        headers: getHeaders(),
        credentials: "include",
      });
      return handleResponse(res);
    },
  },

  profile: {
    getMe: async (token?: string) => {
      const res = await fetch(`${BASE_URL}/profile/me`, {
        method: "GET",
        headers: getHeaders(token),
        credentials: "include",
      });
      return handleResponse(res);
    },

    completeProfile: async (data: ProfilePayload, token?: string) => {
      const res = await fetch(`${BASE_URL}/profile/complete-profile`, {
        method: "POST",
        headers: getHeaders(token),
        credentials: "include",
        body: JSON.stringify(data),
      });
      return handleResponse(res);
    },

    uploadPassport: async (file: File, token?: string) => {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch(`${BASE_URL}/profile/upload-passport`, {
        method: "POST",
        headers: getHeaders(token, true),
        credentials: "include",
        body: formData,
      });
      return handleResponse(res);
    },
  },

  checkHealth: async () => {
    const res = await fetch("https://axia-hackathon.onrender.com/", {
      method: "GET",
      credentials: "include",
    });
    return handleResponse(res);
  },
};

// --- Response Handler ---

async function handleResponse(response: Response) {
  let body;
  try {
    body = await response.json();
  } catch (e) {
    body = {};
  }

  if (!response.ok) {
    console.group("❌ API ERROR");
    console.error(`Status: ${response.status}`);
    console.error("Error Body:", body);
    console.groupEnd();
    throw new Error(
      body.message || body.error || `HTTP Error ${response.status}`
    );
  }

  console.log("✅ API SUCCESS:", body);
  return body;
}
