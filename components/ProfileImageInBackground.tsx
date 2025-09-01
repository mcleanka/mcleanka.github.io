import Image from 'next/image';
import React, { Fragment, FunctionComponent } from 'react';

type ProfileProps = {
    login: string;
    name: string;
    avatar_url: string;
};

const ProfileImageInBackground: FunctionComponent<ProfileProps> = ({ ...profile }) => {
    if (!profile?.login) {
        return (
            <Fragment>
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-5 left-0 w-32 h-32 opacity-5 rounded-full">
                        <div className="w-24 h-24 mx-auto relative">
                            <div className="absolute inset-2 rounded-full bg-gray-400 flex items-center justify-center">
                                <span className="text-xs text-gray-600">!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <div className="fixed inset-0 pointer-events-none z-10">
                <div className="absolute top-5 left-0 w-32 h-32 opacity-55 rounded-full">
                    <div className="w-24 h-24 mx-auto relative">
                        <Image
                            src={profile.avatar_url || 'https://github.com/github.png'}
                            alt={profile.name || profile.login || 'McLean Kasambala'}
                            width={96}
                            height={96}
                            className="absolute inset-2 rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProfileImageInBackground;