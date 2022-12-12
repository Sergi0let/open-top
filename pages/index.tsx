import { Button, Htag } from '../components';
import P from '../components/P/P';
import Tag from '../components/Tag/Tag';
import { useEffect, useState } from 'react';
import Rating from '../components/Rating/Rating';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(2);
  const [rating2, setRating2] = useState<number>(1);
  const [rating3, setRating3] = useState<number>(3);

  useEffect(() => {
    console.log('Counter ' + counter);
  });

  return (
    <div>
      <Htag tag="h1">{counter ? counter : null}</Htag>
      <Htag tag="h2">Hello</Htag>
      <Htag tag="h3">Hello</Htag>
      <Button
        onClick={() => setCounter((x) => x + 1)}
        appearance="primary"
        arrow="right"
      >
        Button
      </Button>
      <Button
        onClick={() => setCounter((x) => x - 1)}
        appearance="ghoust"
        arrow="right"
      >
        Button 2
      </Button>
      <Button onClick={() => setCounter(0)} appearance="primary" arrow="down">
        Arrow
      </Button>
      <P size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos
        ?
      </P>
      <P>Lorem ipsum dolor sit.</P>
      <P size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur!
      </P>
      <Tag size="s" color="ghoust">
        but1
      </Tag>
      <Tag size="m" color="red">
        but2
      </Tag>
      <Tag color="green">but3</Tag>
      <Tag color="grey">but4</Tag>
      <Tag color="primary">but5</Tag>
      <Tag color="green" href="http//:youtube.com">
        link
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable />
      <Rating rating={rating2} setRating={setRating2} isEditable />
      <Rating rating={5} />
    </div>
  );
}
