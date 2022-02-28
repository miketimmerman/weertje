import { FC } from "react";
import { Link } from "remix";

export const BackToHome: FC = () => (
  <Link to={"/"} className=" text-slate-400 underline">
    Terug naar het startscherm
  </Link>
);
