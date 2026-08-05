import axios from "axios";

const API_KEY = "56829621-3cae891e55e3954ecb90dc401";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page) {
 const response = await axios
    .get(BASE_URL, {
      params: {
        page: page,
        per_page: 15,
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
}