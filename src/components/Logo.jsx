import Link from "next/link";
import clsx from "clsx";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx(
          "text-3xl font-bold text-red-600 hover:text-red-300 duration-300",
          className
        )}
        {...props}
      >
        Money
      </h2>
    </Link>
  );
};

export default Logo;
