
export interface AccountResponse {
  user: {
    id: string;
    email: string;
    username: string;
    badge_id: string;
    is_active: boolean;
    created: Date;
    updated: Date;
  };
  access: string;
  refresh: string;
}