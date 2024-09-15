import { Montserrat, Rubik, Poppins, Inter_Tight, Inter, Roboto } from "next/font/google";


export const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
  });

  export  const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
  });

  export  const rubik = Rubik({
    weight: [  '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
  });

  export  const inter_tight = Inter_Tight({
    weight: [ '100', '200','300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
  });
  export  const inter = Inter({
    weight: [ '100', '200','300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
  });

  export  const roboto = Roboto({
    weight: [ '100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
  });