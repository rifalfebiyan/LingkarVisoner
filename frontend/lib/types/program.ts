export type ProgramStatus = 'draft' | 'active' | 'completed' | 'archived';

export type ProgramCategory =
  | 'Leadership'
  | 'Entrepreneurship'
  | 'Public Policy'
  | 'Digital'
  | 'Mentoring'
  | 'Webinar'
  | 'Workshop';

export interface Program {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string | null;
  start_date: string | null;
  status: ProgramStatus;
  location: string | null;
  time_range: string | null;
  max_participants: number;
  current_participants: number;
  created_at: string;
  updated_at: string;
}

export interface ProgramFormData {
  title: string;
  description: string;
  category: string;
  image_url: string;
  start_date: string;
  status: ProgramStatus;
  location: string;
  time_range: string;
  max_participants: number;
}
