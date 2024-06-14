import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Blogs = () => {
  return (
   <>
     <Navbar/>
     <div className='container'>
     <section className='blog search-section'>
        <h2>BLOGS</h2>
        <div className="grid-container">
      <div className="grid-item">
        <img src="https://images.unsplash.com/photo-1496559249665-c7e2874707ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Image" />
        <div className='grid-item'>
          <div className='grid-text'>
            <h3>The Digital Dream: How Technology Movies Shape Our Vision of the Future</h3>
            <p>
            Technology movies captivate audiences by envisioning futuristic worlds and exploring the impact of innovation. Films like "The Matrix" challenge our perceptions of reality with simulated worlds created by AI, while "Blade Runner" questions what it means to be human in a future with bioengineered beings. "Her" delves into the emotional connections with artificial intelligence, and "Ex Machina" explores AI ethics and consciousness. "Minority Report" warns of the dangers of predictive technology in law enforcement. These movies inspire us to consider the potential and pitfalls of technological advancements, shaping our dreams and fears about the future
            </p>
          </div>
        </div>
         </div>
         <div className="grid-item">
          <img src='https://images.unsplash.com/photo-1611787640592-ebf78080d96e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9ycm9yJTIwbW92aWV8ZW58MHx8MHx8fDA%3D'></img>
           <div className='grid-item'>
          <div className='grid-text'>
            <h3>Horror: Exploring Haunting Spectacles</h3>
            <p>Horror movies have a unique power to thrill and terrify audiences, offering a glimpse into the darkest corners of the human psyche. From classics like "The Exorcist" and "Psycho" to modern hits like "The Conjuring" and "Get Out," these films tap into our deepest fears, from supernatural entities to psychological horrors. They challenge us to confront the unknown and explore the boundaries of fear. Whether it's spine-chilling suspense or gory terror, horror movies continue to captivate audiences worldwide, leaving a lasting impression long after the credits roll.
              
In the realm of horror, terror lurks in shadows, waiting to unleash spine-chilling nightmares. From eerie atmospheres to blood-curdling screams, these films immerse audiences in a world of fear and suspense. </p>
          </div>
        </div>
         </div>
         <div className="grid-item">
        <img src='https://plus.unsplash.com/premium_photo-1661456211021-2cdafa19e163?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
     <div className='grid-item'>
          <div className='grid-text'>
            <h3>Exploring Learning & Education in Movies</h3>
            <p>Movies have long been a source of inspiration and education, offering valuable insights into various subjects and life lessons. Films like "Dead Poets Society" and "Good Will Hunting" highlight the transformative power of education and mentorship. "Freedom Writers" and "Stand and Deliver" showcase the dedication of teachers in challenging environments. Whether exploring history, science, or literature, these movies spark curiosity and ignite a passion for learning. Through compelling storytelling and memorable characters, they remind us that education is a journey of discovery that transcends the classroom.</p>
          </div>
        </div>
         </div>
    </div>
      </section>
     </div>
    <Footer/>
    </>
  );
};

export default Blogs;
