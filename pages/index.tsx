import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Htag tag="h2">Hello</Htag>
      <Htag tag="h3">Hello</Htag>
      <Button appearance="primary">Button</Button>
      <Button appearance="ghoust">Button 2</Button>
    </div>
  );
}
