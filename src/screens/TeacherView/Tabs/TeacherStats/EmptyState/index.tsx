import {Button, HStack, Image, Text, useTheme, VStack} from 'native-base';
import React from 'react';
import {GraphEmptyState} from '../../../../../assets/images/globals';
import Icon from '../../../../../components/base/Icon';
import Routes from '../../../../../routes/paths';
import Navigation from '../../../../../services/navigation';

const EmptyStateComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <VStack alignSelf={'center'}>
      <Image
        alt={'Icon of empty state'}
        alignSelf={'center'}
        source={GraphEmptyState}
      />

      <Text
        mt={8}
        textAlign={'center'}
        fontSize={'HXS'}
        fontWeight={600}
        color={'gray.800'}>
        No data to show now
      </Text>
      <Text
        mt={2}
        textAlign={'center'}
        fontSize={'TMD'}
        fontWeight={400}
        color={'gray.600'}>
        Complete class observations and feedback sessions to show the statistics
      </Text>

      <Button
        onPress={() =>
          Navigation.navigate('WithCompetenceContext', {
            screen: Routes.classObservation.onboarding,
          })
        }
        mt={8}
        variant={'solid'}
        borderRadius={'8px'}
        color={'white'}
        background={'primary.200'}>
        <HStack alignItems={'center'} space={2}>
          <Icon name={'plus'} color={theme.colors.white} />
          <Text>New class observation</Text>
        </HStack>
      </Button>
    </VStack>
  );
};

export default EmptyStateComponent;