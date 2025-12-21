const BASE_URL = "https://axia-hackathon.onrender.com/api";

// --- Types & Interfaces ---

export interface RegisterPayload {
  name: string;
  email: string;
  country: string;
  role: string;
  skills: string; // The API expects a string (e.g., "React, Vue"), not an array based on the docs
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
    tools: string[]; // Note: verify if API expects string or array here. Docs showed array in complete-profile response
    desiredSalary: string;
    availabilityHoursPerWeek: number;
    bio: string;
  };
}

export interface AuthResponse {
  message: string;
  [key: string]: any;
}

// --- Helper for Headers ---

/**
 * Generates headers.
 * Note: 'Content-Type' is excluded for FormData so the browser can set the boundary automatically.
 */
const getHeaders = (token?: string, isFormData = false): HeadersInit => {
  const headers: HeadersInit = {};

  // If you have a stored API Key or JWT, you can inject it here automatically
  // const storedToken = localStorage.getItem('token');
  // if (storedToken) headers['Authorization'] = `Bearer ${storedToken}`;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
    // The docs also mention X-API-Key in some places.
    // If your backend requires that specific header instead of Bearer, uncomment below:
    // headers['X-API-Key'] = token;
  }

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  return headers;
};

// --- API Client ---

export const api = {
  auth: {
    /**
     * Register a new user
     */
    register: async (data: RegisterPayload) => {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(res);
    },

    /**
     * Request a Magic Link (Login)
     */
    login: async (email: string) => {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email }),
      });
      return handleResponse(res);
    },

    /**
     * Request a Magic Link (Explicit Endpoint)
     */
    requestMagicLink: async (email: string) => {
      const res = await fetch(`${BASE_URL}/auth/request-magic-link`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email }),
      });
      return handleResponse(res);
    },

    /**
     * Verify the Magic Link token
     */
    verifyMagicLink: async (token: string, email: string) => {
      // Constructs URL: /verify-magic-link?token=...&email=...
      const params = new URLSearchParams({ token, email });
      const res = await fetch(`${BASE_URL}/auth/verify-magic-link?${params}`, {
        method: "GET",
        headers: getHeaders(),
      });
      return handleResponse(res);
    },
  },

  profile: {
    /**
     * Get the current user's profile
     */
    getMe: async (token?: string) => {
      const res = await fetch(`${BASE_URL}/profile/me`, {
        method: "GET",
        headers: getHeaders(token),
      });
      return handleResponse(res);
    },

    /**
     * Complete or Update the user profile
     */
    completeProfile: async (data: ProfilePayload, token?: string) => {
      const res = await fetch(`${BASE_URL}/profile/complete-profile`, {
        method: "POST",
        headers: getHeaders(token),
        body: JSON.stringify(data),
      });
      return handleResponse(res);
    },

    /**
     * Upload Passport Photo
     * Accepts a File object (from an input type="file")
     */
    uploadPassport: async (file: File, token?: string) => {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(`${BASE_URL}/profile/upload-passport`, {
        method: "POST",
        // isFormData = true prevents manual Content-Type setting
        headers: getHeaders(token, true),
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
    });
    return handleResponse(res);
  },
};

// --- Response Handler ---

async function handleResponse(response: Response) {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(
      errorBody.message || errorBody.error || `HTTP Error ${response.status}`
    );
  }
  return response.json();
}
