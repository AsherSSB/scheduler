function MainMenu() {
  return (
    <main className="py-8 px-4 w-screen h-screen bg-sky-200">
      <div className="w-full h-[50vh] flex justify-between flex-col">
        <div className="text-center w-full py-6 border-2 border-gray-900 text-3xl font-bold text-neutral-900 bg-sky-300 rounded-lg">Meet Quick</div>
        <button className="transition-all duration-100 active:border-b-2 active:border-e-2 hover:bg-gray-200 text-lg py-6 font-bold bg-gray-100 w-full border-2 border-e-4 border-b-4 border-gray-900 rounded-lg">Create New Event</button>
        <button className="transition-all duration-100 active:border-b-2 active:border-e-2 hover:bg-gray-200 text-lg py-6 font-bold bg-gray-100 w-full border-2 border-e-4 border-b-4 border-gray-900 rounded-lg">View My Events</button>
      </div>
    </main>
  );
}

export { MainMenu };
