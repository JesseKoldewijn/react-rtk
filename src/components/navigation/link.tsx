import { LinkProps, Link as RrdLink } from "react-router-dom";
import { PathName } from "~/types/fileRoutesType";
import { cn } from "~/utils/cn";

type _LinkProps = Omit<LinkProps, "to"> &
  Omit<React.RefAttributes<HTMLAnchorElement>, "href"> & {
    href: PathName;
    children?: React.ReactNode;
  };

export const Link = ({ href, className, children, ...rest }: _LinkProps) => {
  return (
    <RrdLink
      to={href}
      className={cn(className, "decoration-none rounded border px-3 py-2")}
      {...rest}
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

  return (
    <RrdLink
      to={hrefParse(href)}
      className={cn(className, "decoration-none rounded border px-3 py-2")}
      {...rest}
    >
      {children}
    </RrdLink>
  );
};
