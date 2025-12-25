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
    
    // 1. Trim input
    const cleanBio = data.bio?.trim() || "";

    // 2. Update parent state
    onUpdate({ bio: cleanBio });

    // 3. Validation
    if (!cleanBio) {
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
            className="flex min-h-37.5 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="I am a product designer at Apple who writes about design, I love my doggie (oreo) and enjoy collecting new NFTs during my free time!"
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