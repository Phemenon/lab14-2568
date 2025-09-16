import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  total: number;
  email: string;
  pass: string;
  cfpass: string;
  haveCoupon: boolean;
  couponCode?: string;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  setPass: (v: string) => void;
  setCfpass: (v: string) => void;
  setHaveCoupon: (haveCoupon: boolean) => void;
  setCouponCode: (couponCode: string) => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCupon: () => void;
  reset: () => void;
}
export type { MarathonFormState }