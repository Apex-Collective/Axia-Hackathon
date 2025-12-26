import React, { useState, useRef, useEffect } from "react";
import {
  Camera,
  User,
  Mail,
  HelpCircle,
  Globe,
  Linkedin,
  Github,
  Twitter,
  Plus,
  X,
  Briefcase,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CountrySelect from "@/components/CountrySelect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- Types ---
interface WorkExperience {
  id: string;
  jobTitle: string;
  employmentType: string;
  companyName: string;
  startDate: string;
  endDate: string;
}

interface Education {
  id: string;
  program: string;
  degree: string;
  schoolName: string;
  startDate: string;
  endDate: string;
}

// --- Reusable Form Section Wrapper ---
const FormSection = ({
  title,
  description,
  onSave,
  isLoading,
  children,
}: {
  title: string;
  description: string;
  onSave?: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-gray-100 last:border-0">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <Button
          variant="secondary"
          className="bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 w-fit"
          onClick={onSave}
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
      <div className="md:col-span-2 space-y-6">{children}</div>
    </div>
  );
};

// --- Helper Component for Icons inside Inputs ---
const InputWithIcon = ({
  icon: Icon,
  rightIcon: RightIcon = HelpCircle,
  ...props
}: any) => (
  <div className="relative">
    {Icon && (
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
    )}
    <Input className={`${Icon ? "pl-10" : ""} pr-10`} {...props} />
    {RightIcon && (
      <RightIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 size-4 cursor-pointer hover:text-gray-500" />
    )}
  </div>
);

export default function EditProfilePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [newTool, setNewTool] = useState("");

  // --- Form State ---
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    yearsOfExperience: 0,
    jobTitle: "",
    desiredSalary: "5000",
    availabilityHoursPerWeek: 40,
    bio: "",
    website: "",
    linkedin: "",
    github: "",
    twitter: "",
    behance: "",
    skills: ["User Experience", "User Interface", "Time Management"],
    tools: [] as string[],

    // Dynamic Arrays with Prefilled Data
    workExperience: [
      {
        id: "1",
        jobTitle: "Product Designer",
        employmentType: "Full-time",
        companyName: "AxiaAfrica (Remote)",
        startDate: "2025",
        endDate: "2025",
      },
      {
        id: "2",
        jobTitle: "Product Designer",
        employmentType: "Full-time",
        companyName: "AxiaAfrica (Remote)",
        startDate: "2025",
        endDate: "2025",
      },
    ] as WorkExperience[],

    education: [
      {
        id: "1",
        program: "Mathematics",
        degree: "BSc",
        schoolName: "Lagos State University",
        startDate: "2025",
        endDate: "2025",
      },
    ] as Education[],
  });

  const [avatarUrl, setAvatarUrl] = useState<string>("");

  // --- Load Data from LocalStorage on Mount ---
  useEffect(() => {
    const storedData = localStorage.getItem("temp_user_data");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        const parseList = (str: string | undefined) =>
          str
            ? str
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
            : [];

        setFormData((prev) => ({
          ...prev,
          fullName: parsed.fullName || prev.fullName,
          email: parsed.email || prev.email,
          country: parsed.country || prev.country,
          jobTitle: parsed.jobTitle || parsed.role || prev.jobTitle,
          yearsOfExperience: parsed.yearsOfExperience || prev.yearsOfExperience,
          bio: parsed.introduction || prev.bio,
          skills:
            parseList(parsed.skills).length > 0
              ? parseList(parsed.skills)
              : prev.skills,
          tools: parseList(parsed.tools),
          // --- UPDATED: Load Arrays ---
          workExperience: parsed.workExperience || prev.workExperience,
          education: parsed.education || prev.education,
        }));
      } catch (e) {
        console.error("Error parsing user data", e);
      }
    }
  }, []);

  // --- General Handlers ---
  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveMock = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      const currentStorage = localStorage.getItem("temp_user_data");
      let updatedData = currentStorage ? JSON.parse(currentStorage) : {};

      updatedData = {
        ...updatedData,
        fullName: formData.fullName,
        email: formData.email,
        country: formData.country,
        role: formData.jobTitle,
        jobTitle: formData.jobTitle,
        yearsOfExperience: formData.yearsOfExperience,
        skills: formData.skills.join(", "),
        tools: formData.tools.join(", "),
        introduction: formData.bio,
        // --- UPDATED: Save Arrays ---
        workExperience: formData.workExperience,
        education: formData.education,
      };

      localStorage.setItem("temp_user_data", JSON.stringify(updatedData));
      window.dispatchEvent(new Event("storage"));
      toast.success("Changes saved successfully");
    }, 1000);
  };

  // --- Skills & Tools Handlers ---
  const handleAddSkill = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newSkill.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(newSkill.trim())) {
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, newSkill.trim()],
        }));
      }
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skillToRemove),
    }));
  };

  const handleAddTool = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newTool.trim()) {
      e.preventDefault();
      if (!formData.tools.includes(newTool.trim())) {
        setFormData((prev) => ({
          ...prev,
          tools: [...prev.tools, newTool.trim()],
        }));
      }
      setNewTool("");
    }
  };

  const removeTool = (toolToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tools: prev.tools.filter((t) => t !== toolToRemove),
    }));
  };

  // --- Work Experience Handlers ---
  const addWorkExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          id: Date.now().toString(),
          jobTitle: "",
          employmentType: "",
          companyName: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const removeWorkExperience = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((item) => item.id !== id),
    }));
  };

  const updateWorkExperience = (
    id: string,
    field: keyof WorkExperience,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  // --- Education Handlers ---
  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now().toString(),
          program: "",
          degree: "",
          schoolName: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const removeEducation = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }));
  };

  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  // --- Photo Handlers ---
  const handlePhotoClick = () => fileInputRef.current?.click();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarUrl(URL.createObjectURL(file));
      toast.success("Profile photo updated");
    }
  };

  const initials = formData.fullName
    ? formData.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "GU";

  return (
    <div className="max-w-4xl">
      {/* --- Profile Photo Section --- */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 border-b border-gray-100 gap-6">
        <div className="flex gap-6 items-center">
          <div>
            <h3 className="font-semibold text-gray-900">Profile photo</h3>
            <p className="text-sm text-gray-500 mt-1">
              This image will be displayed on your profile
            </p>

            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />

            <Button
              variant="outline"
              className="mt-4 text-emerald-500 border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
              onClick={handlePhotoClick}
            >
              <Camera className="size-4 mr-2" />
              Change Photo
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Avatar className="size-24 border-4 border-white shadow-sm">
            <AvatarImage src={avatarUrl} className="object-cover" />
            <AvatarFallback className="bg-gray-200 text-2xl font-bold text-gray-700">
              {initials}
            </AvatarFallback>
          </Avatar>
          <Button
            className="bg-slate-900 text-white hover:bg-slate-800"
            onClick={handleSaveMock}
          >
            Update Now
          </Button>
        </div>
      </div>

      {/* --- About Section --- */}
      <FormSection
        title="About"
        description="Update your personal details here."
        onSave={handleSaveMock}
        isLoading={loading}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Full name</Label>
            <InputWithIcon
              icon={User}
              value={formData.fullName}
              onChange={(e: any) =>
                handleInputChange("fullName", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Email address</Label>
            <InputWithIcon
              icon={Mail}
              value={formData.email}
              onChange={(e: any) => handleInputChange("email", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Which country do you live in?</Label>
            <CountrySelect
              placeholder={formData.country || "Select Country"}
              onChange={(val) => handleInputChange("country", val)}
            />
          </div>

          <div className="space-y-2">
            <Label>Years of professional experience</Label>
            <Input
              type="number"
              value={formData.yearsOfExperience}
              onChange={(e) =>
                handleInputChange("yearsOfExperience", e.target.value)
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Your Title</Label>
            <Input
              value={formData.jobTitle}
              onChange={(e) => handleInputChange("jobTitle", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Which tools do you have experience in?</Label>
            <div className="min-h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs flex flex-wrap gap-2 items-center focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:border-ring transition-all">
              {formData.tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="gap-1 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 pl-2 pr-1"
                >
                  {tool}
                  <button
                    type="button"
                    onClick={() => removeTool(tool)}
                    className="ml-1 rounded-full p-0.5 hover:bg-blue-200/50 text-blue-500 transition-colors"
                  >
                    <X className="size-3" />
                  </button>
                </Badge>
              ))}
              <input
                className="outline-none bg-transparent flex-1 min-w-[100px] text-sm"
                placeholder="Type and enter..."
                value={newTool}
                onChange={(e) => setNewTool(e.target.value)}
                onKeyDown={handleAddTool}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Desired Salary</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                className="pl-7"
                value={formData.desiredSalary}
                onChange={(e) =>
                  handleInputChange("desiredSalary", e.target.value)
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>How many hours a week?</Label>
            <div className="relative">
              <Input
                value={formData.availabilityHoursPerWeek}
                onChange={(e) =>
                  handleInputChange("availabilityHoursPerWeek", e.target.value)
                }
                className="pr-16"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
                hours
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Your bio</Label>
          <textarea
            className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 transition-all"
            value={formData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
          />
        </div>
      </FormSection>

      {/* --- Social Profiles Section --- */}
      <FormSection
        title="Social Profiles"
        description="Where can people find you online?"
        onSave={handleSaveMock}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <Label>Website URL</Label>
            <InputWithIcon
              icon={Globe}
              placeholder="https://www.yourwebsite.com"
              value={formData.website}
              onChange={(e: any) =>
                handleInputChange("website", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>LinkedIn URL</Label>
            <InputWithIcon
              icon={Linkedin}
              placeholder="https://www.linkedin.com/in/..."
              value={formData.linkedin}
              onChange={(e: any) =>
                handleInputChange("linkedin", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>GitHub URL</Label>
            <InputWithIcon
              icon={Github}
              placeholder="https://github.com/..."
              value={formData.github}
              onChange={(e: any) => handleInputChange("github", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Twitter URL</Label>
            <InputWithIcon
              icon={Twitter}
              placeholder="https://twitter.com/..."
              value={formData.twitter}
              onChange={(e: any) =>
                handleInputChange("twitter", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Behance URL</Label>
            <InputWithIcon
              icon={Briefcase}
              placeholder="https://www.behance.net/..."
              value={formData.behance}
              onChange={(e: any) =>
                handleInputChange("behance", e.target.value)
              }
            />
          </div>
        </div>
      </FormSection>

      {/* --- Work Experience Section --- */}
      <FormSection
        title="Your work experience"
        description="Let employers know where you've previously worked"
        onSave={handleSaveMock}
      >
        {formData.workExperience.map((work) => (
          <div
            key={work.id}
            className="p-4 border rounded-xl bg-gray-50/50 space-y-4 mb-4 relative group"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              onClick={() => removeWorkExperience(work.id)}
            >
              <Trash2 className="size-4" />
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Job Title</Label>
                <Input
                  value={work.jobTitle}
                  onChange={(e) =>
                    updateWorkExperience(work.id, "jobTitle", e.target.value)
                  }
                  placeholder="e.g. Product Designer"
                />
              </div>
              <div className="space-y-2">
                <Label>Employment Type</Label>
                <Input
                  value={work.employmentType}
                  onChange={(e) =>
                    updateWorkExperience(
                      work.id,
                      "employmentType",
                      e.target.value
                    )
                  }
                  placeholder="e.g. Full-time"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Company Name</Label>
                <InputWithIcon
                  value={work.companyName}
                  onChange={(e: any) =>
                    updateWorkExperience(work.id, "companyName", e.target.value)
                  }
                  placeholder="e.g. Figma"
                  rightIcon={HelpCircle}
                />
              </div>
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Select
                  value={work.startDate}
                  onValueChange={(val) =>
                    updateWorkExperience(work.id, "startDate", val)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Select
                  value={work.endDate}
                  onValueChange={(val) =>
                    updateWorkExperience(work.id, "endDate", val)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <Button
            variant="ghost"
            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            onClick={addWorkExperience}
          >
            <Plus className="size-4 mr-2" />
            Add more
          </Button>
        </div>
      </FormSection>

      {/* --- Education Section --- */}
      <FormSection
        title="Education"
        description="What schools have you studied at?"
        onSave={handleSaveMock}
      >
        {formData.education.map((edu) => (
          <div
            key={edu.id}
            className="p-4 border rounded-xl bg-gray-50/50 space-y-4 mb-4 relative"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              onClick={() => removeEducation(edu.id)}
            >
              <Trash2 className="size-4" />
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Program</Label>
                <Input
                  value={edu.program}
                  onChange={(e) =>
                    updateEducation(edu.id, "program", e.target.value)
                  }
                  placeholder="e.g. Computer Science"
                />
              </div>
              <div className="space-y-2">
                <Label>Degree</Label>
                <Input
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(edu.id, "degree", e.target.value)
                  }
                  placeholder="e.g. Bachelors"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>School Name</Label>
                <InputWithIcon
                  value={edu.schoolName}
                  onChange={(e: any) =>
                    updateEducation(edu.id, "schoolName", e.target.value)
                  }
                  placeholder="e.g. University of Lagos"
                  rightIcon={HelpCircle}
                />
              </div>
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Select
                  value={edu.startDate}
                  onValueChange={(val) =>
                    updateEducation(edu.id, "startDate", val)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Select
                  value={edu.endDate}
                  onValueChange={(val) =>
                    updateEducation(edu.id, "endDate", val)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <Button
            variant="ghost"
            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            onClick={addEducation}
          >
            <Plus className="size-4 mr-2" />
            Add more
          </Button>
        </div>
      </FormSection>

      {/* --- Skills Section --- */}
      <FormSection
        title="Your Skills"
        description="This will help startups hone in on your strengths."
        onSave={handleSaveMock}
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {formData.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="px-3 py-1.5 text-sm gap-2 bg-white hover:bg-gray-50 font-normal text-gray-700 border-gray-200 shadow-sm transition-all pl-3 pr-2"
            >
              <span className="font-semibold">{skill}</span>
              <button
                type="button"
                className="ml-1 rounded-full p-0.5 hover:bg-gray-200 text-gray-400 hover:text-red-500 transition-colors"
                onClick={() => removeSkill(skill)}
              >
                <X className="size-3" />
              </button>
            </Badge>
          ))}
        </div>

        <div className="space-y-2">
          <Label>Add Skills</Label>
          <Input
            placeholder="e.g. Product Designer, Software Developer"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleAddSkill}
          />
        </div>
      </FormSection>
    </div>
  );
}