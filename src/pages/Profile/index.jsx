import Navbar from '../../components/Navbar';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="ml-64 p-4">
      <Navbar />
      <h1 className="text-2xl">Profile</h1>
      {user ? (
        <p>Username: {user.username}</p>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
