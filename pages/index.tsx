import { Button, Htag } from '../components';

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
    </div>
  );
}
