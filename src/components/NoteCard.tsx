export function NoteCard() {
  return (
    <button className="rounded-md text-left dark:bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none transition-all duration-200 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-950 dark:text-slate-300">
        há 2 dias
      </span>
      <p className="text-sm leading-6 text-slate-800 dark:text-slate-400">
        No mundo da educação, a qualidade dos materiais de estudo desempenha um
        papel crucial no sucesso acadêmico dos estudantes. A escolha cuidadosa e
        a utilização eficaz desses materiais podem significar a diferença entre
        simplesmente passar por um curso e realmente dominar o conteúdo. Neste
        texto, exploraremos estratégias para maximizar o potencial dos materiais
        de estudo, desde livros didáticos até recursos online.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-black/0 dark:from-black/60 dark:to-black/0 pointer-events-none" />
    </button>
  );
}
