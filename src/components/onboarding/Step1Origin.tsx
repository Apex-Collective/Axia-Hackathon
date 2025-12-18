import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import CountrySelect from "@/components/CountrySelect";

interface Step1Props {
  data: {
    fullName: string;
    email: string;
    country: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
}

export function Step1Origin({ data, onUpdate, onNext }: Step1Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!data.fullName) {
      toast.error("Please enter your full name");
      return;
    }
    if (!data.email) {
      toast.error("Please enter your email address");
      return;
    }
    if (!data.country) {
      toast.error("Please select your country");
      return;
    }

    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fullName">Full name</FieldLabel>
          <Input 
            id="fullName"
            placeholder="Scott Owens"
            value={data.fullName}
            onChange={(e) => onUpdate({ fullName: e.target.value })}
          />
        </Field>
        
        <Field>
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <Input 
            id="email" 
            type="email"
            placeholder="scottowens@gmail.com"
            value={data.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
          />
        </Field>

        <Field>
          <FieldLabel>Which country do you live in?</FieldLabel>
          <CountrySelect
            className="w-full"
            placeholder="Eg. Nigeria, South Africa, Ghana, etc"
            onChange={(val) => onUpdate({ country: val })}
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