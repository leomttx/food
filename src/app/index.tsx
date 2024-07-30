import { Text, View, ScrollView } from 'react-native';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Search } from '../components/search';
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
        <Banner />
        <Search />
      </View>
    </ScrollView>
  );
}
