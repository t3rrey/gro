export type FoodItem = {
  id: number;
  name: string;
  brand?: string;
  category?: string;
  protein: number;
  carbs: number;
  fats: number;
};

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      client: {
        Row: {
          created_at: string | null;
          email: string | null;
          firstName: string | null;
          id: number;
          lastName: string | null;
        };
        Insert: {
          created_at?: string | null;
          email?: string | null;
          firstName?: string | null;
          id?: number;
          lastName?: string | null;
        };
        Update: {
          created_at?: string | null;
          email?: string | null;
          firstName?: string | null;
          id?: number;
          lastName?: string | null;
        };
      };
      food: {
        Row: {
          brand: string | null;
          carbs: number | null;
          category: string | null;
          created_at: string | null;
          fats: number | null;
          id: number;
          name: string | null;
          protein: number | null;
        };
        Insert: {
          brand?: string | null;
          carbs?: number | null;
          category?: string | null;
          created_at?: string | null;
          fats?: number | null;
          id?: number;
          name?: string | null;
          protein?: number | null;
        };
        Update: {
          brand?: string | null;
          carbs?: number | null;
          category?: string | null;
          created_at?: string | null;
          fats?: number | null;
          id?: number;
          name?: string | null;
          protein?: number | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
