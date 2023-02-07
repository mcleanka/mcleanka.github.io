export interface IAward {
	Institution: string;
	Qualifications: string;
	Program: string;
	Average: string;
	StartDate: string;
	EndDate: string;
}

export interface IAwards {
	IAward: IAward[]
}