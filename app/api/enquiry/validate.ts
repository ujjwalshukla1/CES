export type EnquiryPayload = {
  service?: string;
  location?: string;
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  tests?: string;
};

export type ValidationError = {
  field: string;
  message: string;
};

export function validateEnquiry(data: EnquiryPayload): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name?.trim()) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (!data.email?.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: "email", message: "Invalid email format" });
  }

  if (!data.phone?.trim()) {
    errors.push({ field: "phone", message: "Phone is required" });
  }

  if (!data.service?.trim()) {
    errors.push({ field: "service", message: "Service is required" });
  }

  if (!data.location?.trim()) {
    errors.push({ field: "location", message: "Location is required" });
  }

  return errors;
}
