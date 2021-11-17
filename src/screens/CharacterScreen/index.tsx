import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import breakingBadApi from '../../api/BreakingBadApi';
import { CharactersInterface } from '../../interfaces/LoginInterfaces';
import CharactersCard from '../../components/CharactersCard';

const Component = () => {
const [characters, setCharacters] = useState<[CharactersInterface] | null>(null); 

        const getCharacters= async ()=>{
            const {data} = await breakingBadApi.get<[CharactersInterface]>('/characters');
            setCharacters(data);
        };

        /*const getCharacters=  ()=>{
        breakingBadApi
        .get('/characters')
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });*/

    useEffect(()=>{
        getCharacters();
    }, []);

    const renderCharacters = characters?.map((character, index)=>{
        return <CharactersCard key={`character-${index}`} character={character}/>;
    })
    return (
        <ScrollView>
            {renderCharacters}
        </ScrollView>
    );
};

export default Component;