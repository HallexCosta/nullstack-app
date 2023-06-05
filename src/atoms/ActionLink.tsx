import { NullstackClientContext } from "nullstack";

interface ActionLinkProps {
  href: string;
}

export function ActionLink(context: ActionLinkProps) {
  const { href, children } = context as NullstackClientContext<ActionLinkProps>;

  return (
    <a
      class="inline-block text-pink-500 mb-1"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
