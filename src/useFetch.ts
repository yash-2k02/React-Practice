import axios from "axios";

const clientId = "3c279673a3894eb3a9c0c02ef40bae92";
const clientSecret = "caceea16152746409a61d48c94a5cdc6";

let cachedToken = "";
let tokenExpiry = 0;
let pendingTokenPromise: Promise<string> | null = null;

const getToken = async (): Promise<string> => {
  const now = Date.now();

  if (cachedToken && now < tokenExpiry) return cachedToken;
  if (pendingTokenPromise) return await pendingTokenPromise;

  pendingTokenPromise = (async () => {
    const tokenUrl = "https://accounts.spotify.com/api/token";

    const response = await axios.post(
      tokenUrl,
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    cachedToken = response.data.access_token;
    tokenExpiry = now + response.data.expires_in * 1000 - 10000; // buffer
    return cachedToken;
  })();

  try {
    return await pendingTokenPromise;
  } finally {
    pendingTokenPromise = null;
  }
};

type FetchType = "albums" | "artists" | "categories";

interface FetchProps {
  type: FetchType;
  offset?: number;
  list?: string[];
}

const useFetch = async ({ type, offset = 0, list }: FetchProps) => {
  try {
    const token = await getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    if (type === "albums") {
      const response = await axios.get(
        `https://api.spotify.com/v1/browse/new-releases?limit=20&offset=${offset}`,
        { headers }
      );
      return response.data.albums.items;
    }

    if (type === "artists" && Array.isArray(list)) {
      const limit = 9;
      const slicedList = list.slice(offset, offset + limit);

      const artistIdResults = await Promise.all(
        slicedList.map(async (name) => {
          try {
            const res = await axios.get("https://api.spotify.com/v1/search", {
              headers,
              params: {
                q: name,
                type: "artist",
                limit: 1,
              },
            });
            return res.data.artists.items[0]?.id || null;
          } catch {
            return null;
          }
        })
      );

      const validIds = artistIdResults.filter(Boolean) as string[];

      if (validIds.length === 0) return [];

      const response = await axios.get("https://api.spotify.com/v1/artists", {
        headers,
        params: {
          ids: validIds.join(","),
        },
      });

      return response.data.artists;
    }

    if (type === "categories") {
      const response = await axios.get(
        `https://api.spotify.com/v1/browse/categories?limit=20&offset=${offset}`,
        { headers }
      );
      return response.data.categories.items;
    }

    return [];
  } catch (err) {
    console.error("Error in useFetch:", err);
    return [];
  }
};

export default useFetch;
