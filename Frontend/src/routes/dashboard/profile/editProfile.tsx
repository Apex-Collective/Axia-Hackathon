import React, { useState, useRef } from "react";
import { 
  Camera, User, Mail, HelpCircle, Globe, Linkedin, Github, 
  Twitter, Plus, X, Briefcase
} from "lucide-react";
import { toast } from "sonner"; 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CountrySelect from "@/components/CountrySelect";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// --- Reusable Form Section Wrapper ---
const FormSection = ({ 
  title, 
  description, 
  onSave, 
  isLoading,
  children 
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
      <div className="md:col-span-2 space-y-6">
        {children}
      </div>
    </div>
  );
};

// --- Helper Component for Icons inside Inputs ---
const InputWithIcon = ({ icon: Icon, rightIcon: RightIcon = HelpCircle, ...props }: any) => (
  <div className="relative">
    {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />}
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

  // --- Mock Form State (No API) ---
  const [formData, setFormData] = useState({
    fullName: "Joshua Inioluwa",
    email: "joshuainioluwa@ui.com",
    country: "Nigeria",
    yearsOfExperience: 5,
    jobTitle: "Frontend Developer",
    desiredSalary: "500",
    availabilityHoursPerWeek: 50,
    bio: "Frontend developer with 5 years turning designs into pixel-perfect, responsive web apps. Passionate about clean code, performance, and great user experiences.",
    website: "",
    linkedin: "",
    github: "",
    twitter: "",
    behance: "",
    skills: ["React", "JavaScript", "CSS", "Bootstrap", "Git"],
    tools: ["Visual Studio Code"]
  });

  const [avatarUrl, setAvatarUrl] = useState<string>("");

  // --- Handlers ---

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(newSkill.trim())) {
        setFormData(prev => ({
          ...prev,
          skills: [...prev.skills, newSkill.trim()]
        }));
      }
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skillToRemove)
    }));
  };

  const removeTool = (toolToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tools: prev.tools.filter(t => t !== toolToRemove)
    }));
  };

  // --- Simulation Actions (No API) ---

  const handleSaveMock = () => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      toast.success("Changes saved successfully (Local State Only)");
    }, 1000);
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create local URL for preview only
      const objectUrl = URL.createObjectURL(file);
      setAvatarUrl(objectUrl);
      toast.success("Profile photo updated (Preview Only)");
    }
  };

  // Initials logic matching ProfileBanner
  const initials = formData.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="max-w-4xl">
      
      {/* --- Profile Photo Section --- */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 border-b border-gray-100 gap-6">
        <div className="flex gap-6 items-center">
          <div>
            <h3 className="font-semibold text-gray-900">Profile photo</h3>
            <p className="text-sm text-gray-500 mt-1">This image will be displayed on your profile</p>
            
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
          <Button className="bg-slate-900 text-white hover:bg-slate-800">
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
              onChange={(e: any) => handleInputChange("fullName", e.target.value)}
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
              placeholder="Select Country" 
              onChange={(val) => handleInputChange("country", val)}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Years of professional experience</Label>
            <Input 
              type="number"
              value={formData.yearsOfExperience} 
              onChange={(e) => handleInputChange("yearsOfExperience", e.target.value)}
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
              {formData.tools.map(tool => (
                <Badge key={tool} variant="secondary" className="gap-1 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200">
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  {tool}
                  <X className="size-3 cursor-pointer ml-1" onClick={() => removeTool(tool)} />
                </Badge>
              ))}
              <input 
                className="outline-none bg-transparent flex-1 min-w-[100px] text-sm" 
                placeholder="Type and enter..." 
                onKeyDown={(e) => {
                  if(e.key === 'Enter' && e.currentTarget.value) {
                    setFormData(p => ({...p, tools: [...p.tools, e.currentTarget.value]}));
                    e.currentTarget.value = "";
                  }
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
             <Label>Desired Salary</Label>
             <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input 
                  className="pl-7" 
                  value={formData.desiredSalary}
                  onChange={(e) => handleInputChange("desiredSalary", e.target.value)}
                />
             </div>
          </div>

          <div className="space-y-2">
             <Label>How many hours a week?</Label>
             <div className="relative">
                <Input 
                  value={formData.availabilityHoursPerWeek}
                  onChange={(e) => handleInputChange("availabilityHoursPerWeek", e.target.value)}
                  className="pr-16"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">hours</span>
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
            <InputWithIcon icon={Globe} placeholder="https://www.yourwebsite.com" 
              value={formData.website} onChange={(e:any) => handleInputChange("website", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>LinkedIn URL</Label>
            <InputWithIcon icon={Linkedin} placeholder="https://www.linkedin.com/in/..." 
              value={formData.linkedin} onChange={(e:any) => handleInputChange("linkedin", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>GitHub URL</Label>
            <InputWithIcon icon={Github} placeholder="https://github.com/..." 
              value={formData.github} onChange={(e:any) => handleInputChange("github", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Twitter URL</Label>
            <InputWithIcon icon={Twitter} placeholder="https://twitter.com/..." 
               value={formData.twitter} onChange={(e:any) => handleInputChange("twitter", e.target.value)}
            />
          </div>
           <div className="space-y-2">
            <Label>Behance URL</Label>
            <InputWithIcon icon={Briefcase} placeholder="https://www.behance.net/..." 
               value={formData.behance} onChange={(e:any) => handleInputChange("behance", e.target.value)}
            />
          </div>
        </div>
      </FormSection>

      {/* --- Work Experience Section --- */}
      <FormSection 
        title="Your work experience" 
        description="Let employers know where you've previously worked"
      >
        <div className="p-4 border rounded-xl bg-gray-50/50 space-y-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Job Title</Label>
                    <Input placeholder="e.g. Product Designer" />
                </div>
                <div className="space-y-2">
                    <Label>Employment Type</Label>
                    <Input placeholder="e.g. Full-time" />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Label>Company Name</Label>
                    <InputWithIcon placeholder="e.g. Figma" rightIcon={HelpCircle} />
                </div>
                <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Select>
                        <SelectTrigger><SelectValue placeholder="Select Date" /></SelectTrigger>
                        <SelectContent><SelectItem value="2025">2025</SelectItem></SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>End Date</Label>
                     <Select>
                        <SelectTrigger><SelectValue placeholder="Select Date" /></SelectTrigger>
                        <SelectContent><SelectItem value="2025">2025</SelectItem></SelectContent>
                    </Select>
                </div>
            </div>
        </div>

        <div className="flex justify-end">
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                <Plus className="size-4 mr-2" />
                Add more
            </Button>
        </div>
      </FormSection>

       {/* --- Education Section --- */}
       <FormSection 
        title="Education" 
        description="What schools have you studied at?"
      >
        <div className="p-4 border rounded-xl bg-gray-50/50 space-y-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Program</Label>
                    <Input placeholder="e.g. Computer Science" />
                </div>
                <div className="space-y-2">
                    <Label>Degree</Label>
                    <Input placeholder="e.g. Bachelors" />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Label>School Name</Label>
                    <InputWithIcon placeholder="e.g. University of Lagos" rightIcon={HelpCircle} />
                </div>
                <div className="space-y-2">
                    <Label>Start Date</Label>
                     <Select>
                        <SelectTrigger><SelectValue placeholder="Select Date" /></SelectTrigger>
                        <SelectContent><SelectItem value="2021">2021</SelectItem></SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>End Date</Label>
                     <Select>
                        <SelectTrigger><SelectValue placeholder="Select Date" /></SelectTrigger>
                        <SelectContent><SelectItem value="2025">2025</SelectItem></SelectContent>
                    </Select>
                </div>
            </div>
        </div>
        <div className="flex justify-end">
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
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
            {formData.skills.map(skill => (
                <Badge key={skill} variant="outline" className="px-3 py-1.5 text-sm gap-2 bg-white hover:bg-gray-50 font-normal text-gray-700 border-gray-200 shadow-sm transition-all">
                    <span className="font-semibold">{skill}</span>
                    <X 
                        className="size-3 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" 
                        onClick={() => removeSkill(skill)}
                    />
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