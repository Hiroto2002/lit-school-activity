import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between pl-6 pr-[4.5rem]  bg-[#fff] items-center h-[4.5rem]">
      <Image src="/img/logo.png" width={185.68} height={36} alt="logo" />
      <div className="flex flex-row gap-14">
        <Link href={"#description"}>メンター総選挙とは</Link>
        <Link href={"#rank"}>ランキング</Link>
        <Link href={"#vote"}>投票</Link>
      </div>
    </header>
  );
};
