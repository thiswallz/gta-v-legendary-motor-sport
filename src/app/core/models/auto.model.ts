export class Auto {
  id: number;
  model: string;
  category: string;
  price: number;
  users: number;
  statistics: Statistic;
}

export class Statistic {
  speed: number;
  acceleration: number;
  braking: number;
  handling: number;
}
