export default interface Account {
  id: number;

  acc_names: string;
  bank_id: number;
  acc_num: string;

  balance: number;

  description: string | null;

  user_at: string;
  user_update: string;

  create_at: string;
  update_at: string;
  delete_at: string | null;

  status: "on" | "off";
}