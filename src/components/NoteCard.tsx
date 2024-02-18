import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { formatDistanceToNow } from 'date-fns';
import { Button } from './ui/button';

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog>
      <DialogTrigger className="rounded-md text-left dark:bg-slate-800 flex flex-col p-5 gap-3 overflow-hidden relative outline-none transition-all duration-200 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-950 dark:text-slate-300">
          {formatDistanceToNow(note.date, { addSuffix: true })}
        </span>
        <p className="text-sm leading-6 text-slate-800 dark:text-slate-400">
          {note.content}
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-black/0 dark:from-black/60 dark:to-black/0 pointer-events-none" />
      </DialogTrigger>

      <DialogContent className="w-4/5 h-[60vh] lg:w-full p-0 bg-slate-800 rounded-md flex flex-col overflow-hidden outline-none">
        <DialogHeader className="pt-[14px] px-5">
          <DialogTitle>
            <span className="text-sm font-medium text-slate-950 dark:text-slate-300">
              {formatDistanceToNow(note.date, { addSuffix: true })}
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-1 flex-col gap-3 px-5">
          <p className="text-sm leading-6 text-slate-800 dark:text-slate-400">
            {note.content}
          </p>
        </div>

        <DialogFooter>
          <Button
            type="button"
            className="w-full h-[5vh] rounded-none bg-rose-800 text-emerald-50 text-center text-sm font-semibold outline-none transition-all duration-300 hover:bg-rose-900 focus-visible:ring-0 focus-visible:bg-rose-900 group"
          >
            Delete this note?
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
