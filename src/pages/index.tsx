import React from 'react';
import { useRouter } from 'next/router';
import { HomeScreen } from '../screens/home';

const Page = () => <HomeScreen router={useRouter()} />;
export default Page;
