const getDataMessage = async ( id = false ) => {
  const datas = await fetch("./js/JSON/message.json");
  const datas2 = await fetch("./js/JSON/users.json");

  if (!datas.ok) return [];
  if (!datas2.ok) return [];

  const [ users, message ] = [ await datas2.json(), await datas.json() ]

  const out = message.map((data) => {
    const idUserMessage = data.idUserFirst !== 'ViguHfIuocazFD7' ? data.idUserFirst : data.idUserSecond
    const [ userData ] = users.filter( user => user.id === idUserMessage ) 

    return {
      id : data.id,
      idUser : userData.id,
      avatarUser : userData.avatar,
      username : userData.username
    } 
  }); 
 
  return id ? out.filter( data => data.id === id )[0] : out
};
export default getDataMessage;
