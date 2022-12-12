import { Button, Htag } from '../components';
import P from '../components/P/P';
import Tag from '../components/Tag/Tag';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Htag tag="h2">Hello</Htag>
      <Htag tag="h3">Hello</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghoust" arrow="right">
        Button 2
      </Button>
      <Button appearance="primary" arrow="down">
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
