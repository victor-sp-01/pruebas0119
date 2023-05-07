import Element from "../libs/Element.js"
const LstMessage =( menssages )=>{

    const idUserSet = "ViguHfIuocazFD7";
    const lstMessage = document.createDocumentFragment()

    menssages.forEach((chat, i) => {
        const position = chat.idUserSet === idUserSet ? "right" : "";
        const topUser =
        i === 0 || chat.idUserSet !== menssages[i - 1].idUserSet ? true : false;
        const bottomUser =
        i === menssages.length - 1 || chat.idUserSet !== menssages[i + 1].idUserSet
            ? true
            : false;

        const classTopUSer =
        !topUser && !bottomUser
            ? "topBottom"
            : !topUser
            ? "top"
            : !bottomUser
            ? "bottom"
            : "";

        const $element = new Element({ element: lstMessage });
        $element.create({
        children: [
            { classID: ".div__Dnziu p", contents: { textContent: chat.message } },
        ],
        element: `
        <div class="div__s3T7q ${position}" >
            
            <a class="a__zYRbn a-YrGy1cQguOAKPYn" data-id="${chat.id}" ></a>
            <div class="div__Dnziu ${classTopUSer}" >
                ${
                chat.imgs.length === 0
                    ? ""
                    : `<div class="div__EnM97" >
                ${chat.imgs
                    .map((img) => `<img src="./img/backgrounds/${img}">`)
                    .join("")}
                </div>`
                }
                <p></p>
                <span>${chat.time}</span>
            </div>
        </div>
        `,
        });
    });

    return lstMessage
}

export default LstMessage