import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { Button, Input } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const FlexBoxScreen: React.FC<Props> = ({ navigation }) => {
  const tw = useTailwind();

  useEffect(() => {
    // clean function
    return () => {};
  }, []);

  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <Text>FlexBoxScreen</Text>
      <View style={tw('my-3')}>
        <Button title="to Hello" onPress={() => navigation.navigate('Hello')} />
      </View>
    </View>
  );
};
