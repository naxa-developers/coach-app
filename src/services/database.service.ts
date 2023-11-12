import {enablePromise, openDatabase} from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase(
    {name: 'coach-nepal', location: 'default'},
    () => console.log('Database connected!'),
    err => console.log('err! ', err),
  );
};
