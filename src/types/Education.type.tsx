export interface IQualification {
	Institution: string;
	Qualifications: string;
	Program: string;
	Average: string;
	StartDate: string;
	EndDate: string;
}

export interface IQualifications {
	IQualification: IQualification[]
}