import { Button, Htag } from '../components';
import P from '../components/P/P';

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
      <P size="small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos
        ?
      </P>
      <P>Lorem ipsum dolor sit.</P>
      <P size="big">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur!
      </P>
    </div>
  );
}
