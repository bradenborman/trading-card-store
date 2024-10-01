export interface Player {
    player: string;
    points: number | null;
    bye: number;
    position: string;
    salary: string;
}

export interface Team {
    name: string;
    owner: string;
    players: Player[];
    total_players: number;
    total_salary: string;
    salary_cap: string;
    cap_room_available: string;
}

export interface TeamsData {
    teams: Team[];
}
