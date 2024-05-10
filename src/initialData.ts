interface Usage {
  date: string;
  count: number;
}

export interface UserProps {
  _id: number;
  api_key: string;
  username: string;
  usage: Usage[];
}

interface CountryProps {
  _id: number;
  country: string;
}

const users: UserProps[] = [];

const countries: CountryProps[] = [];

export { users, countries };
