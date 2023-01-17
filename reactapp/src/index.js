import React from "react";
import  ReactDOM from "react-dom";
import "./index.css"



function Hi (props){
  return( 
  <div className="post">
    <div className="profile">
      <img src="" alt="" />
      <h2>{props.name}</h2>
      <span>{props.date}</span>
    </div>
    <br/>
    <p>{props.text}</p>
    <img
      width="300px"
      src={props.imageUrl}
      alt=""
     />  
    <hr/>
    <div className="buttons">
      <button>Like</button>
      <button>Comments</button>
      <button>Share</button>
      <input placeholder="Write Comments"/>
    </div>
  </div>
  );
}
ReactDOM.render(<div>
  <Hi 
    name="Nadeem" 
    date= " 1 jan 2023" 
    imageUrl="https://media.istockphoto.com/id/632443888/photo/founder-of-pakistan-jinnahs-tomb-called-mazar-e-quid-karachi.jpg?b=1&s=170667a&w=0&k=20&c=IWa11lLbA-cbZopeLyAc6-Lzi92WGilX84g6yuR_1Ww="
    text="Mazar-e-Quaid, also known as Jinnah Mausoleum or the National Mausoleum, is the final resting place of Muhammad Ali Jinnah, the founder of Pakistan. Designed in a 1960s modernist style, it was completed in 1971, and is an iconic symbol of Karachi as well as one of the most popular tourist sites in the city."
    />
  <Hi 
    name="Nadeem"  
    imageUrl="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/325952857_708168224333041_4911941561469231355_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG9UiBJ3c-JWtMFokPKO47CYj_APxXgBYliP8A_FeAFie-HIlOLOhPQmYk8iOAHO0oW1rnV90ECYUHgwayzz4U6&_nc_ohc=nzxcJpHxk5IAX-yt81-&_nc_ht=scontent.fkhi11-2.fna&oh=00_AfBI4jCduxjTzNY6Q2iBedfULoQ9X8WTZ5Th4gKVVNj-uA&oe=63CB3BCD" 
    text="Alhamdulillah another campus has been Inducted in SMIT. A seminar has been conducted in our newly built campus at Saylani Headofice. An interactive seminar has been conducted to enhance students communication skills & IT skill set. Stay connected with us.
    #SaylaniMassTrainingProgram
    #SpreadSaylani
    #SaylaniWelfareInternationalTrust
    #LetsBuildPakistantogether
    #freeiteducation 
    #SMITHeadoffice
    #Topquailityenvironment
    #studentsdevelopment"
  />
  <Hi name="Nadeem"  imageUrl={30}/>
  <Hi name="Nadeem"  imageUrl={30}/>

</div>,document.querySelector("#root"));