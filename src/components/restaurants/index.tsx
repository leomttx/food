import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantsItem } from './horizontal';

export interface RestaurantProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch('http://10.24.10.190:3000/restaurants');
      const data = await response.json();
      setRestaurants(data);
    }
    getFoods();
  }, []);

  return (
    <FlatList
      data={restaurants}
      horizontal={true}
      renderItem={({ item }) => <RestaurantsItem item={item} />}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
