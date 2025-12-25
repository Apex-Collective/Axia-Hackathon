import { allCountries } from "country-region-data";
import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface CountrySelectProps {
  priorityOptions?: string[];
  whitelist?: string[];
  blacklist?: string[];
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function CountrySelect({
  priorityOptions = [],
  whitelist = [],
  blacklist = [],
  onChange = () => {},
  className,
  placeholder = "Select a Country",
}: CountrySelectProps) {
  const [, setValue] = useState("");
  const options = useMemo(() => {
    return allCountries
      .filter((country) => {
        const countryCode = country[1];
        if (whitelist.length > 0 && whitelist.includes(countryCode))
          return false;
        if (blacklist.length > 0 && blacklist.includes(countryCode))
          return false;
        return true;
      })
      .map((country) => ({
        value: country[1],
        label: country[0],
        priority: priorityOptions.includes(country[1]),
      }))
      .sort((a, b) => {
        if (a.priority && !b.priority) return -1;
        if (!a.priority && b.priority) return 1;
        return a.label.localeCompare(b.label);
      });
  }, [whitelist, blacklist, priorityOptions]);

  return (
    <Select
      onValueChange={(val) => {
        setValue(val);
        onChange(val);
      }}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="h-55 overflow-y-hidden z-9999">
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
