import React, { useEffect, useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { RootStackParamList } from '../../types/types';
import { Button, Input } from 'react-native-elements';
import { Child } from '../components/Child';

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

export const HelloScreen: React.FC<Props> = ({ navigation }) => {
  const tw = useTailwind();
  const [text, setText] = useState('');
  const [printText, setPrintText] = useState('');

  useEffect(() => {
    console.log('mounted Hello');
    return () => {
      console.log('un-mounted Hello');
    };
  }, []);

  const printMsg = useCallback(() => {
    console.log(`Print: ${printText}`);
  }, [printText]);

  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <Text>Hello</Text>
      <View style={tw('my-3')}>
        <Button
          title="to ReduxTK"
          onPress={() => navigation.navigate('ReduxTK')}
        />
      </View>
      <Input
        placeholder="type print text"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={text}
        onChangeText={(txt) => setText(txt)}
        autoCompleteType
      />
      <Text>{text}</Text>
      <Input
        placeholder="type print text"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={printText}
        onChangeText={(txt) => setPrintText(txt)}
        autoCompleteType
      />
      <Text>{printText}</Text>
      <Child printMsg={printMsg} />
    </View>
  );
};
