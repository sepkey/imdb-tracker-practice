type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchBox({ query, setQuery }: Props) {
  return (
    <nav className="flex max-w-5xl border m-auto justify-between items-center px-5">
      <input
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none  flex-1"
        type="text"
        placeholder="Enter movie name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </nav>
  );
}
