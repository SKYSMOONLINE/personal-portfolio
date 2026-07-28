export type CardNavLink = { label: string; ariaLabel: string; href?: string };
export type CardNavItem = { label: string; bgColor: string; textColor: string; links?: CardNavLink[] };

export type CardNavProps = {
  logo?: string;
  logoAlt?: string;
  brand?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CardNav(props: CardNavProps): React.ReactElement;
