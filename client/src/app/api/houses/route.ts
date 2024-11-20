// /app/api/houses/route.ts

interface Address {
    street: string;
    number: number;
    city: string;
    state: string;
    zipCode: string;
}

interface House {
    id: number;
    title: string;
    address: Address;
    bedrooms: number;
    bathrooms: number;
    garage: number;
    condominium: Boolean;
    price: number;
    badge:string;
    verified: boolean;
}

export async function GET(request: Request): Promise<Response> {
    const houses: House[] = [
        {
            id: 1,
            title: "Casa Moderna e Espaciosa",
            address: {
                street: "Rua das Flores",
                number: 123,
                city: "São Paulo",
                state: "SP",
                zipCode: "01234-567",
            },
            bedrooms: 4,
            bathrooms: 3,
            garage: 2,
            condominium: true,
            price: 750000.0,
            badge: "Black Friday",
            verified: true
        },
        {
            id: 2,
            title: "Casa Clássica com Jardim",
            address: {
                street: "Avenida das Palmeiras",
                number: 456,
                city: "Rio de Janeiro",
                state: "RJ",
                zipCode: "12345-678",
            },
            bedrooms: 3,
            bathrooms: 2,
            garage: 1,
            condominium: false,
            price: 550000.0,
            badge: "Destaque",
            verified: true
    },
        {
            id: 3,
            title: "Cobertura Luxuosa",
            address: {
                street: "Praça das Rosas",
                number: 789,
                city: "Belo Horizonte",
                state: "MG",
                zipCode: "23456-789",
            },
            bedrooms: 5,
            bathrooms: 4,
            garage: 3,
            condominium: true,
            price: 1200000.0,
            badge: "Black Friday",
            verified: true
        },
        {
            id: 4,
            title: "Casa Aconchegante na Praia",
            address: {
                street: "Rua do Mar",
                number: 101,
                city: "Florianópolis",
                state: "SC",
                zipCode: "34567-890",
            },
            bedrooms: 2,
            bathrooms: 2,
            garage: 1,
            condominium: false,
            price: 650000.0,
            badge: "Black Friday",
            verified: true
        },
    ];

    return new Response(JSON.stringify(houses), {
        headers: { "Content-Type": "application/json" },
    });
}
