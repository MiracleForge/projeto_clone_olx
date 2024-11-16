import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import housing_category from '../../../../../public/assets/images/category/categoria-imoveis.svg';

const CategoryCards = () => {
  return (
    <div  className='border-2 w-1/12 h-auto rounded-md category-Card'>
        <Link href={'#'} className='p-1 flex-shrink-0'>
            <Image
                src={housing_category}
                className='mx-auto'
                alt='Categoria de anúncios Imóveis'
                width={64}
                height={64}>
            </Image>
        </Link>
    </div>
  )
}

export default CategoryCards
