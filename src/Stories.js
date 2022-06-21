import React,{useEffect} from "react";

const Stories = () => {
    let isLoading = true;
  const fetchApiData = async (url) => {
      try {
          const res = await fetch(url);
          const data = await res.json()
          console.log(data)
          isLoading = false;
      } catch(err) {
          console.log(err)
    }
  };

  let api = "https://hn.algolia.com/api/v1/search?query=html";
  useEffect(() => {
    fetchApiData(api);
  }, []);

  return <div>My Tech news Psot</div>;
};

export default Stories;
