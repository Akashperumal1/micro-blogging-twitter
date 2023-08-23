import React, { useState } from 'react'
import styles from '../assets/blog.module.css'
import { Link } from 'react-router-dom'
import likeimg from '../assets/image/twitterheart.webp'
import unlikeimg from '../assets/image/unlike.png'
// import Linkers from './Linkers'
const Blog = () => {
   

    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageChange = (event) => {
      setSelectedImage(event.target.files[0]);
    };
  
    const handleUpload = () => {
      if (selectedImage) {
        setImages([...images, selectedImage]);
        setSelectedImage(null);
      }
    };
    
   function hover() {
    const element=document.getElementById(styles.hover);
    element.classList.toggle(styles.change-hover);
   }

  const [name,setname]=useState(unlikeimg);
  const [count,setCount]=useState(0);
  const changeheart=()=>{
    setCount(count+1);
    let value=name;
    if(value==unlikeimg ){
        setname(likeimg);
        setCount(count+1);
    }
    else{
        setname(unlikeimg);
        setCount(count+1);
        
    }
  };
  return (
    <div className={styles.body}>
    <div className={styles.main}>
        <div className={styles.submain1 } id={styles.hover} onClick={hover}>
            <img src={"src/assets/image/twitter-logo.png"} alt="img" className={styles.submain1logo}/>
            <div className={styles.link}>
            <ul >
                    <Link to={'/blog'}>
                        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9n85ZGydNsNdOGy_vQ6PcB0ci4J-Ch8sQDfGaXnaA&s" className={styles.linkimg} alt=" "/>Home</li>
                    </Link>
                    <Link to={'/blog'}>
                        <li><span>#</span> Explore</li>
                    </Link>
                    <Link to={'/notification'}>
                        <li><img src="https://static.vecteezy.com/system/resources/previews/009/394/762/original/bell-icon-transparent-notification-free-png.png" className={styles.linkimg} alt="notification"/>Notification</li>
                    </Link>
                    <Link to={'/message'}>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/685/685887.png" className={styles.linkimg} alt="message"/>Message</li>
                    </Link>
                    <Link to={'/blog'}>
                        <li><img src="https://static.vecteezy.com/system/resources/thumbnails/005/200/965/small/bookmark-black-color-icon-vector.jpg" className={styles.linkimg} alt="bookmark"/>Bookmark</li>
                    </Link>
                    <Link to={'/blog'}>
                        <li><img src="https://media.istockphoto.com/id/1001225200/vector/list-icon-vector-sign-and-symbol-isolated-on-white-background-list-logo-concept.jpg?s=1024x1024&w=is&k=20&c=eq_gg78lWiIfpBkzCyZGm9Wex7jcFIeIY11bXJn-R10=" className={styles.linkimg} alt="list"/>Lists</li>
                    </Link>
                    <Link to={'/profile'}>
                        <li><img src="data:image/png;base64,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" className={styles.linkimg} alt="profile"/>Profile</li>
                    </Link>
                    
                </ul>
            </div>
            <button className={styles.tweet} onclick="tweet">
                Tweet
            </button>
        </div>
        <div className={styles.submain2}>
           
            <div className={styles.bio1}>
                <div className={styles.subbio1}>
                    <div className={styles.linkediv}>
                    <div className={styles.imglogo}>
                        <img src={"data:image/png;base64,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"}
                            alt="icon"/>
                    </div>
                    <h2>Akash</h2><span className={styles.spanBl}>@akashp</span> 
                    </div>
                </div>
                <div></div>
                <ul className={styles.action}>
                    <li><Link to={'/blog'}><img src="#" alt="message"/></Link></li>
                    <li><Link to={'/blog'}><img src="#" alt="reload"/></Link></li>
                    <li className={styles.li4} onClick={changeheart}><img src={name} alt="upload"/><h5>{count}</h5></li>
                    <li><input type="file"  className={styles.inputimages} onChange={handleImageChange} multiple  /><button onClick={handleUpload}>Upload</button></li>
                </ul>
                <div className={styles.mainimage}>
      {images.map((image, index) => (
        <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} />
      ))}
      </div>


            </div>
                
        </div>
        {/* <div className={styles.submain3}>
            <div className={styles.subbio3}>
                <Linkers/>
            </div>
        </div> */}
    </div>
    </div>
    
  )
}

export default Blog