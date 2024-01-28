import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <div className="flex-1 container">
      <TopNav />
      <div className="flex-1">{children}</div>
      <BottomNav />
    </div>
  );
}
