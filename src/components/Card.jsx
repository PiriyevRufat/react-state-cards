import React from "react";
import { CCard,CCardImage,ReactImg,CCardBody,CCardTitle,CCardText,CButton } from "@coreui/react";

export const Card = () => {
    const mynewCards=[
        {
            id:1,
            title:"My-Name",
            subtitle:"My-Subt",
            image:"https://i.pinimg.com/736x/8a/e0/36/8ae0362c1dc338b3f99fec65dcf84621.jpg"
        },
        {
            id:2,
            title:"My-Name 2",
            subtitle:"My-Sub 2t",
            image:"https://i.pinimg.com/736x/8a/e0/36/8ae0362c1dc338b3f99fec65dcf84621.jpg"
        },
        {
            id:3,
            title:"My-Name 3",
            subtitle:"My-Subt 3",
            image:"https://i.pinimg.com/736x/8a/e0/36/8ae0362c1dc338b3f99fec65dcf84621.jpg"
        }
    ]
  return (
    <div>
    {mynewCards.map((item)=>(
        <CCard style={{ width: "18rem" }}>
            <CCardImage orientation="top" src={item.image} />
            <CCardBody>
              <CCardTitle>{item.id}</CCardTitle>
              <CCardText>
                {item.title}
              </CCardText>
              <CButton color="primary" href="#">
              {item.subtitle}
              </CButton>
            </CCardBody>
          </CCard>
    ))}
    </div>
  );
};
