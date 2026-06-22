import LinkTree from "./components/LinkTree";
import { users } from "./data/users";

export default function Home() {
  return <LinkTree profile={users.otmg} />;
}