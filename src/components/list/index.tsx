import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { RestauranteItem } from './item/item';

export interface RestaurantProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantVerticalList() {
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
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item) => (
        <RestauranteItem item={item} key={item.id} />
      ))}
    </View>
  );
}
