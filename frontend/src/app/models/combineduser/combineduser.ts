import { Personalinfo } from "../personalinfo/personalinfo";

export class Combineduser {
    userId!: number;
    firstName!: string;
    lastName!: string;
    age!: number;
    gender!: string;
    educationCareer!: {
      educationLevel: string;
      educationField: string;
    };
    familyInfo!: {
      familyStatus: string;
      familyType: string;
      fatherName: string;
    };
    personalInfo!: Personalinfo;
}


