'use client'
import React, { useEffect, useState } from 'react'
import ProprietyCards from '@/app/components/cards/categoryCards/ProprietyCards'
import { WrapperCardsProps, PcCardProps } from '@/app/components/cards/categoryCards/ProprietyCards'
type WrapperCardsUpdateProps = Partial<WrapperCardsProps>; // APENAS EXEMPLIFICANDO COMO FAZER PARA UMA INTERFACE DE UPDATE, SEM PRECISAR CRIAR NOVAMENTE OUTRA INTERFACE

// TODO TERMINAR O FECT , ADICIONAR HEADER CONTROLADORES ETC E REMOVER PARA UM ARQUIVO SEPARADO
type CardCategoryProps = 'houses' | 'pc';

type CardProps<T extends CardCategoryProps> = T extends 'houses' ? WrapperCardsProps : PcCardProps;

const getCardsByCategory = async <T extends CardCategoryProps>(CardCategory: T): Promise<CardProps<T>[]> => {
    try {
        const response = await fetch(`/api/${CardCategory}`, {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch ${CardCategory}`);
        };
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Erro ao carregar os dados', error);
        return [];
    } finally {
        console.log('finalizado');
    };
};

const CardsList = ({ data }: { data: WrapperCardsProps[] }): React.JSX.Element => {
    return (
        <>
            {data.map((house: WrapperCardsProps) => (
                <ProprietyCards
                key={house.id} {...house}
                />
            ))};
        </>
    );
};

export const WrapperCards = (): React.JSX.Element => {
    const [cardData, setCardData] = useState<WrapperCardsProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            setLoading(true);
            try {
                const data = await getCardsByCategory('houses');
                setCardData(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setLoading(false);
            };
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    };

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full bodyPadding">
            <CardsList data={cardData} />
        </section>
    );
}
