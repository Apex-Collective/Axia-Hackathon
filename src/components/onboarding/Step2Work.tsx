import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";

interface Step2Props {
  data: {
    jobTitle: string;
    skills: string;
    experience: string;
    tools: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step2Work({ data, onUpdate, onNext }: Step2Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!data.jobTitle) {
      toast.error("Job Title Required", {
        description: "Please enter your current job title."
      });
      return;
    }
    if (!data.skills) {
      toast.error("Skills Required", {
        description: "Please list your key professional skills."
      });
      return;
    }
    if (!data.experience) {
      toast.error("Experience Required", {
        description: "Please enter your years of professional experience."
      });
      return;
    }
    if (!data.tools) {
      toast.error("Tools Required", {
        description: "Please list the tools you are proficient in."
      });
      return;
    }
    
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="jobTitle">Your Title</FieldLabel>
          <Input 
            id="jobTitle"
            placeholder="Eg. Product Designer, Software Developer, etc"
            value={data.jobTitle}
            onChange={(e) => onUpdate({ jobTitle: e.target.value })}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="skills">Which skills do you have experience in?</FieldLabel>
          <Input 
            id="skills"
            placeholder="Eg. Collaboration, Critical-thinking, etc"
            value={data.skills}
            onChange={(e) => onUpdate({ skills: e.target.value })}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="experience">Years of professional experience</FieldLabel>
          <Input 
            id="experience"
            placeholder="Eg. 1, 2, 3, etc"
            value={data.experience}
            onChange={(e) => onUpdate({ experience: e.target.value })}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="tools">Which tools do you have experience in?</FieldLabel>
          <Input 
            id="tools"
            placeholder="Eg. Figma, etc"
            value={data.tools}
            onChange={(e) => onUpdate({ tools: e.target.value })}
          />
        </Field>
      </FieldGroup>

      <button
        type="submit"
        className="w-full bg-brand-primary text-white font-medium py-2.5 rounded-lg hover:bg-brand-primary/90 transition-colors mt-4 cursor-pointer"
      >
        Continue
      </button>
    </form>
  );
}