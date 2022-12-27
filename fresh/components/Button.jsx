export function Button({href, children}) {
  return (
  <a class="btn" href={href}>
    {children}
  </a>
  );
}