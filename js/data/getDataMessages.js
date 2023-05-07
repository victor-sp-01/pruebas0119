const getDataMessages = async () => {
    const data = await fetch("./js/JSON/messages.json");
  
    if (data.ok) return await data.json();
    return [];
  };
  export default getDataMessages;