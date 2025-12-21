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

// --- Logger Helper (Acts like Postman Console) ---
const logRequest = (name: string, url: string, method: string, body: any) => {
  console.group(`🚀 API REQUEST: ${name}`);
  console.log(`URL: ${url}`);
  console.log(`Method: ${method}`);
  if(body) console.log("Payload:", body);
  console.groupEnd();
};

const logResponse = (name: string, status: number, data: any) => {
  const color = status >= 400 ? "color: red; font-weight: bold;" : "color: green; font-weight: bold;";
  console.group(`%c📩 API RESPONSE: ${name} (${status})`, color);
  console.log("Data:", data);
  console.groupEnd();
};

// --- API Client ---
export const api = {
  auth: {
    register: async (data: RegisterPayload) => {
      // 1. Prepare Data
      const payload = {
        ...data,
        yearsOfExperience: parseInt(data.yearsOfExperience) || 0,
        skills: data.skills.includes(",") ? data.skills.split(",").map(s => s.trim()) : [data.skills],
        tools: data.tools.includes(",") ? data.tools.split(",").map(s => s.trim()) : [data.tools]
      };

      const url = `${BASE_URL}/register`;
      
      // 2. Log Request
      logRequest("Register", url, "POST", payload);

      const res = await fetch(url, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify(payload),
      });

      // 3. Log & Handle Response
      const json = await handleResponse(res, "Register");
      return json;
    },

    login: async (email: string) => {
      const url = `${BASE_URL}/login`;
      const payload = { email };
      
      logRequest("Login", url, "POST", payload);

      const res = await fetch(url, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify(payload),
      });

      return handleResponse(res, "Login");
    },

    requestMagicLink: async (email: string) => {
      const url = `${BASE_URL}/request-magic-link`;
      const payload = { email };

      logRequest("Request Magic Link", url, "POST", payload);

      const res = await fetch(url, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify(payload),
      });

      return handleResponse(res, "Request Magic Link");
    },

    verifyMagicLink: async (token: string, email: string) => {
      const params = new URLSearchParams({ token, email });
      const url = `${BASE_URL}/verify-magic-link?${params}`;

      logRequest("Verify Magic Link", url, "GET", null);

      const res = await fetch(url, {
        method: "GET",
        headers: getHeaders(),
        credentials: "include",
      });

      return handleResponse(res, "Verify Magic Link");
    },
  },

  profile: {
    getMe: async (token?: string) => {
      const url = `${BASE_URL}/profile/me`;
      logRequest("Get Profile", url, "GET", null);

      const res = await fetch(url, {
        method: "GET",
        headers: getHeaders(token),
        credentials: "include",
      });

      return handleResponse(res, "Get Profile");
    },

    completeProfile: async (data: ProfilePayload, token?: string) => {
      const url = `${BASE_URL}/profile/complete-profile`;
      logRequest("Complete Profile", url, "POST", data);

      const res = await fetch(url, {
        method: "POST",
        headers: getHeaders(token),
        credentials: "include",
        body: JSON.stringify(data),
      });

      return handleResponse(res, "Complete Profile");
    },

    uploadPassport: async (file: File, token?: string) => {
      const url = `${BASE_URL}/profile/upload-passport`;
      logRequest("Upload Passport", url, "POST", { fileName: file.name, size: file.size });

      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(url, {
        method: "POST",
        headers: getHeaders(token, true),
        credentials: "include",
        body: formData,
      });

      return handleResponse(res, "Upload Passport");
    },
  },

  // Mocked for now
  portfolio: {
    getProjects: async () => { return []; }
  },

  checkHealth: async () => {
    const url = "https://axia-hackathon.onrender.com/";
    logRequest("Health Check", url, "GET", null);
    const res = await fetch(url, { method: "GET", credentials: "include" });
    return handleResponse(res, "Health Check");
  },
};

// --- Enhanced Response Handler ---
async function handleResponse(response: Response, actionName: string) {
  // Clone response so we can read the body twice (once for logging, once for return)
  const clone = response.clone();
  
  let body;
  try {
    body = await clone.json();
  } catch (e) {
    body = await clone.text();
  }

  logResponse(actionName, response.status, body);

  if (!response.ok) {
    throw new Error(
      (typeof body === 'object' && body.message) || 
      (typeof body === 'object' && body.error) || 
      `HTTP Error ${response.status}`
    );
  }
  
  // Return original response parsing
  return response.json();
}