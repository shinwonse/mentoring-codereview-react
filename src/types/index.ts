export type Exhibition = {
  date: {
    ended: string;
    started: string;
  };
  id: number;
  imageUrl: string;
  place: string;
  price: number;
  title: string;
};

export type ExhibitionList = Exhibition[];
