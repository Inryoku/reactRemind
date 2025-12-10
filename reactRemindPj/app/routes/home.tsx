import type { Route } from "./+types/home";
import { JobBoard } from "../components/job-board";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "すぐ働けるジョブリスト | React Remind" },
    {
      name: "description",
      content:
        "バイトる風の練習用ジョブリスト。駅チカやシフト柔軟など、気になる条件で探せます。",
    },
  ];
}

export default function Home() {
  return <JobBoard />;
}
