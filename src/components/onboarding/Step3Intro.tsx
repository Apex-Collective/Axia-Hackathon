import { toast } from "sonner";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";

interface Step3Props {
  data: {
    bio: string;
  };
  onUpdate: (data: any) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export function Step3Intro({ data, onUpdate, onSubmit }: Step3Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!data.bio || data.bio.trim().length === 0) {
      toast.error("Bio Required", {
        description: "Please write a short bio to introduce yourself."
      });
      return;
    }

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-gray-600 mb-4">
        Everyone has a story, what's yours?
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel className="sr-only">Bio</FieldLabel>
          <textarea 
            className="flex min-h-[150px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Eg. Introduce yourself to mentees and let them know your experience in your field and how you can help!"
            value={data.bio}
            onChange={(e) => onUpdate({ bio: e.target.value })}
          />
        </Field>
      </FieldGroup>

      <div className="flex gap-3 mt-6">
        <button
          type="submit"
          className="w-full bg-brand-primary text-white font-medium py-2.5 rounded-lg hover:bg-brand-primary/90 transition-colors cursor-pointer"
        >
          Publish Profile
        </button>
      </div>
    </form>
  );
}