export interface Aspiration {
  id: string;
  full_name: string;
  email: string;
  category: string;
  message: string;
  created_at: string;
}

export interface AspirationFormData {
  full_name: string;
  email: string;
  category: string;
  message: string;
}
