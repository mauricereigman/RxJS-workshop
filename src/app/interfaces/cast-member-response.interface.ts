export interface CastMemberResponse {
    person: Person;
    character: Character;
    self: boolean;
    voice: boolean;
}

interface Character {
    id: number;
    url: string;
    name: string;
    image?: Image;
    _links: Links;
}

interface Person {
    id: number;
    url: string;
    name: string;
    country?: Country;
    birthday?: string;
    deathday?: any;
    gender?: string;
    image: Image;
    _links: Links;
}

interface Links {
    self: Self;
}

interface Self {
    href: string;
}

interface Image {
    medium: string;
    original: string;
}

interface Country {
    name: string;
    code: string;
    timezone: string;
}
