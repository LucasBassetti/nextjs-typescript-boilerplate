import Artists from './components/Artists';
import Introduction from './components/Introduction';
import Main from './components/Main';
import Videos from './components/Videos';

export default function Home() {
  return (
    <>
      <Main />
      <Introduction />
      <Videos />
      <Artists />
    </>
  );
}
