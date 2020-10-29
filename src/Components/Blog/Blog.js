import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section>
            <div className="container pt-5">
                <div className="text-center">
                    <h6>My Blogs</h6>
                    <h3>Latest News</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem suscipit id laudantium doloribus saepe ea architecto deleniti ad laboriosam! Facilis, quisquam sequi magni aliquam id debitis illum enim atque.</p>
                </div>
                <div>

                </div>

                <div className="text-center pt-5">
               <Link to="/blog"> <button  className="learn-more-btn" >Learn More</button> </Link>
               </div>
            </div>
        </section>
    );
};

export default Blog;