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
    register: async (data: RegisterPayload) => {
      // 1. Convert Data to Backend Types (Arrays/Numbers)
      const payload = {
        ...data,
        yearsOfExperience: parseInt(data.yearsOfExperience) || 0,
        // Robust split: handles commas, splits, trims, and removes empty strings
        skills: data.skills.split(",").map(s => s.trim()).filter(s => s.length > 0),
        tools: data.tools.split(",").map(s => s.trim()).filter(s => s.length > 0),
      };

      console.log("🚀 Register Payload:", payload);

      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include", 
        body: JSON.stringify(payload),
      });
      return handleResponse(res);
    },

    login: async (email: string) => {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify({ email }),
      });
      return handleResponse(res);
    },

    requestMagicLink: async (email: string) => {
      const res = await fetch(`${BASE_URL}/request-magic-link`, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify({ email }),
      });
      return handleResponse(res);
    },

    verifyMagicLink: async (token: string, email: string) => {
      const params = new URLSearchParams({ token, email });
      const res = await fetch(`${BASE_URL}/verify-magic-link?${params}`, {
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
    console.error(`❌ API Error (${response.status}):`, body);
    throw new Error(
      body.message || body.error || `HTTP Error ${response.status}`
    );
  }
  
  return body;
}