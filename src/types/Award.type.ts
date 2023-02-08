export interface IAward {
	Title: string;
	Institution: string;
	Description: string;
	Icon: string;
}

export interface IAwards {
	IAward?: IAward[];
}
