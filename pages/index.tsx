import { Button, Htag } from '../components';
import P from '../components/P/P';
import Tag from '../components/Tag/Tag';
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanUp() {
      console.log('Unmount');
    };
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
    </div>
  );
}
