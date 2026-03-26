export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  courseId?: string;
  topics?: string[];
  credentialId?: string;
  image?: string;
}
