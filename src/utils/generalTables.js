import ManCity from '../assets/logos/bavaria.webp';
import Arsenal from '../assets/logos/arsenal.webp';
import ManUni from '../assets/logos/man-uni.webp';
import NewCastle from '../assets/logos/newcastle-uni.webp';
import Liverpool from '../assets/logos/liverpool.webp';
import Albion from '../assets/logos/albion.webp';
import AstonVilla from '../assets/logos/aston-villa.webp';
import Tottenham from '../assets/logos/tottenham.webp';
import Brentford from '../assets/logos/brentford.webp';
import Ffc from '../assets/logos/ffc.webp';
import CrystalPalace from '../assets/logos/crystal-palace.webp';
import Chelsea from '../assets/logos/chensea.webp';

export const generalTables = {
  A: [
    {
      id: '1',
      name: 'Бавария',
      logo: ManCity,
      games: 6,
      wins: 4,
      draws: 1,
      loses: 1,
      scored: 16,
      conceded: 4,
      points: 13,
      form: ['W', 'W', 'W', 'D', 'L'],
      group: 'A'
    },
    {
      id: '2',
      name: 'Копенгаген',
      logo: Arsenal,
      games: 6,
      wins: 2,
      draws: 3,
      loses: 1,
      scored: 8,
      conceded: 10,
      points: 9,
      form: ['W', 'W', 'L', 'L', 'W'],
      group: 'A'
    },
    {
      id: '3',
      name: 'Галатасарай',
      logo: ManUni,
      games: 6,
      wins: 2,
      draws: 2,
      loses: 2,
      scored: 6,
      conceded: 11,
      points: 8,
      form: ['L', 'W', 'W', 'W', 'W'],
      group: 'A'
    },
    {
      id: '4',
      name: 'Манчестер Юнайтед',
      logo: NewCastle,
      games: 6,
      wins: 0,
      draws: 2,
      loses: 4,
      scored: 7,
      conceded: 12,
      points: 2,
      form: ['L', 'D', 'W', 'D', 'D'],
      group: 'A'
    }
  ],
  B: [
    {
      id: '1',
      name: 'Арсенал',
      logo: Liverpool,
      games: 6,
      wins: 4,
      draws: 1,
      loses: 1,
      scored: 16,
      conceded: 4,
      points: 13,
      form: ['W', 'W', 'W', 'D', 'D'],
      group: 'B'
    },
    {
      id: '2',
      name: 'ПСВ Эйндховен',
      logo: Albion,
      games: 6,
      wins: 2,
      draws: 3,
      loses: 1,
      scored: 8,
      conceded: 10,
      points: 9,
      form: ['W', 'L', 'W', 'D', 'L'],
      group: 'B'
    },
    {
      id: '3',
      name: 'Ланс',
      logo: AstonVilla,
      games: 6,
      wins: 2,
      draws: 2,
      loses: 2,
      scored: 6,
      conceded: 11,
      points: 8,
      form: ['L', 'L', 'W', 'D', 'W'],
      group: 'B'
    },
    {
      id: '4',
      name: 'Севилья',
      logo: Tottenham,
      games: 6,
      wins: 0,
      draws: 2,
      loses: 4,
      scored: 7,
      conceded: 12,
      points: 2,
      form: ['L', 'W', 'L', 'L', 'W'],
      group: 'B'
    }
  ],
  C: [
    {
      id: '1',
      name: 'Реал Мадрид',
      logo: Brentford,
      games: 6,
      wins: 6,
      draws: 0,
      loses: 0,
      scored: 16,
      conceded: 7,
      points: 18,
      form: ['W', 'L', 'W', 'W', 'W'],
      group: 'C'
    },
    {
      id: '2',
      name: 'Наполи',
      logo: Ffc,
      games: 6,
      wins: 3,
      draws: 1,
      loses: 2,
      scored: 10,
      conceded: 9,
      points: 10,
      form: ['L', 'W', 'W', 'D', 'L'],
      group: 'C'
    },
    {
      id: '3',
      name: 'Брага',
      logo: CrystalPalace,
      games: 6,
      wins: 2,
      draws: 2,
      loses: 2,
      scored: 6,
      conceded: 11,
      points: 8,
      form: ['W', 'L', 'W', 'D', 'D'],
      group: 'C'
    },
    {
      id: '4',
      name: 'Унион Берлин',
      logo: Chelsea,
      games: 6,
      wins: 0,
      draws: 2,
      loses: 4,
      scored: 6,
      conceded: 10,
      points: 2,
      form: ['W', 'D', 'L', 'L', 'D'],
      group: 'C'
    }
  ]
};
