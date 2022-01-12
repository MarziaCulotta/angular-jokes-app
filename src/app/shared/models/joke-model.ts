export interface Flags {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}

export interface IJokes {
  error?: boolean;
  category?: string;
  type?: string;
  setup: string;
  delivery: string;
  flags?: Flags;
  id?: number;
  safe?: boolean;
  lang?: string;
}


