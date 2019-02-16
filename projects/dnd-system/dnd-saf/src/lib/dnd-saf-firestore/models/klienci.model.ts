export class Klienci {
    id: string;
    imie: string;
    nazwisko: string;
    telefon: string;
    data_urodzenia: string;
    notatki: string;
}

export interface NameInterface {
    name: string;
}

export interface IdNameInterface {
    id: string;
    name: string;
}

export interface IdNameValueInterface {
    id: string;
    name: string;
    value: string;
}

export class Uslugi {
    id: string;
    nazwa: string;
    czas: string;
    cena: string;
}
