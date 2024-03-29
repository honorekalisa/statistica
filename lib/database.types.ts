export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      internet_subscribers: {
        Row: {
          id: string
          operator: string
          profile_picture: string | null
          subscribers: number | null
          year: number
        }
        Insert: {
          id?: string
          operator: string
          profile_picture?: string | null
          subscribers?: number | null
          year: number
        }
        Update: {
          id?: string
          operator?: string
          profile_picture?: string | null
          subscribers?: number | null
          year?: number
        }
        Relationships: []
      }
      registered_vehicles: {
        Row: {
          id: string
          value: number
          year: number
        }
        Insert: {
          id?: string
          value: number
          year: number
        }
        Update: {
          id?: string
          value?: number
          year?: number
        }
        Relationships: []
      }
      roads_classification: {
        Row: {
          class1_paved: number
          class1_unpaved: number
          id: string
          paved: number
          unpaved: number
          year: number
        }
        Insert: {
          class1_paved: number
          class1_unpaved: number
          id?: string
          paved: number
          unpaved: number
          year: number
        }
        Update: {
          class1_paved?: number
          class1_unpaved?: number
          id?: string
          paved?: number
          unpaved?: number
          year?: number
        }
        Relationships: []
      }
      school_gender_stats: {
        Row: {
          gender: string | null
          id: string
          percentage: number | null
          value: number | null
          year: string | null
        }
        Insert: {
          gender?: string | null
          id?: string
          percentage?: number | null
          value?: number | null
          year?: string | null
        }
        Update: {
          gender?: string | null
          id?: string
          percentage?: number | null
          value?: number | null
          year?: string | null
        }
        Relationships: []
      }
      schools: {
        Row: {
          id: string
          type: string
          value: number
          year: string
        }
        Insert: {
          id?: string
          type: string
          value: number
          year: string
        }
        Update: {
          id?: string
          type?: string
          value?: number
          year?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: number
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
