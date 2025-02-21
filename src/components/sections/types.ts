// types.ts
export interface Company {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  // Changed from [number, number] to an object
  coordinates: { lat: number; lng: number };
  category: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}