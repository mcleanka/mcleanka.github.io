export interface IExperience {
	Id?: number;
	CompanyName: string;
	JobTitle: string;
	JobDescription: [];
	StartDate: String;
	EndDate: string;
}

export interface IExperiences {
	IExperience?: IExperience[];
}