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
      toast.error("Full Name Required", {
        description: "Please enter your full name to continue."
      });
      return;
    }
    if (!data.email) {
      toast.error("Email Required", {
        description: "Please enter a valid email address."
      });
      return;
    }
    if (!data.country) {
      toast.error("Country Required", {
        description: "Please select your country of residence."
      });
      return;
    }

    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fullName">Full name</FieldLabel>
          <div className="relative">
            <Input
              id="fullName"
              placeholder="Scott Owens"
              value={data.fullName}
              onChange={(e) => onUpdate({ fullName: e.target.value })}
              className="pl-10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img
                src="/icons/auth_user_icon.svg"
                alt="user"
                className="size-5 opacity-50"
              />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                src="/icons/help_icon.svg"
                alt="user"
                className="size-5 opacity-50"
              />
            </div>
          </div>
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="scottowens@gmail.com"
              value={data.email}
              onChange={(e) => onUpdate({ email: e.target.value })}
              className="pl-10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img
                src="/icons/auth_mail_icon.svg"
                alt="mail"
                className="size-5 opacity-50"
              />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                src="/icons/help_icon.svg"
                alt="user"
                className="size-5 opacity-50"
              />
            </div>
          </div>
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
