export interface IExperience {
	Id?: number;
	CompanyName?: string;
	JobTitle?: string;
	JobDescription?: string;
	StartDate?: Date;
	EndDate?: string | Date;
}

export interface IExperiences {
	IExperience?: IExperience[];
}