import { View, Pressable, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; // Importando os ícones

export default function Header() {
  return (
    <View className=" w-full items-center justify-between flex flex-row">
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={24} color="black" />
      </Pressable>

      <View className="flex flex-col items-center justify-center">
        <Text className="text-center text-sm text-slate-800">Localização</Text>
        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="text-lg font-bold">Natal-RN</Text>
        </View>
      </View>
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Feather name="bell" size={24} color="black" />
      </Pressable>
    </View>
  );
}
