// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
	const team = teams.reduce((prevTeam, currentTeam) =>
		prevTeam.score > currentTeam.score ? prevTeam : currentTeam);

	return team.name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
	let result = '';

	for (const key in qsObj) {
		if (qsObj.hasOwnProperty(key)) {
			result += '&' + key + '=' + qsObj[key];
		}
	}

	result = result.replace('&', '?')

	return result;
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
	const queryStr = qs.replace('?', '');
	let result: QsObj = {};

	queryStr.split('&').forEach(queryParamString => {
		const queryItems = queryParamString.split('=');
		const key = queryItems[0] ?? '';
		const value = queryItems[1] ?? '';

		result[key] = value
	});

	return result;
};
