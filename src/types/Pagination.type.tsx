export interface IPagination {
	itemsCount: number;
	itemsPerPage: number;
	currentPage: number;
	setCurrentPage: (number: number) => void;
	alwaysShown: boolean
}