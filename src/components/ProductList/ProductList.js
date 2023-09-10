import React, { useContext } from "react";
import Product from "../Product/Product";
import { products } from "../../data";
import project from "../../img/project.png";
import "./ProductList.css";
import { ThemeContext } from "../../context";
import ReactReadMoreReadLess from "react-read-more-read-less";

const ProductList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const cloudResumeText =
    "Cloud Resume store user experience details and user can view or update his or her information anywhere any time Cloud Resume helps his or her User's to create his own portfolio using cloud resume create portfolio feature So that user can download his or her portfolio from anywhere or anytime by just visiting cloud resume website. But for enjoying this feature you have to sign up our page and do the registration.";

  const Knews =
    "Knews is a application through which you can see all the latest news. It divided in to many section such as general in which you can see the list of all types of news.Knews also contain news as per user interest such as Sports, Healthcare, Politics, Science, Entertainment.On Click of section you will redirect to your interested news.";

  const iNoteBook =
    "INoteBook is a cloud notebook in which you user can write his important notes with tag. He can add title small tag and description what he wants to do. user can create his own notes on cloud so that if user want to access anywhere he can. INoteBook is secured with authentication. To access the feature the user has to signup first. Users all notes are secure in INoteBook only user can acess his or her notes.";

  const textUtils = 
  "Text Utils is a word counter or character counter utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert text from Uppercase to Lowercase and Lowercase to Uppercase";
  
  return (
    // <div className="pl">
    //   <div className="pl-texts">
    //     <h1 className="pl-title">Personal Projects</h1>
    //     <p className="pl-desc">
    //      Below are the projects which is created by me in my free time.
    //     </p>
    //   </div>
    //   <div className="pl-list">
    //     {products.map((item) => (
    //       <Product key={item.id} img={item.img} link={item.link} />
    //     ))}
    //   </div>
    // </div>

    <div className="pl container" id="project">
      <div className="pl-texts">
        <h1 className="pl-title">Personal Projects</h1>
        <p className="pl-desc">
          Below are the projects which are created by me in my free time.
        </p>
      </div>
      <div className="games">
        <div
          className="game"
          style={{
            backgroundColor: darkMode && "#333",
            color: darkMode && "white",
          }}
        >
          <h4
            className="project-title"
            style={{ borderBottom: darkMode && "1px solid white" }}
          >
            Cloud Resume
          </h4>

          <div className="project-desc">
            <ReactReadMoreReadLess
              charLimit={240}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {cloudResumeText}
            </ReactReadMoreReadLess>
          </div>
          <div className="project-link">
            <a
              style={{ textDecoration: "none" }}
              href="https://cloud-resume-mern.herokuapp.com/"
            >
              Visit Cloud Resume
            </a>
          </div>
        </div>

        <div
          className="game"
          style={{
            backgroundColor: darkMode && "#333",
            color: darkMode && "white",
          }}
        >
          <h4
            className="project-title"
            style={{ borderBottom: darkMode && "1px solid white" }}
          >
            Text Utils
          </h4>

          <div className="project-desc">
          <ReactReadMoreReadLess
              charLimit={250}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {textUtils}
            </ReactReadMoreReadLess>
          </div>
          <div className="project-link">
            <a
              style={{ textDecoration: "none" }}
              href="https://kamal-umesh-pandey.github.io/REACT-TextUtilsSite/"
            >
              Visit Text Utils
            </a>
          </div>
        </div>

        <div
          className="game"
          style={{
            backgroundColor: darkMode && "#333",
            color: darkMode && "white",
          }}
        >
          <h4
            className="project-title"
            style={{ borderBottom: darkMode && "1px solid white" }}
          >
            INoteBook
          </h4>

          <div className="project-desc">
          <ReactReadMoreReadLess
              charLimit={250}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {iNoteBook}
            </ReactReadMoreReadLess>
          </div>
          <div className="project-link">
            <div>Project Not Hosted</div>
          </div>
        </div>

        <div
          className="game"
          style={{
            backgroundColor: darkMode && "#333",
            color: darkMode && "white",
          }}
        >
          <h4
            className="project-title"
            style={{ borderBottom: darkMode && "1px solid white" }}
          >
            KNews
          </h4>

          <div className="project-desc">
            <ReactReadMoreReadLess
              charLimit={260}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {Knews}
            </ReactReadMoreReadLess>
          </div>
          <div className="project-link">
            <div>Project Not Hosted</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
