export interface NavbarI {
    img?:string;
    name?: string;
    url: string;
    active:boolean;
}

export interface CardsI {
    img?:string;
    name?:string;
    description?:string;
    humidity:number;
}

export interface PlantI {
    id: number,
    name: string,
    description?: string,
    humidity?: number,
    seuil: number,
    date?: string
}

export interface SensorI {
    id?: number,
    macAddress: string,
    humidity: number,
    plant?: string,
    name?: string,
    alert: number
}

export interface HistoricI {
    id: number,
    created_at: string,
    humidity: number,
    macAddress: string
}
