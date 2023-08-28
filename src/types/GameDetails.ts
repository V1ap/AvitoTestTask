type TGameDetails = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  description: string;
  minimum_system_requirements: {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
  };
  screenshots: { id: number; image: string }[];
  status: string;
};
export default TGameDetails;
