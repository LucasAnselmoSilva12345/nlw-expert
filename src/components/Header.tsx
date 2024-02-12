import logoNLWExpertNotes from '../assets/logo-nlw-expert.svg';
import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="w-full mx-auto p-6 xl:px-0 xl:max-w-7xl flex items-center justify-between">
      <img src={logoNLWExpertNotes} alt="Nlw logo" />
      <ModeToggle />
    </header>
  );
}
