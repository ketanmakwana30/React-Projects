import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";

const MainPage = ({ user }) => {
  return (
    <div className="p-10 min-h-screen flex gap-10 mx-10">
      <LeftContent />
      <RightContent user={user} />
    </div>
  );
};

export default MainPage;
