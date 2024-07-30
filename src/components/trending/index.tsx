import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CardHorizontalFood } from './food';

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function TrendingFood() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch('http://10.24.10.190:3000/foods');
      const data = await response.json();
      setFoods(data);
    }
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      horizontal={true}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
