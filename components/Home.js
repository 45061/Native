import { View, Text, Button, FlatList, Image } from "react-native";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  async function getCharacters() {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setCharacters(response.data.results);
    console.log("personaje", response);
  }

  return (
    <View>
      <Text>Este es el Home</Text>
      {!characters.length && (
        <Button title="Ver personajes" onPress={() => getCharacters()} />
      )}
      <View>
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            console.log("personaje", item);
            return (
              <View>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{ uri: item.image }}
                />
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
