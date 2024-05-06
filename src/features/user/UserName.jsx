import { useSelector } from 'react-redux';

function UserName() {
  const userName = useSelector((state) => state.user.userName);

  if (!userName) return null;

  return (
    <div className="font hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default UserName;
