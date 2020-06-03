'use strict';
import {BlogPost} from './02-blog-post-ts';

// Reuse your BlogPost class
// Create a Blog class which can
//  store a list of BlogPosts
//  add BlogPosts to the list
//  delete(int) one item at given index
//  update(int, BlogPost) one item at the given index and update it with another BlogPost

export class Blog {
  list: BlogPost[] = [];

  add(blogpost: BlogPost): void {
    this.list.push(blogpost);
  }

  delete(index: number): void {
    this.list.splice(index, 1);
  }

  update(index: number, blogpost: BlogPost): void {
    this.list.splice(index, 1, blogpost);
  }

}

let post1 = new BlogPost(
  'John Doe',
  'Lorem Ipsum',
  'Lorem ipsum dolor sit amet.',
  '2000.05.04.'
);

let post2 = new BlogPost(
  'Tim Urban',
  'Wait but why',
  'A popular long-form, stick-figure-illustrated blog about almost everything.',
  '2010.10.10.'
);

let post3 = new BlogPost(
  'William Turton',
  'One Engineer Is Trying to Get IBM to Reckon With Trump',
  'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.',
  '2017.03.28.'
);

  let myBlogPost: Blog = new Blog;
  myBlogPost.add(post1);
  myBlogPost.add(post2);
  myBlogPost.add(post3);

  console.log(myBlogPost.list.length);
  myBlogPost.delete(1);
  console.log(myBlogPost.list);
  console.log(myBlogPost.list.length);
  console.log(myBlogPost.list);
  myBlogPost.update(1, post2);
  console.log(myBlogPost.list);