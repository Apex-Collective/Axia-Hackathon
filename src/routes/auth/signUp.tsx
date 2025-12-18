import { Field, FieldLegend, FieldDescription, FieldLabel, FieldGroup, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import CountrySelect from "@/components/CountrySelect";

export default function SignUp() {


  return (
    <form className="w-full bg-sky-500">
      <FieldSet>
      <FieldLabel>STEP 1 of 3</FieldLabel>
      <FieldLegend>Hello! What's your origin story?</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="full_name">Full name</FieldLabel>
            <Input type="text" id="full_Name" />
          </Field>
          <Field>
            <FieldLabel htmlFor="email_address">Email address</FieldLabel>
            <Input type="text" id="email_address" />
          </Field>
          <Field>
            <FieldLabel htmlFor="country">
              Which country do you live in?
            </FieldLabel>
            <CountrySelect
        className="w-[240px]"
        // The value argument is the country ISO code (e.g., "US")
        onChange={(value: string) => {
          console.log("Selected Country Code:", value)
        }}
        placeholder="Select a Country"
      />
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
