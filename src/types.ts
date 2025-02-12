export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'mains' | 'appetizers' | 'desserts';
}