function MainMenu() {
  return (
    <main className='flex rounded-lg border-gray-900 border-2 border-b-4 border-e-4 py-8 px-4 h-[80%] bg-sky-200 '>
      <div className='landscape:px-[10%] flex flex-col h-full w-full justify-between'>
        <div className="flex h-1/2 items-center">
          <button className='h-5/6 py-6 transition-all duration-100 active:border-b-2 active:border-e-2 hover:bg-gray-200 text-xl font-bold bg-gray-100 w-full border-2 border-e-4 border-b-4 border-gray-900 rounded-lg'>Create New Event</button>
        </div>
        <div className="flex h-1/2 items-center">
          <button className='h-5/6 py-6 transition-all duration-100 active:border-b-2 active:border-e-2 hover:bg-gray-200 text-xl font-bold bg-gray-100 w-full border-2 border-e-4 border-b-4 border-gray-900 rounded-lg'>View My Events</button>
        </div>
      </div>
    </main>
  );
}

export { MainMenu };
