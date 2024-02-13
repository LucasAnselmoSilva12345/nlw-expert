import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from './ui/button';
import { ChangeEvent, useState } from 'react';

export function NewNoteCard() {
  const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true);

  function handleStartEditor() {
    setShouldShowOnBoarding(false);
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.value === '') {
      setShouldShowOnBoarding(true);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="rounded-md flex flex-col bg-slate-700 p-5 gap-3 text-left outline-none transition-all duration-200 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </DialogTrigger>

      <DialogContent className="w-4/5 h-[60vh] lg:w-full p-0 bg-slate-800 rounded-md flex flex-col overflow-hidden outline-none">
        <DialogHeader className="pt-[14px] px-5">
          <DialogTitle>
            <span className="text-sm font-medium text-slate-950 dark:text-slate-300">
              Add Note
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-1 flex-col gap-3 px-5">
          {shouldShowOnBoarding ? (
            <p className="text-sm leading-6 text-slate-800 dark:text-slate-400">
              Start{' '}
              <button className="font-medium text-lime-400 hover:underline">
                recording a note via audio
              </button>{' '}
              or if you prefer,{' '}
              <button
                onClick={handleStartEditor}
                className="font-medium text-lime-400 hover:underline"
              >
                use text
              </button>
            </p>
          ) : (
            <textarea
              autoFocus
              className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
              onChange={handleContentChange}
            />
          )}
        </div>

        <DialogFooter>
          <Button
            type="button"
            className="w-full h-[5vh] rounded-none bg-emerald-700 text-emerald-50 text-center text-sm font-semibold outline-none transition-all duration-300 hover:bg-emerald-800 focus-visible:ring-0 focus-visible:bg-emerald-800"
          >
            Save the note
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
