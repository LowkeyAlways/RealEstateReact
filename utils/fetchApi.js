import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
    'X-RapidAPI-Key': 'd173842658msh3c1a3de3d5eedaep19b0b2jsn6a4c4549f4ce',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    });

    return data;
}