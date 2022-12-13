import { useState } from 'react';
import Rating from '../components/Rating/Rating';
import { withLayout } from '../Layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interfaces';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(2);
  const [rating2, setRating2] = useState<number>(1);

  return (
    <div>
      <Rating rating={rating} setRating={setRating} isEditable />
      <Rating rating={rating2} setRating={setRating2} isEditable />
      <Rating rating={5} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.get<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/sidebar-data'
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
