export interface Card {
  title: string;
  description: string;
  route: string;
  icon?: string;
}

export interface Operations {
  title: string,
  description: string,
  click: string,
  allowedTypes: string[]
}