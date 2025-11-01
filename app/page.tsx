import { MainMenu } from './MainMenu';
import { Header } from './Header';

export default function App() {
  return (
    <div className='bg-zinc-700 flex w-screen h-screen justify-center items-center'>
      <div className='lg:w-[75vw] lg:h-[75vh] w-[90vw] h-[90vh] flex flex-col justify-between'>
        <Header />
        <MainMenu />
      </div>
    </div>
  );
}
