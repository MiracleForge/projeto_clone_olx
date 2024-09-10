export interface ProductCategory {
    id: number;
    name: string;
}

export interface LinksNavbar {
    id: number;
    link: string;
    hasOptions?: boolean;
}

export interface State {
    acronym: string;
    name: string;
    code: number
  }
  
interface UserLocation {
    city: string;
    state: string;
    postcode: string;
}

export  interface GeoLocationData {
    results: {
        userLocation: UserLocation;
    }[];
}

// Dados de exemplo
export const productCategories: ProductCategory[] = [
    { id: 1, name: 'Eletrônicos' },
    { id: 2, name: 'Padarias' },

];

export const linksNavbar: LinksNavbar[] = [
    { id: 1, link: 'Categorias', hasOptions: true },
    { id: 2, link: 'Meus Anúncios ' },
    { id: 3, link: 'Chat' },
    { id: 4, link: 'Notificações' },
    { id: 5, link: 'Login' },
];

