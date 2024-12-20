import { ProfileProps } from "@/types/resume";
import React from "react";

interface ProfilePageProps {
  profile: ProfileProps;
  className: string;
}

const Profile: React.FC<ProfilePageProps> = ({ profile, className }) => {
  return (
    <div className={className}>
      <h3>Profile</h3>
      <p className="text-gray-600 leading-relaxed text-justify">
        {profile.summary}
      </p>
    </div>
  );
};

export default Profile;
