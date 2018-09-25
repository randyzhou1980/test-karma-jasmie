export enum Gender { Male, Female };

export interface PersonalInfo {
    name: string;
    gender: Gender;
    age: number;
    totalBelonging: number;

    belonging: Belonging[];
}

export interface Belonging {
    name: string;
    typeName: string;
}

export interface PetSummary {
    name: string;
    type: string;
    ownerName: string;
    ownerGender: string;
    ownerAge: number;
}