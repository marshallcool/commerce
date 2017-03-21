export class Product {
    id: number;
    title_en: string;
    prodId: {
        id: number;
        count: number;
    };
    desc_end: string;
    dscr_en: string;
    links: string;
    dt: Date;
    num: number;
    price: number;
    offrs: number;
    count: number = 0;
}