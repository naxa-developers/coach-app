import React from 'react';
import {VStack} from 'native-base';
import {isTablet} from 'react-native-device-info';
import Header, {HeaderProps} from '../Header';

type Props = {
  children: React.ReactNode;
  noPadding?: boolean;
} & HeaderProps;

const Page: React.FC<Props> = ({children, noPadding, ...headerProps}) => {
  return (
    <>
      <Header {...headerProps} />

      <VStack
        w="full"
        flex={1}
        {...(!noPadding && {p: isTablet() ? '32px 64px' : '16px 24px'})}>
        {children}
      </VStack>
    </>
  );
};

export default Page;
