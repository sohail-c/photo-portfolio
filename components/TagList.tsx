export default function TagList({ tags, className = "" }: { tags: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li key={tag} className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
          {tag}
        </li>
      ))}
    </ul>
  );
}
