import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { Button } from 'react-native-elements';

type Props = {
  printMsg: () => void;
};

const ChildMemo: React.FC<Props> = ({ printMsg }) => {
  const tw = useTailwind();

  return (
    <View>
      <Text style={tw('my-3')}>Child</Text>
      <Button title="Print" onPress={printMsg} />
    </View>
  );
};

export const Child = memo(ChildMemo);
