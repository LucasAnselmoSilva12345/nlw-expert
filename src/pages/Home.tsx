import { NewNoteCard } from '../components/NewNoteCard';
import { NoteCard } from '../components/NoteCard';

export function Home() {
  return (
    <section className="mx-auto w-full p-6 xl:max-w-7xl xl:p-0 xl:my-6 space-y-6">
      <form className="w-full">
        <input
          type="text"
          placeholder="Search your notes"
          className="w-full bg-transparent text-3xl text-slate-700 dark:text-slate-300 font-semibold tracking-tight dark:font-medium outline-none placeholder:text-slate-700 dark:placeholder:text-slate-500 transition-all duration-200 focus-visible:ring-1 focus-visible:ring-slate-600"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />

        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </section>
  );
}
