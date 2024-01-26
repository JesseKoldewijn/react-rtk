import { type LinkProps, Link as RrdLink } from "react-router-dom";
import { type PathName } from "~/types/fileRoutesType";
import { cn } from "~/utils/cn";

type _LinkProps = Omit<LinkProps, "to"> &
  Omit<React.RefAttributes<HTMLAnchorElement>, "href"> & {
    href: PathName;
    children?: React.ReactNode;
  };

const linkStyles = cn(
  "decoration-none rounded border px-3 py-2 hover:bg-neutral-200 hover:text-neutral-950",
);

export const Link = ({ href, className, children, ...rest }: _LinkProps) => {
  return (
    <RrdLink
      to={href}
      className={cn(className, linkStyles)}
      {...rest}
      unstable_viewTransition
    >
      {children}
    </RrdLink>
  );
};

type _ExternalLinkProps = Omit<LinkProps, "to"> &
  Omit<React.RefAttributes<HTMLAnchorElement>, "href"> & {
    href: string | URL;
    children?: React.ReactNode;
  };

export const ExternalLink = ({
  href,
  className,
  children,
  ...rest
}: _ExternalLinkProps) => {
  const hrefParse = (href: string | URL) => {
    if (typeof href === "string") {
      return href;
    }
    return href.href;
  };
  const actualHref = hrefParse(href);

  return (
    <RrdLink
      to={hrefParse(actualHref)}
      className={cn(className, linkStyles)}
      {...rest}
      unstable_viewTransition={actualHref.startsWith("/")}
    >
      {children}
    </RrdLink>
  );
};
