import { Text, View, ScrollView } from 'react-native';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Search } from '../components/search';
import Constants from 'expo-constants';
import { Section } from '../components/section';
import { TrendingFood } from '../components/trending';
import { Restaurants } from '../components/restaurants';

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

      <Section
        name="Comidas em Alta"
        label="Ver mais"
        size="text-2xl"
        action={() => console.log('Clicou em Ver tudo')}
      />
      <TrendingFood />
      <Section
        name="Famosos do DevFood"
        label="Ver todos"
        size="text-xl"
        action={() => console.log('Clicou no Famasos do DevFood')}
      />
      <Restaurants />
    </ScrollView>
  );
}
