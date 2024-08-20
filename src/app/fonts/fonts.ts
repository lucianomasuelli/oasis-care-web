import localFont from 'next/font/local'
import { Schibsted_Grotesk, } from "next/font/google";

export const ltInstitute = localFont({src: './LTInstitute-1.otf', weight: '400'})

export const fustat = localFont({src: './Fustat[wght].ttf', weight: '400', style: 'normal'})

export const grotesk = Schibsted_Grotesk({ subsets: ["latin"], weight: ['400','500','800'] });
