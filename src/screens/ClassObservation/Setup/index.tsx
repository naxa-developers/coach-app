import {
  Button,
  Input,
  ScrollView,
  Text,
  TextArea,
  VStack,
  Select,
  Box,
} from 'native-base';
import React, {useContext} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import Routes from '../../../routes/paths';
import Navigation from '../../../services/navigation';
import {isTablet as Tablet} from 'react-native-device-info';
import {UserContext} from '../../../providers/contexts/UserContext';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';

const defaultValues = {
  boys_count: '',
  girls_count: '',
  subject: '',
  lesson_time: '',
  objective: '',
};

const ObservationSetup: React.FC<any> = () => {
  const {control, handleSubmit} = useForm({defaultValues});
  const {teacher} = useContext(UserContext);
  const {t} = useTranslation();
  const isTablet = Tablet();

  const handleSubmitForm: SubmitHandler<
    typeof defaultValues
  > = async values => {
    Navigation.navigate(Routes.classObservation.form, {
      session: {...values, teacher_id: teacher?.id},
    });
  };

  return (
    <VStack
      flex={1}
      px={isTablet ? '64px' : 4}
      py={6}
      safeAreaBottom
      bg={'gray.0'}>
      <ScrollView flexGrow={0}>
        <Text fontSize={'HSM'} fontWeight={600} color={'gray.800'}>
          {t('classObservation.setup.title') || 'About the lesson'}
        </Text>
        <Text mt={2} fontSize={'TMD'} fontWeight={400} color={'gray.800'}>
          {t('classObservation.setup.subtitle') ||
            'Ask the teacher the following questions'}
        </Text>

        <VStack space={4} mt={6}>
          <VStack space={2}>
            <Text fontSize={'TMD'} fontWeight={400} color={'gray.800'}>
              {t('classObservation.setup.questions.$1.title') ||
                'How many students are boys?'}
            </Text>

            <Controller
              control={control}
              rules={{required: true}}
              name={'boys_count'}
              render={({field, fieldState: {error}}) => (
                <Input
                  {...field}
                  onChangeText={field.onChange}
                  isInvalid={!!error}
                  placeholder={
                    t('classObservation.setup.questions.$1.placeholder') || '15'
                  }
                  variant={'outline'}
                  keyboardType={'number-pad'}
                />
              )}
            />
          </VStack>

          <VStack space={2}>
            <Text fontSize={'TMD'} fontWeight={400} color={'gray.800'}>
              {t('classObservation.setup.questions.$2.title') ||
                'How many students are girls?'}
            </Text>

            <Controller
              control={control}
              rules={{required: true}}
              name={'girls_count'}
              render={({field, fieldState: {error}}) => (
                <Input
                  {...field}
                  onChangeText={field.onChange}
                  isInvalid={!!error}
                  placeholder={
                    t('classObservation.setup.questions.$2.placeholder') || '15'
                  }
                  variant={'outline'}
                  keyboardType={'number-pad'}
                />
              )}
            />
          </VStack>

          <VStack space={2}>
            <Text fontSize={'TMD'} fontWeight={400} color={'gray.800'}>
              {t('classObservation.setup.questions.$3.title') ||
                "What's the subject?"}
            </Text>

            <Controller
              control={control}
              rules={{required: true}}
              name={'subject'}
              render={({field, fieldState: {error}}) => (
                <Input
                  {...field}
                  onChangeText={field.onChange}
                  isInvalid={!!error}
                  variant={'outline'}
                  placeholder={
                    t('classObservation.setup.questions.$3.placeholder') ||
                    'Math'
                  }
                />
              )}
            />
          </VStack>

          <VStack space={2}>
            <Text fontSize={'TMD'} fontWeight={400} color={'gray.800'}>
              {t('classObservation.setup.questions.$4.title') ||
                'How long the lesson’s going to last?'}
            </Text>

            <Controller
              control={control}
              rules={{required: true}}
              name={'lesson_time'}
              render={({field, fieldState: {error}}) => (
                <Box
                  borderColor={!!error ? 'red' : 'gray.300'}
                  borderWidth={'1px'}
                  borderRadius={'12px'}>
                  <Picker
                    selectedValue={field.value}
                    placeholder={
                      t('classObservation.setup.questions.$4.placeholder') ||
                      '30 min'
                    }
                    onValueChange={itemValue => field.onChange(itemValue)}>
                    <Picker.Item label="10 Minuts" value="10" />
                    <Picker.Item label="20 Minuts" value="20" />
                    <Picker.Item label="30 Minuts" value="30" />
                    <Picker.Item label="40 Minuts" value="40" />
                    <Picker.Item label="50 Minuts" value="50" />
                    <Picker.Item label="60 Minuts" value="60" />
                  </Picker>
                </Box>
              )}
            />
          </VStack>

          <VStack space={2}>
            <Text fontSize={'TMD'} fontWeight={400} color={'gray.800'}>
              {t('classObservation.setup.questions.$5.title') ||
                "Teacher's description of the class"}
            </Text>

            <Controller
              control={control}
              rules={{required: true}}
              name={'objective'}
              render={({field, fieldState: {error}}) => (
                <TextArea
                  {...field}
                  onChangeText={field.onChange}
                  isInvalid={!!error}
                  autoCompleteType={'off'}
                  variant={'outline'}
                  placeholder={
                    t('classObservation.setup.questions.$5.placeholder') ||
                    "Teacher's description of the class"
                  }
                />
              )}
            />
          </VStack>
        </VStack>
        <Text my={2} fontSize={'TXS'} fontWeight={400} color={'gray.600'}>
          {t('classObservation.setup.description') ||
            'Ask the teacher the following questions'}
        </Text>
      </ScrollView>

      <Button
        marginTop={isTablet ? 6 : 'auto'}
        variant={'solid'}
        borderRadius={'8px'}
        color={'white'}
        background={'primary.200'}
        onPress={handleSubmit(handleSubmitForm)}>
        {t('classObservation.setup.button') || 'Next'}
      </Button>
    </VStack>
  );
};

export default ObservationSetup;
