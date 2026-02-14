import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { RoseDay } from "./components/RoseDay";
import { ProposeDay } from "./components/ProposeDay";
import { ChocolateDay } from "./components/ChocolateDay";
import { TeddyDay } from "./components/TeddyDay";
import { PromiseDay } from "./components/PromiseDay";
import { HugDay } from "./components/HugDay";
import { KissDay } from "./components/KissDay";
import { ValentineDay } from "./components/ValentineDay";
import { AcceptedProposal } from "./components/AcceptedProposal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "rose-day", Component: RoseDay },
      { path: "propose-day", Component: ProposeDay },
      { path: "accepted-proposal", Component: AcceptedProposal },
      { path: "chocolate-day", Component: ChocolateDay },
      { path: "teddy-day", Component: TeddyDay },
      { path: "promise-day", Component: PromiseDay },
      { path: "hug-day", Component: HugDay },
      { path: "kiss-day", Component: KissDay },
      { path: "valentine-day", Component: ValentineDay },
    ],
  },
]);
