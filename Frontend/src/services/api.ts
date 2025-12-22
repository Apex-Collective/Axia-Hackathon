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
        // Robust split: handles commas, trims spaces, removes empty items
        skills: data.skills
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0),
        tools: data.tools
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0),
      };

      console.log("🚀 Register Payload:", payload);

      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include", // REQUIRED for cookies
        body: JSON.stringify(payload),
      });
      return handleResponse(res);
    },

    /**
     * Login
     * POST /api/auth/login
     */
    login: async (email: string) => {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify({ email }),
      });
      return handleResponse(res);
    },

    /**
     * Request Magic Link
     * POST /api/auth/request-magic-link
     */
    requestMagicLink: async (email: string) => {
      const res = await fetch(`${BASE_URL}/auth/request-magic-link`, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify({ email }),
      });
      return handleResponse(res);
    },

    /**
     * Verify Magic Link
     * GET /api/auth/verify-magic-link
     */
    verifyMagicLink: async (token: string, email: string) => {
      const params = new URLSearchParams({ token, email });
      const res = await fetch(`${BASE_URL}/auth/verify-magic-link?${params}`, {
        method: "GET",
        headers: getHeaders(),
        credentials: "include",
      });
      return handleResponse(res);
    },
  },

  profile: {
    /**
     * Get Current Profile
     * GET /api/profile/me
     */
    getMe: async (token?: string) => {
      const res = await fetch(`${BASE_URL}/profile/me`, {
        method: "GET",
        headers: getHeaders(token),
        credentials: "include",
      });
      return handleResponse(res);
    },

    /**
     * Complete/Update Profile
     * POST /api/profile/complete-profile
     */
    completeProfile: async (data: ProfilePayload, token?: string) => {
      const res = await fetch(`${BASE_URL}/profile/complete-profile`, {
        method: "POST",
        headers: getHeaders(token),
        credentials: "include",
        body: JSON.stringify(data),
      });
      return handleResponse(res);
    },

    /**
     * Upload Passport Photo
     * POST /api/profile/upload-passport
     */
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

  /**
   * Health Check
   */
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
  // Read body only once
  let body;
  try {
    body = await response.json();
  } catch (e) {
    body = {};
  }

  // Log Error if it fails (Helps you debug 400/404/500 errors)
  if (!response.ok) {
    console.error(`❌ API Error (${response.status}):`, body);
    throw new Error(
      body.message || body.error || `HTTP Error ${response.status}`
    );
  }

  return body;
}
