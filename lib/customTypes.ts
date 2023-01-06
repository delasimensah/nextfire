type AuthUser = {
  uid: string;
  email: string | null;
  photoUrl: string | null;
};

export type AuthUserOrNull = AuthUser | null;
