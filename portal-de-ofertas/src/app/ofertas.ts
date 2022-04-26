export interface Ofertas {
    id:string;
    titulo:string;
    descricaoBreve:string;
    valor:number;
    categoria: {
        id: number,
        nome: string
    };
    detalhes: string[];
    destaques: string [];

}