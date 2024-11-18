import { useMemo } from "react";

/**
 * Hook personalizado para formatar um valor numérico como uma moeda brasileira (BRL).
 *
 * Este hook utiliza o `useMemo` para memorizar a formatação da moeda, de forma que o valor formatado
 * só será recalculado quando o valor de `price` mudar. Se o valor de `price` não for fornecido ou for
 * inválido, o hook retorna `null`.
 *
 * @param {number} price - O valor numérico a ser formatado como moeda.
 * @returns {string | null} O valor formatado como moeda brasileira (BRL), ou `null` se o valor
 * `price` não for válido (undefined).
 *
 * @example
 * const formattedCurrency = useFormattedCurrency(1000);
 * console.log(formattedCurrency); // "R$ 1.000,00"
 *
 * @example
 * const formattedCurrency = useFormattedCurrency(undefined);
 * console.log(formattedCurrency); // null
 */

const useFormattedCurrency = (price: number): string | null => {
    const formattedCurrency = useMemo(() => {
        return price !== undefined ? price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : null;
    }, [price]);

    return formattedCurrency;
};

export default useFormattedCurrency;
