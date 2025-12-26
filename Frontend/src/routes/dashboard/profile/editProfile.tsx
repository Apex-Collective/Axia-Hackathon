import { useState } from "react";
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
  GraduationCap
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CountrySelect from "@/components/CountrySelect";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// --- Reusable Form Section Wrapper ---
const FormSection = ({ 
  title, 
  description, 
  onSave, 
  children 
}: { 
  title: string; 
  description: string; 
  onSave?: () => void; 
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
          // Disabled style matching the mock
        >
          Save Changes
        </Button>
      </div>
      <div className="md:col-span-2 space-y-6">
        {children}
      </div>
    </div>
  );
};

// --- Helper Component for Icons inside Inputs ---
const InputWithIcon = ({ icon: Icon, ...props }: any) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
    <Input className="pl-10" {...props} />
    <HelpCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 size-4 cursor-pointer hover:text-gray-500" />
  </div>
);

export default function EditProfilePage() {
  const [tools, setTools] = useState(["Visual Studio Code"]);
  const [skills, setSkills] = useState(["React", "JavaScript", "CSS", "Bootstrap", "Git"]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newSkill) {
      e.preventDefault();
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="max-w-4xl">
      
      {/* --- Profile Photo Section --- */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 border-b border-gray-100 gap-6">
        <div className="flex gap-6 items-center">
          <div>
            <h3 className="font-semibold text-gray-900">Profile photo</h3>
            <p className="text-sm text-gray-500 mt-1">This image will be displayed on your profile</p>
            <Button 
              variant="outline" 
              className="mt-4 text-emerald-500 border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
            >
              <Camera className="size-4 mr-2" />
              Change Photo
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
           <Avatar className="size-24 border-4 border-white shadow-sm">
            <AvatarImage src="/images/avatar-placeholder.jpg" />
            <AvatarFallback className="bg-gray-200 text-2xl">JI</AvatarFallback>
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
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Full name</Label>
            <InputWithIcon icon={User} defaultValue="Joshua Inioluwa" />
          </div>
          <div className="space-y-2">
            <Label>Email address</Label>
            <InputWithIcon icon={Mail} defaultValue="joshuainioluwa@ui.com" />
          </div>
          
          <div className="space-y-2">
            <Label>Which country do you live in?</Label>
            <CountrySelect placeholder="Select Country" />
          </div>
          
          <div className="space-y-2">
            <Label>Years of professional experience</Label>
            <Input defaultValue="5 years" />
          </div>

          <div className="space-y-2">
            <Label>Your Title</Label>
            <Input defaultValue="Frontend Developer" />
          </div>

          <div className="space-y-2">
            <Label>Which tools do you have experience in?</Label>
            <div className="min-h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs flex flex-wrap gap-2 items-center">
              {tools.map(tool => (
                <Badge key={tool} variant="secondary" className="gap-1 bg-blue-50 text-blue-700 hover:bg-blue-100">
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  {tool}
                  <X className="size-3 cursor-pointer ml-1" />
                </Badge>
              ))}
              <input className="outline-none bg-transparent flex-1 min-w-[100px]" placeholder="Type to add..." />
            </div>
          </div>

          <div className="space-y-2">
             <Label>Desired Salary</Label>
             <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input className="pl-7" defaultValue="500" />
             </div>
          </div>

          <div className="space-y-2">
             <Label>How many hours a week?</Label>
             <Input defaultValue="50 hours" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Your bio</Label>
          <textarea 
            className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue="Frontend developer with 5 years turning designs into pixel-perfect, responsive web apps. Passionate about clean code, performance, and great user experiences. Currently building with React, Next.js, and TypeScript. Always open to exciting new challenges."
          />
        </div>
      </FormSection>

      {/* --- Social Profiles Section --- */}
      <FormSection 
        title="Social Profiles" 
        description="Where can people find you online?"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <Label>Website URL</Label>
            <InputWithIcon icon={Globe} placeholder="https://www.yourwebsite.com" />
          </div>
          <div className="space-y-2">
            <Label>LinkedIn URL</Label>
            <InputWithIcon icon={Linkedin} placeholder="https://www.linkedin.com/in/..." />
          </div>
          <div className="space-y-2">
            <Label>GitHub URL</Label>
            <InputWithIcon icon={Github} placeholder="https://github.com/..." />
          </div>
          <div className="space-y-2">
            <Label>Twitter URL</Label>
            <InputWithIcon icon={Twitter} placeholder="https://twitter.com/..." />
          </div>
           <div className="space-y-2">
            <Label>Behance URL</Label>
            <InputWithIcon icon={Briefcase} placeholder="https://www.behance.net/..." />
          </div>
        </div>
      </FormSection>

      {/* --- Work Experience Section --- */}
      <FormSection 
        title="Your work experience" 
        description="Let employers know where you've previously worked"
      >
        {/* Experience Item 1 */}
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
                    <InputWithIcon icon={HelpCircle} placeholder="e.g. Figma" />
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
                    <InputWithIcon icon={HelpCircle} placeholder="e.g. University of Lagos" />
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
      >
        <div className="flex flex-wrap gap-2 mb-4">
            {skills.map(skill => (
                <Badge key={skill} variant="outline" className="px-3 py-1.5 text-sm gap-2 bg-white hover:bg-gray-50 font-normal text-gray-700 border-gray-200 shadow-sm">
                    {/* Placeholder for tech logos, using initials or generic icon if needed */}
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