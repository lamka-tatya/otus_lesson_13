// Задание 1
export type OriginalTeam = {
	size: number;
	name: string;
	league: string;
};

export type ExpectedTeam = {
	name: string;
	league: string;
	roster: number;
};

export const originalTeamToExpectedTeam = (
	originalTeam: OriginalTeam
): ExpectedTeam => {
	const { size, ...newTeam } = originalTeam;
	const result: ExpectedTeam = { ...newTeam, name: "New York Badgers", roster: 25 };

	return result;
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (originalArray: SomeArray): SomeArray => {
	const [_first, _second, ...newArray] = originalArray;
	const result:SomeArray = ["two", ...newArray, 5];

	return result;
};

// Задание 3

export type Team = {
	name: string;
	captain: {
		name: string;
		age: number;
	};
};

export const deepOriginalTeamToExpectedTeam = (originalTeam: Team): Team => {
	const result: Team = {...originalTeam, captain: {...originalTeam.captain, age: 28}};

	return result;
}