import missingImage from '../assets/image/image-missing.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

const ArticleCard = (props) => {

  /*
  //Formatting the publishDate and separating into date and time  
  const dateStr = props.article.publishDate;
  const dateStrArr = dateStr.split("T");
  const timeStr = dateStrArr[1];
  const timeStrArr = timeStr.split("+");
  */

  /*
  //Deciding keywords to search for
  const chosenKeywords = [
    "HiQ",
    "hiq",
    "HIQ",
  ]
  //Separating words in article title and checking if keywords are present
  const titleWords = props.article.title.split(" ");
  for (let i = 0; i < titleWords.length; i++) {
    if (chosenKeywords.includes(titleWords[i])) {
      console.log("chosen keyword found in title: " + props.article.title)
    }
  }
  //Separating words in article description and checking if keywords are present
  const descriptionWords = props.article.description.split(" ");
  for (let i = 0; i < descriptionWords.length; i++) {
    if (chosenKeywords.includes(descriptionWords[i])) {
      console.log("chosen keyword found in description")
    }
  }
  */

  //Relevant categories
  const relevantCategories = [
    "Computer Sweden",
    "Ekonomi/Bransch",
    "PC för Alla",
    "Teknik",
    "M3",
    "MacWorld",
    "CS Bransch",
    "Apple",
    "Plusbox",
    "Ljud & Bild",
    "Internet/Webbtjänster",
    "Prylar & Tillbehör",
    "Rykte",
    "Hårdvara",
    "Hemelektronik",
    "Gadgets",
    "Mjukvara",
    "Motor",
    "Film / Tv-serier",
    "Mobilt/Handdator/Laptop",
    "Underhållning/Spel",
    "Forumtipset",
    "Persondatorer",
    "Medel",
    "Datortillbehör",
    "CIO Sweden",
  ]

  /*
  //Removing duplicate categories
  const uniqueCategories = [...new Set(props.article.category)]
  */

  //Formatting the categories to only include categories from relevantCategories array
  const categories = []
  for (let i = 0; i < props.article.category.length; i++) {
    if (relevantCategories.includes(props.article.category[i])) {
      categories.push(props.article.category[i]);
    }
  }

  return (
    <>
      {props.article.containsKeyword ? 
        <div className="article-card-important">
          <img className="article-image" src={props.article.imageUrl} alt={missingImage}/>
          <div className="article-textbox">
            <div className="article-title">{props.article.title}</div>
            <div className="article-description">{props.article.description}</div>
            <div className="article-bottom">
              <div className="article-tag-group">
                <FontAwesomeIcon icon={faHashtag} className="fa-hash-icon" />
                {categories.map((category, index) => (
                  <div className="article-tag" key={index}>{category}</div>
                ))}
              </div>
              <div className="article-publish-group">
                <div className="article-publish-date">{props.article.date}</div>
                <div className="article-publish-time">{props.article.time}</div>
              </div>
            </div>
          </div>
        </div> :
        <div className="article-card">
          <img className="article-image" src={props.article.imageUrl} alt={missingImage}/>
          <div className="article-textbox">
            <div className="article-title">{props.article.title}</div>
            <div className="article-description">{props.article.description}</div>
            <div className="article-bottom">
              <div className="article-tag-group">
                <FontAwesomeIcon icon={faHashtag} className="fa-hash-icon" />
                {categories.map((category, index) => (
                  <div className="article-tag" key={index}>{category}</div>
                ))}
              </div>
              <div className="article-publish-group">
                <div className="article-publish-date">{props.article.date}</div>
                <div className="article-publish-time">{props.article.time}</div>
              </div>
            </div>
          </div>
        </div>}
    </>
  );
};

export default ArticleCard;
