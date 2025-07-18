import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    nationality: "France",
    position: "ST",
    stats: {
      overall: 91,
      pace: 97,
      shooting: 89,
      passing: 84,
      dribbling: 92,
      defending: 36,
      physical: 78
    }
  },
  {
    id: 2,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "ST",
    stats: {
      overall: 91,
      pace: 90,
      shooting: 93,
      passing: 65,
      dribbling: 80,
      defending: 45,
      physical: 88
    }
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "CM",
    stats: {
      overall: 91,
      pace: 74,
      shooting: 86,
      passing: 94,
      dribbling: 87,
      defending: 64,
      physical: 78
    }
  },
  {
    id: 4,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "England",
    position: "CM",
    stats: {
      overall: 88,
      pace: 82,
      shooting: 84,
      passing: 84,
      dribbling: 87,
      defending: 78,
      physical: 84
    }
  },
  {
    id: 5,
    name: "Vinícius Jr.",
    club: "Real Madrid",
    nationality: "Brazil",
    position: "LW",
    stats: {
      overall: 89,
      pace: 95,
      shooting: 82,
      passing: 78,
      dribbling: 92,
      defending: 32,
      physical: 66
    }
  },
  {
    id: 6,
    name: "Rodri",
    club: "Manchester City",
    nationality: "Spain",
    position: "CDM",
    stats: {
      overall: 89,
      pace: 68,
      shooting: 76,
      passing: 86,
      dribbling: 79,
      defending: 87,
      physical: 84
    }
  },
  {
    id: 7,
    name: "Harry Kane",
    club: "Bayern Munich",
    nationality: "England",
    position: "ST",
    stats: {
      overall: 90,
      pace: 70,
      shooting: 93,
      passing: 84,
      dribbling: 84,
      defending: 46,
      physical: 83
    }
  },
  {
    id: 8,
    name: "Joshua Kimmich",
    club: "Bayern Munich",
    nationality: "Germany",
    position: "CDM",
    stats: {
      overall: 88,
      pace: 72,
      shooting: 74,
      passing: 88,
      dribbling: 84,
      defending: 83,
      physical: 78
    }
  },
  {
    id: 9,
    name: "Luka Modrić",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "CM",
    stats: {
      overall: 87,
      pace: 68,
      shooting: 76,
      passing: 89,
      dribbling: 88,
      defending: 72,
      physical: 66
    }
  },
  {
    id: 10,
    name: "Antoine Griezmann",
    club: "Atlético Madrid",
    nationality: "France",
    position: "CF",
    stats: {
      overall: 88,
      pace: 80,
      shooting: 86,
      passing: 84,
      dribbling: 87,
      defending: 60,
      physical: 74
    }
  },
  {
    id: 11,
    name: "Bukayo Saka",
    club: "Arsenal",
    nationality: "England",
    position: "RW",
    stats: {
      overall: 86,
      pace: 86,
      shooting: 80,
      passing: 81,
      dribbling: 87,
      defending: 65,
      physical: 72
    }
  },
  {
    id: 12,
    name: "Martin Ødegaard",
    club: "Arsenal",
    nationality: "Norway",
    position: "CAM",
    stats: {
      overall: 87,
      pace: 78,
      shooting: 80,
      passing: 89,
      dribbling: 88,
      defending: 55,
      physical: 65
    }
  },
  {
    id: 13,
    name: "Rafael Leão",
    club: "AC Milan",
    nationality: "Portugal",
    position: "LW",
    stats: {
      overall: 86,
      pace: 93,
      shooting: 80,
      passing: 77,
      dribbling: 87,
      defending: 35,
      physical: 78
    }
  },
  {
    id: 14,
    name: "Lautaro Martínez",
    club: "Inter Milan",
    nationality: "Argentina",
    position: "ST",
    stats: {
      overall: 87,
      pace: 84,
      shooting: 86,
      passing: 75,
      dribbling: 85,
      defending: 50,
      physical: 83
    }
  },
  {
    id: 15,
    name: "André Onana",
    club: "Manchester United",
    nationality: "Cameroon",
    position: "GK",
    stats: {
      overall: 85,
      pace: 60,
      shooting: 45,
      passing: 77,
      dribbling: 68,
      defending: 30,
      physical: 80
    }
  },
  {
    id: 16,
    name: "Bruno Fernandes",
    club: "Manchester United",
    nationality: "Portugal",
    position: "CAM",
    stats: {
      overall: 86,
      pace: 75,
      shooting: 84,
      passing: 88,
      dribbling: 83,
      defending: 68,
      physical: 76
    }
  },
  {
    id: 17,
    name: "Nicolò Barella",
    club: "Inter Milan",
    nationality: "Italy",
    position: "CM",
    stats: {
      overall: 86,
      pace: 80,
      shooting: 76,
      passing: 84,
      dribbling: 84,
      defending: 78,
      physical: 77
    }
  },
  {
    id: 18,
    name: "Ousmane Dembélé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "RW",
    stats: {
      overall: 84,
      pace: 93,
      shooting: 78,
      passing: 79,
      dribbling: 89,
      defending: 36,
      physical: 66
    }
  },
  {
    id: 19,
    name: "Achraf Hakimi",
    club: "Paris Saint-Germain",
    nationality: "Morocco",
    position: "RB",
    stats: {
      overall: 85,
      pace: 95,
      shooting: 72,
      passing: 78,
      dribbling: 82,
      defending: 76,
      physical: 79
    }
  }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(player => player.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true
  }

  return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel):Promise<PlayerModel> => {
  const playerIndex = database.findIndex(player => player.id === id);

  if ( playerIndex !== -1) {
    database[playerIndex].stats = statistics;
  }

  return database[playerIndex];
}