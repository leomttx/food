import { Text, View, ScrollView } from 'react-native';
import Header from '../components/header';

import Constants from 'expo-constants';
const AlturaDaBarraDeStatus = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="w-full px-4"
        style={{ marginTop: AlturaDaBarraDeStatus + 8 }}
      >
        <Header />
      </View>
    </ScrollView>
  );
}
